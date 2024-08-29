"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import bcrypt from 'bcrypt';

import { createSession } from "@libs/session";

import {
  SignupFormSchema,
  SigninFormSchema
} from "@libs/schema";

import {
  registerUserService,
  loginUserService
} from "@utils/data/services/auth-services";

async function registerUserAction(prevState, formData) {
  const data = Object.fromEntries(formData.entries());

  const validatedFields = SignupFormSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      ...prevState,
      state: false,
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Required fileds must be filled!"
    };
  }

  // const { username, email, password } = validatedFields.data;

  // const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const res = await registerUserService(validatedFields.data);

    createSession(res.jwt);

    return {
      errors: null,
      state: true,
      message: "Registered Successfully."
    };
  } catch (error) {
    const serverErrors = error?.data?.error || {
      message: "Ops! Something went wrong. Please try again."
    };

    const updatedServerErrors = {
      username: "",
      email: ""
    };

    if (serverErrors.message.includes("Username", "Email")) {
      updatedServerErrors.username = serverErrors.message;
      updatedServerErrors.email = serverErrors.message;
    } else if (serverErrors.message.includes("Username")) {
      updatedServerErrors.email = serverErrors.message;
    } else if (serverErrors.message.includes("Email")) {
      updatedServerErrors.username = serverErrors.message;
    } else {
      serverErrors.message = "";
    }

    return {
      ...prevState,
      state: false,
      errors: updatedServerErrors,
      message: serverErrors.message
    };
  }

  // redirect("/?success=Registration successful!");
}

async function loginUserAction(prevState, formData) {
  const validatedFields = SigninFormSchema.safeParse({
    identifier: formData.get("identifier"),
    password: formData.get("password"),
  });

  const redirectTo = formData.get("redirectTo") || "/";

  if (!validatedFields.success) {
    return {
      ...prevState,
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Login.",
    };
  }

  // const { identifier, password } = validatedFields.data;

  try {
    const res = await loginUserService(validatedFields.data);

    createSession(res.jwt);
  } catch (error) {
    const serverErrors = error?.data?.error || {
      message: "Ops! Something went wrong. Please try again."
    };

    const updatedServerErrors = {};

    if (serverErrors.message.includes("identifier")) {
      updatedServerErrors.identifier = serverErrors.message;
    } else if (serverErrors.message.includes("password")) {
      updatedServerErrors.password = serverErrors.message;
    } else {
      serverErrors.message = "";
    }

    return {
      ...prevState,
      errors: updatedServerErrors,
      message: error.statusText
    };
  }

  redirect(redirectTo);
}

async function logoutUserAction() {
  cookies().set("jwt", "", { maxAge: -1 });

  redirect("/auth/login");
}

export {
  registerUserAction,
  loginUserAction,
  logoutUserAction
};

"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { z } from "zod";

import {
  registerUserService,
  loginUserService
} from "@utils/data/services/auth-services";

const config = {
  maxAge: 60 * 60 * 24 * 7,
  path: "/",
  domain: process.env.HOST ?? "localhost",
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
};

const schemaRegister = z.object({
  username: z.string().min(3).max(20, {
    message: "Username must be between 3 and 20 characters",
  }),
  password: z.string().min(6).max(100, {
    message: "Password must be between 6 and 100 characters",
  }),
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
});

async function registerUserAction(prevState, formData) {
  const validatedFields = schemaRegister.safeParse({
    username: formData.get("username"),
    password: formData.get("password"),
    email: formData.get("email"),
  });

  if (!validatedFields.success) {
    return {
      ...prevState,
      zodErrors: validatedFields.error.flatten().fieldErrors,
      serverErrors: null,
      message: "Missing Fields. Failed to Register.",
    };
  }

  try {
    const responseData = await registerUserService(validatedFields.data);

    cookies().set("jwt", responseData.jwt, config);

    redirect("/auth/login");
  } catch (error) {
    console.log(error);

    const serverErrors = error?.data?.error || {
      message: "Ops! Something went wrong. Please try again."
    };

    const updatedServerErrors = {};

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
      serverErrors: updatedServerErrors,
      zodErrors: null,
      message: error.statusText,
    };
  }
}

const schemaLogin = z.object({
  identifier: z.string().min(3, {
    message: "Identifier must have at least 3 or more characters",
  }).max(200, {
    message: "Please enter a valid username or email address",
  }),
  password: z.string().min(6, {
    message: "Password must have at least 6 or more characters",
  }).max(100, {
    message: "Password must be between 6 and 100 characters",
  }),
});

async function loginUserAction(prevState, formData) {
  const validatedFields = schemaLogin.safeParse({
    identifier: formData.get("identifier"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      ...prevState,
      zodErrors: validatedFields.error.flatten().fieldErrors,
      serverErrors: null,
      message: "Missing Fields. Failed to Login.",
    };
  }

  try {
    const responseData = await loginUserService(validatedFields.data);

    console.log(responseData);

    cookies().set("jwt", responseData.jwt, config);

    redirect("/dashboard");
  } catch (error) {

    const serverErrors = error?.data?.error || {
      message: "Ops! Something went wrong. Please try again."
    };

    console.log(serverErrors);

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
      serverErrors: updatedServerErrors,
      zodErrors: null,
      message: error.statusText,
    };
  }
}

async function logoutUserAction() {
  cookies().set("jwt", "", { maxAge: -1 });

  redirect("/auth/register");
}

export {
  registerUserAction,
  loginUserAction,
  logoutUserAction
};

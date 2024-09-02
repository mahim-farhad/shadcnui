"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import bcrypt from 'bcrypt';

import { SignupFormSchema, SigninFormSchema } from "@libs/schema";
import { createSession } from "@libs/session";

import { registerUser, authenticateUser } from "@api/auth";

export async function registerUserAction(prevState, formData) {
  const data =
    Object.fromEntries(formData.entries());

  const validatedFields =
    SignupFormSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      ...prevState,
      errors:
        validatedFields.error.flatten().fieldErrors,
      message: "Required fileds must be filled!"
    };
  }

  // const { username, email, password } = validatedFields.data;

  // const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const res =
      await registerUser(validatedFields.data);

    createSession(res.jwt);
  } catch (error) {
    const serverErrors = error?.data?.error || {
      message:
        "Something went wrong. Please try again."
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

    // if (serverErrors.status === 401) {
    //   serverErrors.message = "Unauthorized access. Please login.";
    // } else if (serverErrors.status === 404) {
    //   serverErrors.message = "Resource not found. Please try again later.";
    // } else if (serverErrors.status === 500) {
    //   serverErrors.message = "Internal server error. Please try again later.";
    // } else if (serverErrors.status === 400) {
    //   serverErrors.message = "Bad request. Please check your input.";
    // }

    return {
      ...prevState,
      errors: updatedServerErrors,
      message: serverErrors.statusText
    };
  }

  revalidatePath("/");

  redirect("/?success=registration-successful!");
}

export async function loginUserAction(prevState, formData) {
  const validatedFields = SigninFormSchema.safeParse({
    identifier: formData.get("identifier"),
    password: formData.get("password"),
  });

  const redirectTo = formData.get("redirectTo") || "/";

  if (!validatedFields.success) {
    return {
      ...prevState,
      errors:
        validatedFields.error.flatten().fieldErrors,
      message:
        "Missing Fields. Failed to Login.",
    };
  }

  // const { identifier, password } = validatedFields.data;

  try {
    const res = await authenticateUser(validatedFields.data);

    createSession(res.jwt);
  } catch (error) {
    const serverErrors = error?.data?.error || {
      message:
        "Something went wrong. Please try again."
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

  revalidatePath("/");

  redirect(redirectTo);
}

export async function logoutUserAction() {
  cookies().set("jwt", "", { maxAge: -1 });

  redirect("/auth/login");
}

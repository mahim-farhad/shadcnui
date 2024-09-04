"use server";

import { redirect } from "next/navigation";

// import bcrypt from 'bcrypt';

import { SignupFormSchema, SigninFormSchema } from "@libs/zodValidations";
import { createSession, deleteSession } from "@libs/session";

import { registerUser, authenticateUser } from "@api/auth";
import { delay } from "@utils/utils";

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
      message:
        "Required fileds must be filled!"
    };
  }

  // const { password } = validatedFields.data;

  // const hashedPassword = await bcrypt.hash(password, 10);

  // console.log(hashedPassword)

  try {
    const res =
      await registerUser(validatedFields.data);

    await createSession(res.jwt);
  } catch (error) {
    let errorMessage = "";

    const fieldErrors = {
      username: "",
      email: ""
    };

    if (error.response) {
      const { status, data } = error.response;

      if (status === 400 || status === 429) {
        const serverErrorMessage =
          data?.error?.message || errorMessage;

        errorMessage = serverErrorMessage;

        if (errorMessage.includes("Username", "Email")) {
          fieldErrors.username = errorMessage;

          fieldErrors.email = errorMessage;
        }
      } else {
        errorMessage = data;
      }
    } else {
      errorMessage =
        error.message || "Something went wrong. Please try again."
    }

    return {
      ...prevState,
      message: errorMessage,
      errors: fieldErrors,
    };
  }

  redirect("/?success=registration-successful!");
}

export async function loginUserAction(prevState, formData) {
  // await delay(2000);

  const validatedFields = SigninFormSchema.safeParse({
    identifier: formData.get("identifier"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      ...prevState,
      errors:
        validatedFields.error.flatten().fieldErrors,
      message:
        "Required fileds must be filled!",
    };
  }

  const redirectTo =
    formData.get("redirectTo") || "/";

  try {
    const res =
      await authenticateUser(validatedFields.data);

    await createSession(res.jwt);
  } catch (error) {
    let errorMessage = "";

    const fieldErrors = {
      identifier: "",
      password: ""
    };

    if (error.response) {
      const { status, data } = error.response;

      if (status === 400 || status === 429) {
        const serverErrorMessage =
          data?.error?.message || errorMessage;

        errorMessage = serverErrorMessage;

        if (errorMessage.includes("identifier", "password")) {
          fieldErrors.identifier = errorMessage;

          fieldErrors.password = errorMessage;
        }
      } else {
        errorMessage = data;
      }
    } else {
      errorMessage =
        error.message || "Something went wrong. Please try again."
    }

    return {
      ...prevState,
      message: errorMessage,
      errors: fieldErrors,
    };
  }

  redirect(redirectTo);
}

export async function logoutUserAction() {
  await deleteSession();

  redirect("/auth/login");
}

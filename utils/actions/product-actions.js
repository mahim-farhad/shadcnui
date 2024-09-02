"use server";

import { revalidatePath } from "next/cache";

import { ProductFormSchema } from "@libs/zodValidations";

import { createProduct } from "@api/products";

export async function createProductAction(prevState, formData) {
  const data =
    Object.fromEntries(formData.entries());

  const validatedFields =
    ProductFormSchema.safeParse(data);

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
      await createProduct(validatedFields.data);
  } catch (error) {
    const serverErrors = error?.data?.error || {
      message:
        "Something went wrong. Please try again."
    };

    const updatedServerErrors = {
      productTitle: ""
    };

    if (serverErrors.message.includes("Title")) {
      updatedServerErrors.productTitle = serverErrors.message;
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

  revalidatePath("/admin/products");
}

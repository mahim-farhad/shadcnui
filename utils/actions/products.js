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

  try {
    const res =
      await createProduct(validatedFields.data);
  } catch (error) {
    let errorMessage = "";

    const fieldErrors = {
      productTitle: "",
      productSlug: "",
      productDescription: "",
      productPrice: ""
    };

    if (error.response) {
      const { status, data } = error.response;

      if (status === 400 || status === 429) {
        const serverErrorMessage =
          data?.error?.message || errorMessage;

        errorMessage = serverErrorMessage;

        if (errorMessage.includes("Title")) {
          fieldErrors.productTitle = errorMessage;
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

  revalidatePath("/admin/products");
}

"use client";

import { useEffect, useState } from "react";

import { useFormState } from "react-dom";

import { toast } from "sonner";

import { zodResolver } from "@hookform/resolvers/zod";

import { useForm, FormProvider } from "react-hook-form";

import { ProductFormSchema } from "@libs/schema";

import { createProductAction }
  from "@utils/actions/product-actions";

import Button from "@components/ui/Button";

import {
  FormField, FormItem,
  FormLabel, FormControl, FormIcon,
  FormMessage,
} from "@components/inputs/Form";

import Box from "@components/layouts/Box";

const defaultValues = {
  productTitle: "",
  // productPrice: "",
  // slug: "",
};

const INITIAL_STATE = {
  data: null,
  errors: null,
  message: null,
};

const convertToFormData = (data) => {
  const formData = new FormData();

  Object.keys(data).forEach(key => formData.append(
    key, data[key]
  ));

  return formData;
};

function ProductsForm() {
  const form = useForm({
    resolver: zodResolver(ProductFormSchema),
    defaultValues,
  });

  const { handleSubmit, setError, reset } = form;

  const [formState, formAction] = useFormState(
    createProductAction,
    INITIAL_STATE
  );

  const [isPending, setPending] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (formState?.errors) {
      Object.entries(formState.errors).forEach(([key, value]) => {
        setError(key, {
          type: "server",
          message: value
        });
      });
    }

    if (formState?.message) {
      setSuccessMessage(formState.message);
    }
  }, [formState, setError]);

  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage, {
        position: 'top-center',
      });

      setSuccessMessage("");
    }
  }, [successMessage]);

  const onSubmit = async (data) => {
    const formData =
      convertToFormData(data);

    formAction(formData);
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="productTitle"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>

              <FormControl
                type="text"
                placeholder="Title"
                {...field}
              />

              {/* <FormIcon name="User" /> */}

              <FormMessage />
            </FormItem>
          )}
        />

        {/* <FormField
          control={form.control}
          name="productPrice"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price</FormLabel>

              <FormControl
                type="number"
                placeholder="Price"
                {...field}
              />

              <FormIcon name="DollarSign" />

              <FormMessage />
            </FormItem>
          )}
        /> */}

        {/* <FormField
          control={form.control}
          name="text"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Slug</FormLabel>

              <FormControl
                type="text"
                placeholder="Password"
                {...field}
              />

              <FormIcon name="Lock" />

              <FormMessage />
            </FormItem>
          )}
        /> */}

        <Box className="flex items-center gap-4 py-4">
          <Button
            type="button"
            variant="toned"
            onClick={() => reset({ defaultValues })}
            className="w-full"
          >
            Reset
          </Button>

          <Button
            type="submit"
            disabled={isPending}
            className="w-full"
          >
            {isPending ? "Submitting..." : "Submit"}
          </Button>
        </Box>
      </form>
    </FormProvider>
  );
};

export default ProductsForm;

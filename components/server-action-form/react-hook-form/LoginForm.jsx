"use client";

import { useState, useEffect } from "react";

import { useFormState } from "react-dom";

import { toast } from "sonner";

import { zodResolver } from "@hookform/resolvers/zod";

import { useForm, FormProvider } from "react-hook-form";

import { SigninFormSchema } from "@libs/zodValidations";

import { loginUserAction } from "@utils/actions/auth";

import Button from "@components/ui/Button";

import {
  FormField, FormItem,
  FormLabel, FormControl, FormIcon,
  FormMessage,
} from "@components/inputs/Form";

import Box from "@components/layouts/Box";

const defaultValues = {
  identifier: "",
  password: "",
};

const INITIAL_STATE = {
  data: null,
  message: null,
  errors: null
};

const convertToFormData = (data) => {
  const formData = new FormData();

  Object.keys(data).forEach(key => formData.append(
    key, data[key]
  ));

  return formData;
};

function LoginForm() {
  const form = useForm({
    mode: 'onBlur',
    resolver: zodResolver(SigninFormSchema),
    defaultValues,
  });

  const {
    handleSubmit, setError,
    reset, trigger,
    formState: {
      isSubmitting
    }
  } = form;

  const [formState, formAction] = useFormState(
    loginUserAction,
    INITIAL_STATE
  );

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
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4"
      >
        <FormField
          control={form.control}
          name="identifier"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Identifier</FormLabel>

              <FormControl
                type="identifier"
                placeholder="Identifier"
                {...field}
                onBlur={() => trigger("identifier")}
              />

              <FormIcon name="Mail" />

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>

              <FormControl
                type="password"
                placeholder="Password"
                {...field}
                onBlur={() => trigger("password")}
              />

              <FormIcon name="Lock" />

              <FormMessage />
            </FormItem>
          )}
        />

        <Box className="flex items-center gap-4 py-4">
          <Button
            variant="toned"
            onClick={() => reset({ defaultValues })}
            className="w-full"
          >
            Reset
          </Button>

          <Button
            type="submit"
            className="w-full"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </Box>
      </form>
    </FormProvider>
  );
};

export default LoginForm;

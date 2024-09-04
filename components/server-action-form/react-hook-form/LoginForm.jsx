"use client";

import { useState, useEffect } from "react";

import { useFormState } from "react-dom";

import { toast } from "sonner";

import { zodResolver } from "@hookform/resolvers/zod";

import { useForm, FormProvider } from "react-hook-form";

import { loginZodSchema } from "@libs/zodValidations";

import { loginUserAction } from "@utils/actions/auth";

import {
  FormField, FormItem,
  FormLabel, FormControl, FormIcon,
  FormMessage,
} from "@components/inputs/Form";

import Box from "@components/layouts/Box";
import LoadingButton from "@components/ui/LoadingButton";

const defaultValues = {
  identifier: "",
  password: "",
};

const INITIAL_STATE = {
  data: null,
  message: null,
  errors: null
};

function LoginForm() {
  const form = useForm({
    mode: "onBlur",
    resolver: zodResolver(loginZodSchema),
    defaultValues,
  });

  const {
    // handleSubmit,
    setError,
    trigger,
    formState: {
      isValid
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

    if (formState?.message)
      setSuccessMessage(formState.message);

  }, [formState, setError]);

  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage, {
        position: "top-center",
      });

      setSuccessMessage("");
    }
  }, [successMessage]);

  // const onSubmit = async (data) => {
  //   const formData =
  //     convertToFormData(data);

  //   formAction(formData);
  // };

  return (
    <FormProvider {...form}>
      <form
        action={formAction}
        // onSubmit={handleSubmit(onSubmit)}
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
                onBlur={() => trigger("identifier")}
                {...field}
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
                onBlur={() => trigger("password")}
                {...field}
              />

              <FormIcon name="Lock" />

              <FormMessage />
            </FormItem>
          )}
        />

        <Box className="flex items-center gap-4 py-4">
          <LoadingButton
            type="submit"
            className="w-full"
            disabled={!isValid}
          />
        </Box>
      </form>
    </FormProvider>
  );
};

export default LoginForm;

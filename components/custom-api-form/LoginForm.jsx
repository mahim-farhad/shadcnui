"use client";

import { useState, useEffect } from "react";

import { toast } from "sonner";

import { zodResolver } from "@hookform/resolvers/zod";

import { useForm, FormProvider } from "react-hook-form";

import { loginZodSchema } from "@libs/zodValidations";

import useFormHook from "@hooks/useFormValidation";

import {
  FormField, FormItem,
  FormLabel, FormControl, FormIcon,
  FormMessage,
} from "@components/inputs/Form";

import Box from "@components/layouts/Box";
import Button from "@components/ui/Button";

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
    handleSubmit,
    setError,
    trigger,
    formState: {
      isValid
    }
  } = form;

  const {
    loading,
    message,
    errors,
    onSubmit
  } = useFormHook(form);

  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (errors?.errors) {
      Object.entries(errors.errors).forEach(([key, value]) => {
        setError(key, {
          type: "server",
          message: value
        });
      });
    }

    if (message)
      setSuccessMessage(message);
  }, [errors, setError]);

  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage, {
        position: "top-center",
      });

      setSuccessMessage("");
    }
  }, [successMessage]);

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
          <Button
            type="submit"
            className="w-full"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </Button>
        </Box>
      </form>
    </FormProvider>
  );
};

export default LoginForm;

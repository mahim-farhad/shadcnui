"use client";

import { useEffect } from "react";

import { useFormState, useActionState } from "react-dom";

import { toast } from "sonner";

import { zodResolver } from "@hookform/resolvers/zod";

import { useForm, FormProvider } from "react-hook-form";

import { SignupFormSchema } from "@libs/schema";

import { registerUserAction }
  from "@utils/data/actions/auth-actions";

import Link from "@components/ui/Link";
import Button from "@components/ui/Button";

import {
  FormField, FormItem,
  FormLabel, FormControl, FormIcon,
  FormMessage,
} from "@components/inputs/Form";

import Box from "@components/layouts/Box";

const defaultValues = {
  username: "",
  email: "",
  password: "",
};

const INITIAL_STATE = {
  data: null,
  errors: null,
  message: null,
};

const convertToFormData = (data) => {
  const formData = new FormData();
  Object.keys(data).forEach(key => formData.append(key, data[key]));
  return formData;
};

function RegisterForm() {
  const form = useForm({
    resolver: zodResolver(SignupFormSchema),
    defaultValues,
  });

  const { handleSubmit, setError, reset } = form;

  const [formState, formAction] = useFormState(
    registerUserAction,
    INITIAL_STATE
  );

  console.log(formState);

  useEffect(() => {
    if (formState?.errors && formState?.message) {
      Object.entries(formState.errors).forEach(([key, value]) => {
        setError(key, {
          type: "server",
          message: value
        });
      });
    }

    if (!formState?.errors && formState?.message) {
      console.log(formState.message);

      toast.error("Registration successful!");
    }
  }, [formState?.errors, setError]);

  const onSubmit = async (data) => {
    const formData = convertToFormData(data);

    formAction(formData);
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>

              <FormControl
                type="text"
                placeholder="Username"
                {...field}
              />

              <FormIcon name="User" />

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>

              <FormControl
                type="email"
                placeholder="Email"
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
                {...field}
              />

              <FormIcon name="Lock" />

              <FormMessage />
            </FormItem>
          )}
        />

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
            // disabled={formState?.errors}
            className="w-full"
          >
            {/* {loading ? "Submitting..." : "Submit"} */}
            Submit
          </Button>
        </Box>
      </form>
    </FormProvider>
  );
};

export default RegisterForm;

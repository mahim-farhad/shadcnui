"use client";

import { zodResolver } from "@hookform/resolvers/zod";

import { useForm, FormProvider } from "react-hook-form";

import { formSchema } from "@libs/schema";

import useFormHook from "@hooks/useFormValidation";

import Button from "@components/ui/button";

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormIcon,
  FormDescription,
  FormMessage,
} from "@components/forms/Form";

const Sales = function Sales() {
  // Initialize useForm with the Zod resolver
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const {
    loading,
    submissionError,
    onSubmit
  } = useFormHook(form.data);

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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

              {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}

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

        {submissionError && (
          <p className="text-red-500">{submissionError}</p>
        )}

        <Button
          type="submit"
          disabled={loading}
          className="w-full mt-4"
        >
          {loading ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </FormProvider>
  );
};

export default Sales;

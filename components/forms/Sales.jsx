"use client";

import { zodResolver } from "@hookform/resolvers/zod";

import { useForm, FormProvider } from "react-hook-form";

import { formSchema } from "@libs/schema";

import useFormHook from "@hooks/useFormValidation";

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

const Sales = function Sales() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const {
    loading,
    submissionError,
    onSubmit
  } = useFormHook(form);

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

        <Box className="flex items-center gap-4 pt-4">
          <Button
            type="button"
            variant="toned"
            onClick={() => form.reset({ defaultValues })}
            className="w-full"
          >
            Reset
          </Button>

          <Button
            type="submit"
            disabled={loading}
            className="w-full"
          >
            {loading ? "Submitting..." : "Submit"}
          </Button>
        </Box>
      </form>
    </FormProvider>
  );
};

export default Sales;

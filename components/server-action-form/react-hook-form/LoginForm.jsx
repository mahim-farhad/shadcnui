"use client";

import { useEffect, useTransition } from "react";

import { useFormState } from "react-dom";

import { toast } from "sonner";

import { zodResolver } from "@hookform/resolvers/zod";

import { useForm, FormProvider } from "react-hook-form";

import { loginZodSchema } from "@libs/zodValidations";

import { loginAction } from "@utils/actions/auth";

import { convertToFormData } from "@utils/utils";

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

function LoginForm() {
  const form = useForm({
    mode: "onBlur",
    resolver: zodResolver(loginZodSchema),
    defaultValues,
  });

  const { trigger, handleSubmit, setError } = form;

  const [formState, formAction] = useFormState(
    loginAction,
    INITIAL_STATE
  );

  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    if (formState?.errors) {
      Object.entries(formState.errors).forEach(
        ([key, value]) => {
          setError(key, {
            type: "server",
            message: value
          });
        }
      );
    }

    if (formState?.message) {
      toast.success(formState.message, {
        position: "top-center",
      });
    }
  }, [formState, setError]);

  const onSubmit = async (data) => {
    const formData =
      convertToFormData(data);

    startTransition(() => {
      formAction(formData);
    });
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
              <FormLabel>Email</FormLabel>

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
            disabled={isPending}
          >
            {isPending ? (
              <div role="status">
                <svg aria-hidden="true" class="w-4 h-4 text-white animate-spin dark:text-white fill-primary-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
                <span class="sr-only">Loading...</span>
              </div>
            ) : "Submit"}
          </Button>
        </Box>
      </form>
    </FormProvider>
  );
};

export default LoginForm;

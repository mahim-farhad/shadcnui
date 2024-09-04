"use client";

import { useEffect } from "react";

import { useFormState, useFormStatus } from "react-dom";

// import { useSearchParams } from 'next/navigation';

import { toast } from "sonner";

import { loginUserAction } from "@utils/actions/auth";

import Link from "@components/ui/Link";
import Textfield from "@components/inputs/Textfield";
import Button from "@components/ui/Button";

import Box from "@components/layouts/Box";
import LoadingButton from "@components/ui/LoadingButton";

const INITIAL_STATE = {
  data: null,
  errors: null,
  message: null,
};

function LoginForm() {
  // const searchParams = useSearchParams();
  // const redirectTo = searchParams.get('redirectTo') || '/';

  const [formState, formAction] = useFormState(
    loginUserAction,
    INITIAL_STATE
  );

  const { pending } = useFormStatus();

  useEffect(() => {
    if (formState?.message) {
      toast.error(formState?.message, {
        position: 'top-center',
      });
    }
  }, [formState?.message]);

  return (
    <form
      action={formAction}
      method="post"
      className="space-y-8"
    >
      {/* <input type="hidden" name="redirectTo" value={redirectTo} /> */}

      <Textfield
        type="text"
        name="identifier"
        label="Email or Username"
        placeholder="Enter your mail or username"
        isRequired
        error={formState?.errors?.identifier}
      />

      <Textfield
        type="password"
        name="password"
        label="Password"
        placeholder="Enter your password"
        isRequired
        error={formState?.errors?.password}
      />

      <Box className="flex items-center gap-4 py-4">
        <LoadingButton type="submit" className="w-full" />
      </Box>

      <Link
        href="/auth/register"
        transition
        className="text-center font-medium dark:text-gray-600"
      >
        Already a user? <span className="dark:text-primary">Signup</span>
      </Link>
    </form>
  );
};

export default LoginForm;

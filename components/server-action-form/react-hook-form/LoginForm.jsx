"use client";

import { useEffect, useState } from "react";

import { useFormState, useFormStatus } from "react-dom";

import { toast } from "sonner";

import { loginUserAction }
  from "@utils/actions/auth-actions";

import Button from "@components/ui/Button";

import Box from "@components/layouts/Box";
import Textfield from "@components/inputs/Textfield";
import Link from "@components/ui/Link";

const INITIAL_STATE = {
  data: null,
  errors: null,
  message: null,
};

function LoginForm() {
  const [formState, formAction] = useFormState(
    loginUserAction,
    INITIAL_STATE
  );

  const { pending } = useFormStatus();

  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (formState?.message) {
      setSuccessMessage(formState.message);
    }
  }, [formState]);

  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage, {
        position: 'top-center',
      });

      setSuccessMessage("");
    }
  }, [successMessage]);

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
        <Button
          type="submit"
          disabled={pending}
          className="w-full"
        >
          {pending ? "Submitting..." : "Login"}
        </Button>
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

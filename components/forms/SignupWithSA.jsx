"use client";

import { useEffect } from "react";

import { useFormState, useFormStatus } from "react-dom";

import { toast } from "sonner";

import { registerUserAction } from "@utils/data/actions/auth-actions";

import Textfield from "@components/inputs/Textfield";
import Button from "@components/ui/Button";

import Box from "@components/layouts/Box";

const INITIAL_STATE = {
  zodErrors: null,
  strapiErrors: null,
  data: null,
  message: null,
};

function SignupWithSA() {
  const [formState, formAction] = useFormState(
    registerUserAction,
    INITIAL_STATE
  );

  const { pending } = useFormStatus();

  useEffect(() => {
    toast(formState.message);
  }, [formState]);

  return (
    <form action={formAction} className="space-y-8">

      <Textfield
        type="text"
        name="username"
        label="Username"
        placeholder="Enter your name"
        isRequired
        error={
          formState?.zodErrors?.username ||
          formState?.serverErrors?.username
        }
      />

      <Textfield
        type="email"
        name="email"
        label="Email"
        placeholder="Enter your mail"
        isRequired
        error={
          formState?.zodErrors?.email ||
          formState?.serverErrors?.email
        }
      />

      <Textfield
        type="password"
        name="password"
        label="Password"
        placeholder="Enter your password"
        isRequired
        error={
          formState?.zodErrors?.password ||
          formState?.serverErrors?.password
        }
      />

      <Box className="flex items-center gap-4 pt-4">
        <Button
          type="button"
          variant="toned"
          // onClick={() => form.reset({ defaultValues })}
          className="w-full"
        >
          Reset
        </Button>

        <Button
          type="submit"
          disabled={pending}
          className="w-full"
        >
          {pending ? "Submitting..." : "Submit"}
        </Button>
      </Box>
    </form>
  );
};

export default SignupWithSA;

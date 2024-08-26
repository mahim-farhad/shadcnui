"use client";

import { useFormState } from "react-dom";

import { loginUserAction }
  from "@utils/data/actions/auth-actions";

import Textfield from "@components/inputs/Textfield";
import Button from "@components/ui/Button";

import Box from "@components/layouts/Box";
import Link from "@components/ui/Link";

const INITIAL_STATE = {
  data: null,
};

function SigninWithSA() {
  const [formState, formAction] = useFormState(
    loginUserAction,
    INITIAL_STATE
  );

  console.log(formState);

  return (
    <form action={formAction} className="space-y-8">
      <Textfield
        type="text"
        name="identifier"
        label="Email or Username"
        placeholder="Enter your mail or username"
        isRequired
        error={
          formState?.zodErrors?.identifier ||
          formState?.serverErrors?.identifier
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
          type="submit"
          // disabled={loading}
          className="w-full"
        >
          {/* {loading ? "Submitting..." : "Submit"} */}
          Login
        </Button>
      </Box>

      <Link
        href="/auth/register"
        transition
        className="text-center font-medium dark:text-gray-600"
      >
        Already a user? <span className="dark:text-primary">Signup</span>
      </Link>

      <Link
        href="/dashboard"
        transition
        className="text-center font-medium dark:text-gray-600"
      >
        Go to <span className="dark:text-primary">dashboard</span>
      </Link>
    </form>
  );
};

export default SigninWithSA;

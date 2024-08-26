"use client";

import { useFormState } from "react-dom";

import { loginUserAction }
  from "@utils/data/actions/auth-actions";

import Textfield from "@components/inputs/Textfield";
import Button from "@components/ui/button";

import Box from "@components/layouts/Box";

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
    </form>
  );
};

export default SigninWithSA;

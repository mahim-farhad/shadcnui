import { useState, useCallback } from "react";

import { useRouter } from "next/navigation";

import { authenticateUser } from "@api/auth";

const useFormHook = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState("");

  const onSubmit = async (data) => {
    setLoading(true);
    setMessage("");
    setErrors("");

    try {
      const res = await authenticateUser(data);

      setMessage("Registerred Successfully");

      setTimeout(() => {
        router.push("/");
      }, 1000);
    } catch (error) {
      let errorMessage = "";

      const fieldErrors = {
        identifier: "",
        password: ""
      };

      if (error.response) {
        const { status, data } = error.response;

        if (status === 400 || status === 429) {
          const serverErrorMessage =
            data?.error?.message || errorMessage;

          errorMessage = serverErrorMessage;

          if (errorMessage.includes("identifier", "password")) {
            fieldErrors.identifier = errorMessage;

            fieldErrors.password = errorMessage;
          }
        } else {
          errorMessage = data;
        }
      } else {
        errorMessage =
          error.message || "Something went wrong. Please try again."
      }

      setErrors(fieldErrors);
      setMessage(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    message,
    errors,
    onSubmit
  };
};

export default useFormHook;

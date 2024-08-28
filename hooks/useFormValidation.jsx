import { useState, useCallback } from "react";

import { useRouter } from "next/navigation";

import registerUser from "@api/registerApi";

const useFormHook = (form) => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [submissionError, setSubmissionError] = useState("");

  const onSubmit = async (data) => {
    setLoading(true);
    setSubmissionError("");

    try {
      const res = await registerUser(data);

      setSubmissionError("Registration Completed!");

      setTimeout(() => {
        router.push("/");
      }, 1000);
    } catch (error) {
      const serverErrors = error?.data?.error || {};

      if (serverErrors.message.includes("Email")) {
        form.setError("email", {
          type: "server",
          message: serverErrors.message,
        });
      } else if (serverErrors.message.includes("Username")) {
        form.setError("username", {
          type: "server",
          message: serverErrors.message,
        });
      } else {
        setSubmissionError(serverErrors.message || "Something went wrong!");
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    submissionError,
    onSubmit
  };
};

export default useFormHook;

import { useFormStatus } from "react-dom";

import Button from "@components/ui/Button";

export default function LoadingButton({ ...props }) {
  const { pending } = useFormStatus();

  return (
    <Button
      disabled={pending}
      {...props}
    >
      {pending ? "Submitting..." : "Submit"}
    </Button>
  )
}

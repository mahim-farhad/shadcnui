import { z } from "zod";

export const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters."
  }).max(20, {
    message: "Username cannot exceed 20 characters."
  }),

  email: z.string().min(1, {
    message: "Email must be filled."
  }).email({
    message: "Email must be a valid email address."
  }),

  password: z.string().min(8, {
    message: "Password must be at least 8 characters."
  }).regex(/[a-z]/, {
    message: "Password must contain at least one lowercase letter."
  }).regex(/[A-Z]/, {
    message: "Password must contain at least one uppercase letter."
  }).regex(/\d/, {
    message: "Password must contain at least one number."
  }).regex(/[@$!%*?&]/, {
    message: "Password must contain at least one special character."
  }),
});

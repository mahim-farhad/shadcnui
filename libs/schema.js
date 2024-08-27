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

export const SignupFormSchema = z.object({
  username: z.string().min(2, {
    message: 'Name must be at least 2 characters long.'
  }).trim(),
  email: z.string().email({
    message: 'Please enter a valid email.'
  }).trim(),
  password: z.string().min(8, {
    message: 'Be at least 8 characters long'
  }).regex(/[a-zA-Z]/, {
    message: 'Contain at least one letter.'
  }).regex(/[0-9]/, {
    message: 'Contain at least one number.'
  }).regex(/[^a-zA-Z0-9]/, {
    message: 'Contain at least one special character.',
  }).trim(),
});

export const SigninFormSchema = z.object({
  identifier: z.string().min(3, {
    message: "Identifier must have at least 3 or more characters",
  }).max(200, {
    message: "Please enter a valid username or email address",
  }).trim(),
  password: z.string().min(6, {
    message: "Password must have at least 6 or more characters",
  }).max(100, {
    message: "Password must be between 6 and 100 characters",
  }).trim(),
});

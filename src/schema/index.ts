import { z } from "zod";

// HDR: LOGIN
export const loginSchema = z.object({
  username: z
    .string({ message: "Please enter a username" })
    .min(1, { message: "Please enter a username " }),
  password: z
    .string({ message: "Please enter a password" })
    .min(1, { message: "Please enter a password" }),
});

// HDR: REGISTER
// export const registerSchema = z
//   .object({
//     name: z
//       .string({ message: "This field can not be empty" })
//       .min(1, { message: "Enter your username" }),
//     email: z
//       .string({ message: "This field can not be empty" })
//       .min(1, { message: "Enter your email " })
//       .email("Please enter a valid email address"),
//     password: z
//       .string({ message: "Enter a password" })
//       .min(6, "Password must be at least 6 characters long")
//       .max(30, "Password cannot be longer than 30 characters")
//       .regex(
//         /^(?=.*[a-z]).*$/,
//         "Password must contain at least one lowercase letter"
//       )
//       .regex(
//         /^(?=.*[A-Z]).*$/,
//         "Password must contain at least one uppercase letter"
//       )
//       .regex(/^(?=.*\d).*$/, "Password must contain at least one digit")
//       .refine((value) => !/\s/.test(value), {
//         message: "Password cannot contain whitespace characters",
//         path: [],
//       }),
//     confirmPassword: z
//       .string({ message: "This field can not be empty" })
//       .min(1, { message: "Enter your password" }),
//   })
//   .refine((val) => val.password === val.confirmPassword, {
//     message: "Password do not match",
//     path: ["confirmPassword"],
//   });

export type LoginType = z.infer<typeof loginSchema>;

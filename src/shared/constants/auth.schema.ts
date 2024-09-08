import { z } from "zod";

const passwordSchema = z.string().min(4, 'Password should contain at least 4 symbols');

export const loginSchema = z.object({
  email: z.string().email('Field should contain correct email address'),
  password: passwordSchema
});

export const registrationSchema = loginSchema.merge(z.object({
  fullName: z.string(),
  confirmPassword: passwordSchema
}))
.refine((data) => data.password === data.confirmPassword, {
  message: 'Password do not match',
  path: ['confirmPassword']
})

export type LoginData = z.infer<typeof loginSchema>;
export type RegistrationData = z.infer<typeof registrationSchema>;
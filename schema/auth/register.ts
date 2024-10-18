import { z } from 'zod'

export const registerSchema = z.object({
  first_name: z.string().min(3, 'First name must be at least 3 characters'),
  last_name: z.string().min(3, 'Last name must be at least 3 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
})

export type RegisterSchema = z.infer<typeof registerSchema>

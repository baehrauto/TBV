import { z } from 'zod'

export const contactFormSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  projectType: z.string().optional(),
  location: z.string().optional(),
  timeline: z.string().optional(),
  clearanceLevel: z.string().optional(),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

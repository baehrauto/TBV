import { describe, it, expect } from 'vitest'
import { contactFormSchema } from '../validations'

describe('contactFormSchema', () => {
  it('should validate correct contact form data', () => {
    const validData = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      message: 'This is a test message with enough characters',
      projectType: 'SCIF Construction',
      location: 'Washington, DC',
      timeline: '3-6 months',
      clearanceLevel: 'Top Secret',
    }

    const result = contactFormSchema.safeParse(validData)
    expect(result.success).toBe(true)
  })

  it('should reject invalid email', () => {
    const invalidData = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'invalid-email',
      message: 'This is a test message with enough characters',
    }

    const result = contactFormSchema.safeParse(invalidData)
    expect(result.success).toBe(false)
    if (!result.success) {
      expect(result.error.issues[0].message).toBe('Invalid email address')
    }
  })

  it('should reject short message', () => {
    const invalidData = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      message: 'Short',
    }

    const result = contactFormSchema.safeParse(invalidData)
    expect(result.success).toBe(false)
    if (!result.success) {
      expect(result.error.issues[0].message).toBe('Message must be at least 10 characters')
    }
  })

  it('should reject missing required fields', () => {
    const invalidData = {
      email: 'john.doe@example.com',
      message: 'This is a test message with enough characters',
    }

    const result = contactFormSchema.safeParse(invalidData)
    expect(result.success).toBe(false)
    if (!result.success) {
      expect(result.error.issues).toHaveLength(2) // firstName and lastName missing
    }
  })
})

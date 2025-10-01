import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { contactFormSchema } from '@/lib/validations'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validatedData = contactFormSchema.parse(body)

    // If RESEND_API_KEY is set, send email
    if (process.env.RESEND_API_KEY && process.env.CONTACT_TO) {
      const { data, error } = await resend.emails.send({
        from: 'noreply@tbvsolutions.com',
        to: [process.env.CONTACT_TO],
        subject: `New Contact Form Submission from ${validatedData.firstName} ${validatedData.lastName}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${validatedData.firstName} ${validatedData.lastName}</p>
          <p><strong>Email:</strong> ${validatedData.email}</p>
          ${validatedData.projectType ? `<p><strong>Project Type:</strong> ${validatedData.projectType}</p>` : ''}
          ${validatedData.location ? `<p><strong>Location:</strong> ${validatedData.location}</p>` : ''}
          ${validatedData.timeline ? `<p><strong>Timeline:</strong> ${validatedData.timeline}</p>` : ''}
          ${validatedData.clearanceLevel ? `<p><strong>Clearance Level:</strong> ${validatedData.clearanceLevel}</p>` : ''}
          <p><strong>Message:</strong></p>
          <p>${validatedData.message}</p>
        `,
      })

      if (error) {
        console.error('Resend error:', error)
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
      }

      console.log('Email sent successfully:', data)
    } else {
      // Log for demo purposes when no API key is set
      console.log('Contact form submission (demo mode):', validatedData)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    
    if (error instanceof Error && error.name === 'ZodError') {
      return NextResponse.json({ error: 'Invalid form data' }, { status: 400 })
    }

    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

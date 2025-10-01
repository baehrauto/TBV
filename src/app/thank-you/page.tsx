import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Thank You - Trust But Verify Solutions',
  description: 'Thank you for contacting Trust But Verify Solutions. We will get back to you soon.',
}

export default function ThankYouPage() {
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-24 sm:py-32 lg:py-40">
          <div className="text-center">
            <CheckCircle className="mx-auto h-16 w-16 text-green-600" />
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Thank You!
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Your message has been sent successfully. We'll review your inquiry and get back to you 
              within 24 hours. We appreciate your interest in Trust But Verify Solutions.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/"
                className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 transition-colors"
              >
                Back to Home
              </Link>
              <Link
                href="/projects"
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-red-600 transition-colors flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                View Our Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

'use client'

import { useEffect } from 'react'
import { AlertTriangle, RotateCcw } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-24 sm:py-32 lg:py-40">
          <div className="text-center">
            <AlertTriangle className="mx-auto h-16 w-16 text-red-600" />
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Something went wrong
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We're sorry, but something unexpected happened. Please try again or contact us if the problem persists.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button
                onClick={reset}
                className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 transition-colors flex items-center gap-2"
              >
                <RotateCcw className="h-4 w-4" />
                Try Again
              </button>
              <a
                href="/contact"
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-red-600 transition-colors"
              >
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

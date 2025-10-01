import Link from 'next/link'
import { Download } from 'lucide-react'

interface PDFLinkProps {
  href: string
  children: React.ReactNode
  className?: string
}

export default function PDFLink({ href, children, className = '' }: PDFLinkProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 transition-colors ${className}`}
    >
        <Download className="h-4 w-4" />
      {children}
    </Link>
  )
}

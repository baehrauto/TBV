import type { Metadata } from 'next'
import ProjectsClient from '@/components/ProjectsClient'
import { Shield, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Projects - Trust But Verify Solutions',
  description: 'Explore our portfolio of secure facility construction projects, SCIF installations, and federal compliance consulting work.',
}

export default function ProjectsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section - Matching Home Page Style */}
      <div className="relative py-6 bg-white">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Professional grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(220,38,38,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(220,38,38,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

          {/* Corporate-style geometric shapes */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-red-50 via-red-25 to-transparent transform -translate-y-48 translate-x-48"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-50 via-blue-25 to-transparent transform translate-y-40 -translate-x-40"></div>

          {/* Professional accent lines */}
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-200 to-transparent"></div>
          <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>

          {/* Corporate corner elements */}
          <div className="absolute top-8 right-8 w-3 h-3 bg-red-200 transform rotate-45"></div>
          <div className="absolute bottom-8 left-8 w-3 h-3 bg-blue-200 transform rotate-45"></div>
        </div>

        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
            <div className="text-center">
              <h1 className="text-5xl lg:text-7xl font-heading font-black text-gray-900 leading-tight mb-8">
                <span className="block">Our</span>
                <span className="block text-red-600">Projects</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto font-semibold">
                Explore our portfolio of secure facility construction projects, SCIF installations, 
                and federal compliance consulting work.
              </p>
            </div>
          </div>
        </div>
      </div>

      <ProjectsClient />
    </div>
  )
}

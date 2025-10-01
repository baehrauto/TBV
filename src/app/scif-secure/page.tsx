import type { Metadata } from 'next'
import Link from 'next/link'
import { Shield, CheckCircle, Award, Users, Building2, Lock, Star, ArrowRight } from 'lucide-react'
import PDFLink from '@/components/PDFLink'

export const metadata: Metadata = {
  title: 'SCIF/Secure Facilities - Trust But Verify Solutions',
  description: 'Specialized SCIF construction and secure facility design services with ICD 705 compliance and TEMPEST shielding.',
}

const credibilityStats = [
  { label: 'SCIFs Constructed', value: '50+', icon: Building2 },
  { label: 'Security Clearances', value: '100+', icon: Users },
  { label: 'Compliance Rate', value: '100%', icon: CheckCircle },
  { label: 'Client Satisfaction', value: '98%', icon: Award },
]

const capabilities = [
  {
    title: 'ICD 705 Compliance',
    description: 'Full compliance with Intelligence Community Directive 705 standards for SCIF construction.',
    icon: Shield,
  },
  {
    title: 'TEMPEST Shielding',
    description: 'Advanced electromagnetic shielding to prevent signal leakage and ensure secure communications.',
    icon: Lock,
  },
  {
    title: 'Acoustic Security',
    description: 'Soundproof construction techniques to prevent audio surveillance and maintain operational security.',
    icon: Building2,
  },
  {
    title: 'Access Control',
    description: 'Multi-level security systems with biometric verification and audit trails.',
    icon: Users,
  },
]

export default function SCIFSecurePage() {
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
                <span className="block">SCIF &</span>
                <span className="block text-red-600">Secure Facilities</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto font-semibold">
                Specialized construction and design services for Sensitive Compartmented Information Facilities 
                and other secure government spaces.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Credibility Stats - Enhanced Design */}
      <div className="py-32 bg-gradient-to-br from-red-600 via-red-700 to-red-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-8 py-4 bg-white/20 text-white text-sm font-bold rounded-full mb-8 shadow-xl backdrop-blur-sm">
              <Star className="mr-3 h-5 w-5" />
              Proven Track Record
            </div>
            <h2 className="text-5xl font-heading font-black text-white mb-6">
              Trusted by Government Agencies
            </h2>
            <p className="text-xl text-red-100 max-w-4xl mx-auto leading-relaxed font-semibold">
              Our expertise in secure facility construction is backed by years of successful project delivery.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {credibilityStats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div key={stat.label} className="group text-center">
                  <div className="mx-auto h-20 w-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-xl">
                    <IconComponent className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="mt-6 text-3xl font-heading font-black text-white group-hover:text-red-200 transition-colors duration-300">{stat.value}</h3>
                  <p className="mt-2 text-lg text-red-100 font-semibold">{stat.label}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Capabilities Section - Enhanced Design */}
      <div className="py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-red-100/30 to-red-200/20 rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-100/30 to-blue-200/20 rounded-full translate-y-40 -translate-x-40"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white text-sm font-bold rounded-full mb-8 shadow-xl">
              <Shield className="mr-3 h-5 w-5" />
              Specialized Capabilities
            </div>
            <h2 className="text-5xl font-heading font-black text-gray-900 mb-6">
              SCIF Construction Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-semibold">
              We provide comprehensive SCIF construction services with the highest security standards.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((capability, index) => {
              const IconComponent = capability.icon
              const colorVariants = [
                { bg: 'from-red-500 to-red-600', light: 'from-red-50 to-red-100', border: 'border-red-200', text: 'text-red-600' },
                { bg: 'from-blue-500 to-blue-600', light: 'from-blue-50 to-blue-100', border: 'border-blue-200', text: 'text-blue-600' },
                { bg: 'from-gray-600 to-gray-700', light: 'from-gray-50 to-gray-100', border: 'border-gray-200', text: 'text-gray-600' },
                { bg: 'from-red-500 to-red-600', light: 'from-red-50 to-red-100', border: 'border-red-200', text: 'text-red-600' }
              ]
              const colors = colorVariants[index % 4]
              
              return (
                <div 
                  key={capability.title} 
                  className="group relative"
                >
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${colors.light} rounded-3xl transition-all duration-500 group-hover:scale-105 opacity-50 group-hover:opacity-80`}></div>
                  
                  <div className={`relative bg-white/90 backdrop-blur-sm border-2 ${colors.border} rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group-hover:bg-white/95`}>
                    <div className="flex flex-col items-center text-center space-y-6">
                      {/* Icon with enhanced styling */}
                      <div className={`w-20 h-20 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-all duration-300 bg-gradient-to-br ${colors.bg}`}>
                        <IconComponent className="h-10 w-10 text-white group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      
                      <div className="space-y-4">
                        <h3 className={`text-2xl font-heading font-black text-gray-900 group-hover:${colors.text} transition-colors duration-300`}>
                          {capability.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-base font-medium">
                          {capability.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Process Section - Enhanced Design */}
      <div className="py-32 bg-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-red-100/30 rounded-full -translate-y-36 -translate-x-36"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-800/15 rounded-full translate-y-48 translate-x-48"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-red-100 text-red-800 text-sm font-semibold rounded-full mb-8 shadow-sm border border-red-200">
              <Shield className="mr-2 h-4 w-4" />
              Our Process
            </div>
            <h2 className="text-5xl font-heading font-black text-gray-900 mb-6">
              SCIF Construction Process
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-semibold">
              A proven methodology for delivering secure facilities that meet the highest government standards.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="group text-center">
              <div className="mx-auto h-20 w-20 rounded-2xl bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-xl">
                <span className="text-3xl font-bold text-white">1</span>
              </div>
              <h3 className="mt-6 text-2xl font-heading font-black text-gray-900 group-hover:text-red-600 transition-colors duration-300">Security Assessment</h3>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Comprehensive evaluation of security requirements and threat assessment.
              </p>
            </div>
            
            <div className="group text-center">
              <div className="mx-auto h-20 w-20 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-xl">
                <span className="text-3xl font-bold text-white">2</span>
              </div>
              <h3 className="mt-6 text-2xl font-heading font-black text-gray-900 group-hover:text-blue-600 transition-colors duration-300">Design & Planning</h3>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Custom design solutions that meet ICD 705 and other security standards.
              </p>
            </div>
            
            <div className="group text-center">
              <div className="mx-auto h-20 w-20 rounded-2xl bg-gradient-to-br from-gray-600 to-gray-700 flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-xl">
                <span className="text-3xl font-bold text-white">3</span>
              </div>
              <h3 className="mt-6 text-2xl font-heading font-black text-gray-900 group-hover:text-gray-600 transition-colors duration-300">Secure Construction</h3>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Meticulous construction with continuous security oversight and quality control.
              </p>
            </div>
            
            <div className="group text-center">
              <div className="mx-auto h-20 w-20 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-xl">
                <span className="text-3xl font-bold text-white">4</span>
              </div>
              <h3 className="mt-6 text-2xl font-heading font-black text-gray-900 group-hover:text-red-600 transition-colors duration-300">Testing & Certification</h3>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Comprehensive testing and government certification for operational readiness.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Resources Section - Enhanced Design */}
      <div className="py-32 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.15),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-5xl font-heading font-black text-white mb-8 leading-tight">
              Resources & Documentation
            </h2>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed font-semibold max-w-4xl mx-auto">
              Download our comprehensive SCIF capabilities overview and compliance documentation.
            </p>
            <div className="flex justify-center">
              <PDFLink href="/pdfs/tbv-scif-list.pdf">
                <div className="group inline-flex items-center px-12 py-5 bg-red-600 text-white font-bold text-lg rounded-xl hover:bg-red-700 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105">
                  Download SCIF Capabilities Overview
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </PDFLink>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section - Enhanced Design */}
      <div className="py-32 bg-gradient-to-br from-red-600 via-red-700 to-red-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-5xl font-heading font-black text-white mb-8 leading-tight">
              Ready to Secure Your Mission?
            </h2>
            <p className="text-xl text-red-100 mb-10 leading-relaxed font-semibold max-w-4xl mx-auto">
              Contact us today to discuss your SCIF construction needs and learn how we can help 
              protect your sensitive operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center px-12 py-5 bg-white text-red-600 font-bold text-lg rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105"
              >
                Contact Us
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                href="/projects"
                className="group inline-flex items-center justify-center px-12 py-5 border-2 border-white text-white font-bold text-lg rounded-xl hover:bg-white hover:text-red-600 transition-all duration-300"
              >
                View Our Work
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

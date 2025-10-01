import type { Metadata } from 'next'
import Link from 'next/link'
import { Shield, FileCheck, Building2, Lock, Wrench, Users, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Services - Trust But Verify Solutions',
  description: 'Comprehensive security solutions including SCIF construction, compliance consulting, federal interiors, and security systems.',
}

const services = [
  {
    title: 'SCIF & Secure Space Construction',
    description: 'Design and construction of Sensitive Compartmented Information Facilities with full ICD 705 compliance and TEMPEST shielding.',
    features: [
      'ICD 705 compliant construction',
      'TEMPEST shielding installation',
      'Acoustic security measures',
      'Advanced access control systems',
      'Secure communications infrastructure',
    ],
    icon: Shield,
  },
  {
    title: 'Compliance Consulting',
    description: 'Expert guidance on federal security requirements, clearance processes, and regulatory compliance for government contractors.',
    features: [
      'Security clearance coordination',
      'Policy development and implementation',
      'Audit preparation and support',
      'Training and education programs',
      'Documentation and reporting',
    ],
    icon: FileCheck,
  },
  {
    title: 'Federal Interior Design',
    description: 'Specialized interior design and construction services for federal buildings, maintaining security and accessibility standards.',
    features: [
      'Secure office layouts',
      'ADA compliance design',
      'Technology integration',
      'Sustainable design solutions',
      'Security system integration',
    ],
    icon: Building2,
  },
  {
    title: 'Security Systems Installation',
    description: 'Advanced access control, surveillance, and security infrastructure installation for government facilities.',
    features: [
      'Access control systems',
      'Video surveillance networks',
      'Intrusion detection systems',
      'Secure communications',
      'Emergency response systems',
    ],
    icon: Lock,
  },
  {
    title: 'Project Management',
    description: 'End-to-end project management for complex federal construction projects with security clearance requirements.',
    features: [
      'Project planning and scheduling',
      'Resource management',
      'Quality control oversight',
      'Security compliance monitoring',
      'Stakeholder coordination',
    ],
    icon: Wrench,
  },
  {
    title: 'Team Building & Personnel',
    description: 'Assembling and managing cleared personnel for sensitive government projects and ongoing operations.',
    features: [
      'Personnel security coordination',
      'Cleared workforce management',
      'Training and certification',
      'Background investigation support',
      'Ongoing security monitoring',
    ],
    icon: Users,
  },
]

export default function ServicesPage() {
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
                  <span className="block text-red-600">Services</span>
                </h1>

                <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto font-semibold">
                  Comprehensive security solutions for federal agencies and contractors. 
                  From SCIF construction to compliance consulting, we deliver mission-critical results.
                </p>
              </div>
            </div>
          </div>
        </div>

      {/* Services Grid - Enhanced Design */}
      <div className="py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-red-100/30 to-red-200/20 rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-100/30 to-blue-200/20 rounded-full translate-y-40 -translate-x-40"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white text-sm font-bold rounded-full mb-8 shadow-xl">
              <Shield className="mr-3 h-5 w-5" />
              Our Expertise
            </div>
            <h2 className="text-5xl font-heading font-black text-gray-900 mb-6">
              Comprehensive Security Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-semibold">
              We provide end-to-end security solutions for federal contractors and government agencies, 
              from initial design through final certification.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              const colorVariants = [
                { bg: 'from-red-500 to-red-600', light: 'from-red-50 to-red-100', border: 'border-red-200', text: 'text-red-600' },
                { bg: 'from-blue-500 to-blue-600', light: 'from-blue-50 to-blue-100', border: 'border-blue-200', text: 'text-blue-600' },
                { bg: 'from-gray-600 to-gray-700', light: 'from-gray-50 to-gray-100', border: 'border-gray-200', text: 'text-gray-600' }
              ]
              const colors = colorVariants[index % 3]
              
              return (
                <div 
                  key={service.title} 
                  className="group relative"
                >
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${colors.light} rounded-3xl transition-all duration-500 group-hover:scale-105 opacity-50 group-hover:opacity-80`}></div>
                  
                  <div className={`relative bg-white/90 backdrop-blur-sm border-2 ${colors.border} rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group-hover:bg-white/95`}>
                    <div className="flex flex-col space-y-6">
                      {/* Icon with enhanced styling */}
                      <div className={`w-20 h-20 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-all duration-300 bg-gradient-to-br ${colors.bg}`}>
                        <IconComponent className="h-10 w-10 text-white group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      
                      <div className="space-y-4">
                        <h3 className={`text-2xl font-heading font-black text-gray-900 group-hover:${colors.text} transition-colors duration-300`}>
                          {service.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-base font-medium">
                          {service.description}
                        </p>
                      </div>
                      
                      <ul className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-3">
                            <div className={`h-2 w-2 rounded-full ${colors.bg.replace('from-', 'bg-').replace(' to-', '')} mt-2 flex-shrink-0`} />
                            <span className="text-sm text-gray-600 font-medium">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Link
                        href="/contact"
                        className={`group/link inline-flex items-center px-6 py-3 bg-gradient-to-r ${colors.bg} text-white font-bold text-sm rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105`}
                      >
                        Learn more
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                      </Link>
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
              Proven Methodology
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-semibold">
              A proven methodology for delivering secure facility solutions with uncompromising quality.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="group text-center">
              <div className="mx-auto h-20 w-20 rounded-2xl bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-xl">
                <span className="text-3xl font-bold text-white">1</span>
              </div>
              <h3 className="mt-6 text-2xl font-heading font-black text-gray-900 group-hover:text-red-600 transition-colors duration-300">Assessment</h3>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Comprehensive evaluation of security requirements and facility needs.
              </p>
            </div>
            
            <div className="group text-center">
              <div className="mx-auto h-20 w-20 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-xl">
                <span className="text-3xl font-bold text-white">2</span>
              </div>
              <h3 className="mt-6 text-2xl font-heading font-black text-gray-900 group-hover:text-blue-600 transition-colors duration-300">Design</h3>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Custom design solutions that meet all security and compliance requirements.
              </p>
            </div>
            
            <div className="group text-center">
              <div className="mx-auto h-20 w-20 rounded-2xl bg-gradient-to-br from-gray-600 to-gray-700 flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-xl">
                <span className="text-3xl font-bold text-white">3</span>
              </div>
              <h3 className="mt-6 text-2xl font-heading font-black text-gray-900 group-hover:text-gray-600 transition-colors duration-300">Construction</h3>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Meticulous construction with continuous security oversight and quality control.
              </p>
            </div>
            
            <div className="group text-center">
              <div className="mx-auto h-20 w-20 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-xl">
                <span className="text-3xl font-bold text-white">4</span>
              </div>
              <h3 className="mt-6 text-2xl font-heading font-black text-gray-900 group-hover:text-red-600 transition-colors duration-300">Certification</h3>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Final testing, certification, and ongoing support for mission success.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section - Enhanced Design */}
      <div className="py-32 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.15),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-5xl font-heading font-black text-white mb-8 leading-tight">
              Ready to Secure Your Mission?
            </h2>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed font-semibold max-w-4xl mx-auto">
              Contact us today to discuss your secure facility needs and learn how we can help 
              protect your critical operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center px-12 py-5 bg-red-600 text-white font-bold text-lg rounded-xl hover:bg-red-700 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                href="/projects"
                className="group inline-flex items-center justify-center px-12 py-5 border-2 border-white text-white font-bold text-lg rounded-xl hover:bg-white hover:text-gray-900 transition-all duration-300"
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

import { allProjects } from '@/data/projects'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Shield, Building2, FileCheck, Users, Lock, Wrench, CheckCircle, Star } from 'lucide-react'

const featuredProjects = allProjects.filter(project => project.featured).slice(0, 3)

const capabilities = [
  {
    title: 'SCIF & Secure Spaces',
    description: 'Design and construction of Sensitive Compartmented Information Facilities with ICD 705 compliance.',
    icon: Shield,
    href: '/scif-secure',
  },
  {
    title: 'Compliance Consulting',
    description: 'Expert guidance on federal security requirements, clearances, and regulatory compliance.',
    icon: FileCheck,
    href: '/services',
  },
  {
    title: 'Federal Interiors',
    description: 'Specialized interior design and construction for federal buildings and secure facilities.',
    icon: Building2,
    href: '/services',
  },
  {
    title: 'Security Systems',
    description: 'Advanced access control, surveillance, and security infrastructure installation.',
    icon: Lock,
    href: '/services',
  },
  {
    title: 'Project Management',
    description: 'End-to-end project management for complex federal construction projects.',
    icon: Wrench,
    href: '/services',
  },
  {
    title: 'Team Building',
    description: 'Assembling and managing cleared personnel for sensitive government projects.',
    icon: Users,
    href: '/services',
  },
]

export default function HomePage() {
  return (
    <div className="bg-white">
        {/* Hero Section - Clean White Professional Layout */}
        <div className="relative min-h-screen bg-white">
          {/* Subtle Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Clean grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(220,38,38,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(220,38,38,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

            {/* Subtle geometric shapes */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-red-50 via-red-25 to-transparent transform -translate-y-48 translate-x-48"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-50 via-blue-25 to-transparent transform translate-y-40 -translate-x-40"></div>

            {/* Subtle accent lines */}
            <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-200 to-transparent"></div>
            <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>

            {/* Clean corner elements */}
            <div className="absolute top-8 right-8 w-3 h-3 bg-red-200 transform rotate-45"></div>
            <div className="absolute bottom-8 left-8 w-3 h-3 bg-blue-200 transform rotate-45"></div>
            <div className="absolute top-1/2 right-16 w-2 h-2 bg-red-100 transform rotate-45"></div>
            <div className="absolute bottom-1/2 left-16 w-2 h-2 bg-blue-100 transform rotate-45"></div>

            {/* Subtle diagonal accent */}
            <div className="absolute top-1/3 right-0 w-1/2 h-px bg-gradient-to-l from-red-100 to-transparent transform -skew-y-12"></div>
            <div className="absolute bottom-1/3 left-0 w-1/2 h-px bg-gradient-to-r from-blue-100 to-transparent transform skew-y-12"></div>
          </div>
        
        <div className="relative z-10 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              {/* Left Column - Clean Content */}
              <div className="space-y-8">
                <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-800 text-sm font-medium rounded-lg border border-red-200">
                  <Star className="mr-2 h-4 w-4" />
                  Veteran-owned and trusted by government agencies
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-heading font-black text-gray-900 leading-tight">
                  <span className="block">Trust But</span>
                  <span className="block text-red-600">Verify</span>
                  <span className="block text-gray-700">Solutions</span>
                </h1>
                
                <p className="text-lg text-gray-600 leading-relaxed max-w-lg font-semibold">
                  Specializing in SCIF construction, secure facility design, and federal compliance consulting. 
                  Delivering mission-critical infrastructure with uncompromising security standards.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white font-bold text-base rounded-lg hover:bg-red-700 transition-colors duration-200 shadow-xl hover:shadow-2xl hover:scale-105"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/projects"
                    className="group inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-bold text-base rounded-lg hover:border-red-500 hover:text-red-600 hover:bg-red-50 transition-colors duration-200"
                  >
                    View Our Work
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
              
              {/* Right Column - Professional Visual Elements */}
              <div className="relative">
                {/* Logo-inspired background accent */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-blue-600/10 rounded-3xl transform rotate-1"></div>
                
                <div className="relative grid grid-cols-2 gap-8 p-8">
                  <div className="space-y-8">
                    <div className="group h-32 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center shadow-2xl hover:shadow-red-500/25 transition-all duration-300 hover:scale-105 border border-red-500/20">
                      <Shield className="h-12 w-12 text-white group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="group h-24 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center shadow-2xl hover:shadow-slate-500/25 transition-all duration-300 hover:scale-105 border border-slate-600/20">
                      <Building2 className="h-8 w-8 text-white group-hover:scale-110 transition-transform" />
                    </div>
                  </div>
                  <div className="space-y-8 mt-8">
                    <div className="group h-24 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center shadow-2xl hover:shadow-slate-500/25 transition-all duration-300 hover:scale-105 border border-slate-600/20">
                      <Lock className="h-8 w-8 text-white group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="group h-32 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-2xl hover:shadow-red-500/25 transition-all duration-300 hover:scale-105 border border-red-400/20">
                      <Users className="h-12 w-12 text-white group-hover:scale-110 transition-transform" />
                    </div>
                  </div>
                </div>
                
                {/* Professional accent elements */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500/60 rounded-full"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-blue-500/60 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section - Enhanced Architectural Grid */}
      <div className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 py-32 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.1),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-black text-white mb-4">Trusted by Government Agencies</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-semibold">Our track record speaks for itself with successful project delivery and client satisfaction.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-white p-10 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
              <div className="text-5xl font-bold text-red-600 mb-3 group-hover:scale-110 transition-transform duration-300">150+</div>
              <div className="text-xl font-bold text-gray-900 mb-2">Projects Delivered</div>
              <div className="text-gray-600 font-medium">On time and on budget</div>
              <div className="mt-4 w-12 h-1 bg-red-600 rounded-full"></div>
            </div>
            <div className="group bg-gradient-to-br from-red-600 via-red-700 to-red-800 p-10 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
              <div className="relative z-10">
                <div className="text-5xl font-bold text-white mb-3 group-hover:scale-110 transition-transform duration-300">2.5M+</div>
                <div className="text-xl font-bold text-white mb-2">Square Feet</div>
                <div className="text-red-100 font-medium">Secure facilities built</div>
                <div className="mt-4 w-12 h-1 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="group bg-white p-10 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
              <div className="text-5xl font-bold text-red-600 mb-3 group-hover:scale-110 transition-transform duration-300">$500M+</div>
              <div className="text-xl font-bold text-gray-900 mb-2">Project Value</div>
              <div className="text-gray-600 font-medium">Total contract value</div>
              <div className="mt-4 w-12 h-1 bg-red-600 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Capabilities Section - Professional Design */}
      <div className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-5xl font-heading font-black text-gray-900 mb-6">
              Comprehensive Security Solutions
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
              We offer a full spectrum of services to meet the stringent demands of government and defense contractors.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability) => (
              <div key={capability.title} className="group bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-red-300 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl flex items-center justify-center group-hover:from-red-200 group-hover:to-red-300 transition-all duration-300 shadow-lg">
                      <capability.icon className="h-8 w-8 text-red-600 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-heading font-black text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-300">
                      {capability.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6 text-base">
                      {capability.description}
                    </p>
                    <Link href="/services" className="group/link inline-flex items-center text-sm font-semibold text-red-600 hover:text-red-700 transition-all duration-300">
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Projects Section - Enhanced Card Stack Layout */}
      <div className="py-32 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-red-100/30 rounded-full -translate-y-36 -translate-x-36"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-800/15 rounded-full translate-y-48 translate-x-48"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-red-100 text-red-800 text-sm font-semibold rounded-full mb-8 shadow-sm border border-red-200">
              <Star className="mr-2 h-4 w-4" />
              Featured Projects
            </div>
            <h2 className="text-5xl font-heading font-black text-gray-900 mb-6">
              Recent Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-semibold">
              Explore some of our most recent and notable secure facility construction projects.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div key={project.slug} className="group bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 hover:-translate-y-3">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    width={400}
                    height={250}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center px-3 py-1 bg-red-100 text-red-800 text-sm font-semibold rounded-full shadow-sm">
                      {project.category}
                    </span>
                    <span className="text-sm text-gray-500 font-medium">{project.duration}</span>
                  </div>
                  <h3 className="text-2xl font-heading font-black text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-300">{project.title}</h3>
                  <p className="text-gray-600 mb-3 font-medium">{project.location}</p>
                  <p className="text-gray-600 leading-relaxed mb-6 text-sm">{project.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="group/link inline-flex items-center text-sm font-semibold text-red-600 hover:text-red-700 transition-all duration-300"
                    >
                      View Project
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                    </Link>
                    <div className="text-sm text-gray-500 font-medium">
                      {project.squareFootage > 0 && `${project.squareFootage.toLocaleString()} sq ft`}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link
              href="/projects"
              className="group inline-flex items-center px-12 py-5 bg-red-600 text-white font-bold text-lg rounded-xl hover:bg-red-700 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105"
            >
              View All Projects
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section - Enhanced Timeline Layout */}
      <div className="py-32 bg-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-red-100/20 rounded-full -translate-y-40 translate-x-40"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-800/10 rounded-full translate-y-48 -translate-x-48"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-red-100 text-red-800 text-sm font-semibold rounded-full mb-8 shadow-sm border border-red-200">
              <CheckCircle className="mr-2 h-4 w-4" />
              Why Choose Us
            </div>
            <h2 className="text-5xl font-heading font-black text-gray-900 mb-6">
              Trusted by Government Agencies
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-semibold">
              Our track record speaks for itself with successful project delivery and client satisfaction.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-xl">
                <CheckCircle className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-heading font-black text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-300">100% Compliance</h3>
              <p className="text-gray-600 leading-relaxed">Every project meets or exceeds federal security standards</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-xl">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-heading font-black text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-300">Security First</h3>
              <p className="text-gray-600 leading-relaxed">Uncompromising security measures in every project</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-xl">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-heading font-black text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-300">Expert Team</h3>
              <p className="text-gray-600 leading-relaxed">Cleared professionals with decades of experience</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-xl">
                <Star className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-heading font-black text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-300">Proven Track Record</h3>
              <p className="text-gray-600 leading-relaxed">150+ successful projects delivered on time and budget</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section - Enhanced Split Layout */}
      <div className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 py-32 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.15),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-heading font-black text-white mb-8 leading-tight">
                Ready to Secure Your Next Project?
              </h2>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed font-semibold">
                Contact us today to discuss your secure facility construction or compliance consulting needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center px-12 py-5 bg-red-600 text-white font-bold text-lg rounded-xl hover:bg-red-700 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105"
                >
                  Get a Quote
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link
                  href="/scif-secure"
                  className="group inline-flex items-center justify-center px-12 py-5 border-2 border-white text-white font-bold text-lg rounded-xl hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  Learn About SCIFs
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="group h-32 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
                  <Shield className="h-12 w-12 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="group h-24 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
                  <Lock className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              <div className="space-y-6 mt-12">
                <div className="group h-24 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
                  <Building2 className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="group h-32 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
                  <Users className="h-12 w-12 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
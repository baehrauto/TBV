import type { Metadata } from 'next'
import Image from 'next/image'
import { Shield, Star, Users, CheckCircle, Award, Target, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us - Trust But Verify Solutions',
  description: 'Learn about Trust But Verify Solutions, a veteran-owned company specializing in secure facility construction and federal compliance consulting.',
}

export default function AboutPage() {
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
                <span className="block">About</span>
                <span className="block text-red-600">Trust But Verify</span>
                <span className="block text-gray-700">Solutions</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto font-semibold">
                Veteran-owned and operated, we deliver mission-critical security solutions 
                with uncompromising standards and attention to detail.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section - Enhanced Design */}
      <div className="py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-red-100/30 to-red-200/20 rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-100/30 to-blue-200/20 rounded-full translate-y-40 -translate-x-40"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white text-sm font-bold rounded-full mb-8 shadow-xl">
              <Shield className="mr-3 h-5 w-5" />
              Our Mission
            </div>
            <h2 className="text-5xl font-heading font-black text-gray-900 mb-6">
              Securing America's Critical Infrastructure
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-semibold">
              Trust But Verify Solutions is dedicated to providing world-class secure facility 
              construction and consulting services to federal agencies and contractors.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="group bg-white/90 backdrop-blur-sm border-2 border-red-200 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl flex items-center justify-center group-hover:from-red-200 group-hover:to-red-300 transition-all duration-300 shadow-lg">
                      <Shield className="h-8 w-8 text-red-600 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-2xl font-heading font-black text-gray-900 mb-4 group-hover:text-red-600 transition-colors duration-300">
                      Security Excellence
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-base">
                      Our mission is to protect our nation's most sensitive information and operations 
                      through innovative design, meticulous construction, and unwavering commitment 
                      to security excellence.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="group bg-white/90 backdrop-blur-sm border-2 border-blue-200 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300 shadow-lg">
                      <Users className="h-8 w-8 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-2xl font-heading font-black text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                      Veteran-Owned Identity
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-base">
                      Founded by military veterans with extensive experience in security operations 
                      and federal contracting, we understand the unique challenges and requirements 
                      of government security programs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-100/50 to-blue-100/50 rounded-3xl transform rotate-1"></div>
              <div className="relative">
                <Image
                  src="/about/leadership.jpg"
                  alt="Leadership team"
                  width={600}
                  height={400}
                  className="w-full rounded-3xl shadow-2xl"
                />
                <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-gray-900/10" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Leadership Section - Enhanced Design */}
      <div className="py-32 bg-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-red-100/30 rounded-full -translate-y-36 -translate-x-36"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-800/15 rounded-full translate-y-48 translate-x-48"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-red-100 text-red-800 text-sm font-semibold rounded-full mb-8 shadow-sm border border-red-200">
              <Users className="mr-2 h-4 w-4" />
              Leadership Team
            </div>
            <h2 className="text-5xl font-heading font-black text-gray-900 mb-6">
              Experienced Leadership
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-semibold">
              Experienced professionals with deep expertise in security operations and federal contracting.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="group bg-white border-2 border-gray-200 rounded-3xl p-8 hover:border-red-300 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="text-center">
                <div className="mx-auto h-24 w-24 rounded-2xl bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center group-hover:from-red-200 group-hover:to-red-300 transition-all duration-300 shadow-lg">
                  <span className="text-2xl font-bold text-red-600">JD</span>
                </div>
                <h3 className="mt-6 text-2xl font-heading font-black text-gray-900 group-hover:text-red-600 transition-colors duration-300">John Doe</h3>
                <p className="mt-2 text-lg font-semibold text-gray-600">Chief Executive Officer</p>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Retired Colonel with 25 years of military service and extensive experience in 
                  security operations and federal contracting.
                </p>
              </div>
            </div>
            
            <div className="group bg-white border-2 border-gray-200 rounded-3xl p-8 hover:border-blue-300 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="text-center">
                <div className="mx-auto h-24 w-24 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300 shadow-lg">
                  <span className="text-2xl font-bold text-blue-600">JS</span>
                </div>
                <h3 className="mt-6 text-2xl font-heading font-black text-gray-900 group-hover:text-blue-600 transition-colors duration-300">Jane Smith</h3>
                <p className="mt-2 text-lg font-semibold text-gray-600">Chief Operating Officer</p>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Former federal security officer with 20 years of experience in SCIF construction 
                  and compliance consulting.
                </p>
              </div>
            </div>
            
            <div className="group bg-white border-2 border-gray-200 rounded-3xl p-8 hover:border-gray-400 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="text-center">
                <div className="mx-auto h-24 w-24 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center group-hover:from-gray-200 group-hover:to-gray-300 transition-all duration-300 shadow-lg">
                  <span className="text-2xl font-bold text-gray-600">MB</span>
                </div>
                <h3 className="mt-6 text-2xl font-heading font-black text-gray-900 group-hover:text-gray-600 transition-colors duration-300">Mike Brown</h3>
                <p className="mt-2 text-lg font-semibold text-gray-600">Director of Security</p>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Security expert with 15 years of experience in physical security systems and 
                  access control implementation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section - Enhanced Design */}
      <div className="py-32 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.15),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white text-sm font-bold rounded-full mb-8 shadow-xl">
              <Heart className="mr-3 h-5 w-5" />
              Our Values
            </div>
            <h2 className="text-5xl font-heading font-black text-white mb-6">
              The Principles That Guide Us
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-semibold">
              The principles that guide everything we do in service to our nation's security.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="group text-center">
              <div className="mx-auto h-20 w-20 rounded-2xl bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-xl">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h3 className="mt-6 text-2xl font-heading font-black text-white group-hover:text-red-400 transition-colors duration-300">Security First</h3>
              <p className="mt-4 text-gray-300 leading-relaxed">
                Security is at the heart of everything we do, from design to construction to ongoing support.
              </p>
            </div>
            
            <div className="group text-center">
              <div className="mx-auto h-20 w-20 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-xl">
                <Target className="h-10 w-10 text-white" />
              </div>
              <h3 className="mt-6 text-2xl font-heading font-black text-white group-hover:text-blue-400 transition-colors duration-300">Mission Focus</h3>
              <p className="mt-4 text-gray-300 leading-relaxed">
                We understand that our work directly impacts national security and mission success.
              </p>
            </div>
            
            <div className="group text-center">
              <div className="mx-auto h-20 w-20 rounded-2xl bg-gradient-to-br from-gray-600 to-gray-700 flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-xl">
                <Star className="h-10 w-10 text-white" />
              </div>
              <h3 className="mt-6 text-2xl font-heading font-black text-white group-hover:text-gray-400 transition-colors duration-300">Excellence</h3>
              <p className="mt-4 text-gray-300 leading-relaxed">
                We strive for excellence in every project, exceeding expectations and delivering superior results.
              </p>
            </div>
            
            <div className="group text-center">
              <div className="mx-auto h-20 w-20 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-xl">
                <CheckCircle className="h-10 w-10 text-white" />
              </div>
              <h3 className="mt-6 text-2xl font-heading font-black text-white group-hover:text-red-400 transition-colors duration-300">Integrity</h3>
              <p className="mt-4 text-gray-300 leading-relaxed">
                We conduct business with the highest ethical standards and complete transparency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

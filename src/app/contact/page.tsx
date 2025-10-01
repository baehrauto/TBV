import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import { MapPin, Phone, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us - Trust But Verify Solutions',
  description: 'Get in touch with Trust But Verify Solutions for secure facility construction and federal compliance consulting services.',
}

export default function ContactPage() {
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
                <span className="block">Contact</span>
                <span className="block text-red-600">Us</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto font-semibold">
                Ready to discuss your secure facility needs? Get in touch with our team of experts 
                for a consultation on your project.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information and Form - Enhanced Design */}
      <div className="py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-red-100/30 to-red-200/20 rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-100/30 to-blue-200/20 rounded-full translate-y-40 -translate-x-40"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-5xl font-heading font-black text-gray-900 mb-6">
                  Get in Touch
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed font-semibold">
                  We&apos;re here to help with your secure facility construction and compliance needs. 
                  Contact us using the information below or fill out the form.
                </p>
              </div>
              
              <div className="space-y-8">
                <div className="group bg-white/90 backdrop-blur-sm border-2 border-red-200 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl flex items-center justify-center group-hover:from-red-200 group-hover:to-red-300 transition-all duration-300 shadow-lg">
                        <MapPin className="h-8 w-8 text-red-600 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-2xl font-heading font-black text-gray-900 mb-4 group-hover:text-red-600 transition-colors duration-300">
                        Address
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-base font-medium">
                        1234 Security Drive<br />
                        Suite 100<br />
                        Washington, DC 20001
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group bg-white/90 backdrop-blur-sm border-2 border-blue-200 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300 shadow-lg">
                        <Phone className="h-8 w-8 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-2xl font-heading font-black text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                        Phone
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-base font-medium">(555) 123-4567</p>
                    </div>
                  </div>
                </div>

                <div className="group bg-white/90 backdrop-blur-sm border-2 border-gray-200 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center group-hover:from-gray-200 group-hover:to-gray-300 transition-all duration-300 shadow-lg">
                        <Mail className="h-8 w-8 text-gray-600 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-2xl font-heading font-black text-gray-900 mb-4 group-hover:text-gray-600 transition-colors duration-300">
                        Email
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-base font-medium">contact@tbvsolutions.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/90 backdrop-blur-sm border-2 border-red-200 rounded-3xl p-8">
                <h3 className="text-2xl font-heading font-black text-gray-900 mb-4">Business Hours</h3>
                <p className="text-gray-600 leading-relaxed text-base font-medium">
                  Monday - Friday: 8:00 AM - 6:00 PM<br />
                  Saturday: 9:00 AM - 2:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/90 backdrop-blur-sm border-2 border-gray-200 rounded-3xl p-8 shadow-2xl">
              <div className="mb-8">
                <h2 className="text-4xl font-heading font-black text-gray-900 mb-4">
                  Send us a Message
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed font-semibold">
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                </p>
              </div>
              
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

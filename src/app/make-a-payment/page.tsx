import type { Metadata } from 'next'
import Link from 'next/link'
import { CreditCard, ShieldCheck, ArrowRight, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Make a Payment - Trust But Verify Solutions',
  description: 'Secure payment portal for Trust But Verify Solutions invoices and project payments.',
}

export default function MakePaymentPage() {
  const paymentUrl = process.env.PAYMENT_URL

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
                <span className="block">Make a</span>
                <span className="block text-red-600">Payment</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto font-semibold">
                Secure and convenient payment processing for your Trust But Verify Solutions invoices.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Section - Enhanced Design */}
      <div className="py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-red-100/30 to-red-200/20 rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-100/30 to-blue-200/20 rounded-full translate-y-40 -translate-x-40"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            {/* Payment Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-5xl font-heading font-black text-gray-900 mb-6">
                  Payment Information
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed font-semibold">
                  We accept all major credit cards and offer secure payment processing through our 
                  trusted payment partner. All transactions are encrypted and secure.
                </p>
              </div>
              
              <div className="space-y-8">
                <div className="group bg-white/90 backdrop-blur-sm border-2 border-red-200 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl flex items-center justify-center group-hover:from-red-200 group-hover:to-red-300 transition-all duration-300 shadow-lg">
                        <ShieldCheck className="h-8 w-8 text-red-600 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-2xl font-heading font-black text-gray-900 mb-4 group-hover:text-red-600 transition-colors duration-300">
                        Secure Processing
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-base font-medium">
                        All payments are processed through secure, encrypted channels with industry-standard security.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group bg-white/90 backdrop-blur-sm border-2 border-blue-200 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300 shadow-lg">
                        <CreditCard className="h-8 w-8 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-2xl font-heading font-black text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                        Accepted Payment Methods
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-base font-medium">
                        Visa, Mastercard, American Express, Discover, and ACH bank transfers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/90 backdrop-blur-sm border-2 border-gray-200 rounded-3xl p-8">
                <h3 className="text-2xl font-heading font-black text-gray-900 mb-4">Payment Terms</h3>
                <ul className="space-y-3 text-gray-600 font-medium">
                  <li className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                    <span>Net 30 payment terms for approved invoices</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                    <span>2% discount for payments received within 10 days</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-gray-500 mt-2 flex-shrink-0"></div>
                    <span>Late fees may apply after 30 days</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                    <span>Contact billing for payment plan options</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Payment Button */}
            <div className="flex flex-col items-center justify-center">
              <div className="w-full max-w-md bg-white/90 backdrop-blur-sm border-2 border-gray-200 rounded-3xl p-8 text-center shadow-2xl">
                <h3 className="text-3xl font-heading font-black text-gray-900 mb-4">
                  Ready to Pay?
                </h3>
                <p className="text-lg text-gray-600 mb-8 font-semibold">
                  Click the button below to access our secure payment portal.
                </p>
                
                {paymentUrl ? (
                  <Link
                    href={paymentUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 w-full justify-center rounded-xl bg-red-600 px-8 py-4 text-xl font-bold text-white shadow-2xl hover:bg-red-700 transition-all duration-300 hover:scale-105"
                  >
                    <CreditCard className="h-6 w-6" />
                    Pay Now
                    <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                ) : (
                  <div className="space-y-6">
                    <div className="rounded-xl bg-yellow-50 border-2 border-yellow-200 p-6">
                      <p className="text-lg text-yellow-800 font-semibold">
                        Payment portal is currently being configured. Please contact our billing department for payment instructions.
                      </p>
                    </div>
                    <Link
                      href="/contact"
                      className="group inline-flex items-center gap-3 w-full justify-center rounded-xl bg-gray-600 px-8 py-4 text-xl font-bold text-white shadow-2xl hover:bg-gray-700 transition-all duration-300 hover:scale-105"
                    >
                      Contact Billing
                      <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Information - Enhanced Design */}
      <div className="py-32 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.15),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white text-sm font-bold rounded-full mb-8 shadow-xl">
              <Star className="mr-3 h-5 w-5" />
              Need Help?
            </div>
            <h2 className="text-5xl font-heading font-black text-white mb-6">
              We&apos;re Here to Help
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-semibold">
              If you have questions about your invoice or need assistance with payment, 
              our team is here to help.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="group text-center bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-3xl p-8 hover:bg-white/20 transition-all duration-500 hover:-translate-y-2">
              <h3 className="text-2xl font-heading font-black text-white mb-4 group-hover:text-red-400 transition-colors duration-300">Billing Questions</h3>
              <p className="text-gray-300 leading-relaxed mb-6 font-medium">
                Contact our billing department for invoice questions or payment issues.
              </p>
              <p className="text-lg font-bold text-red-400">
                billing@tbvsolutions.com
              </p>
            </div>
            
            <div className="group text-center bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-3xl p-8 hover:bg-white/20 transition-all duration-500 hover:-translate-y-2">
              <h3 className="text-2xl font-heading font-black text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">Payment Support</h3>
              <p className="text-gray-300 leading-relaxed mb-6 font-medium">
                Technical support for payment processing and account issues.
              </p>
              <p className="text-lg font-bold text-blue-400">
                (555) 123-4567
              </p>
            </div>
            
            <div className="group text-center bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-3xl p-8 hover:bg-white/20 transition-all duration-500 hover:-translate-y-2">
              <h3 className="text-2xl font-heading font-black text-white mb-4 group-hover:text-gray-400 transition-colors duration-300">General Inquiries</h3>
              <p className="text-gray-300 leading-relaxed mb-6 font-medium">
                For general questions about our services or projects.
              </p>
              <p className="text-lg font-bold text-gray-400">
                contact@tbvsolutions.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

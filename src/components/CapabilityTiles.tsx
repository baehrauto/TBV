import Link from 'next/link'
import { Shield, Building2, FileCheck, Users, Lock, Wrench } from 'lucide-react'
import { CapabilityTile } from '@/types'

const capabilities: CapabilityTile[] = [
  {
    title: 'SCIF & Secure Spaces',
    description: 'Design and construction of Sensitive Compartmented Information Facilities with ICD 705 compliance.',
    icon: 'Shield',
    href: '/scif-secure',
  },
  {
    title: 'Compliance Consulting',
    description: 'Expert guidance on federal security requirements, clearances, and regulatory compliance.',
    icon: 'FileCheck',
    href: '/services',
  },
  {
    title: 'Federal Interiors',
    description: 'Specialized interior design and construction for federal buildings and secure facilities.',
    icon: 'Building2',
    href: '/services',
  },
  {
    title: 'Security Systems',
    description: 'Advanced access control, surveillance, and security infrastructure installation.',
    icon: 'Lock',
    href: '/services',
  },
  {
    title: 'Project Management',
    description: 'End-to-end project management for complex federal construction projects.',
    icon: 'Wrench',
    href: '/services',
  },
  {
    title: 'Team Building',
    description: 'Assembling and managing cleared personnel for sensitive government projects.',
    icon: 'Users',
    href: '/services',
  },
]

const iconMap = {
  Shield,
  Building2,
  FileCheck,
  Users,
  Lock,
  Wrench,
}

export default function CapabilityTiles() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-red-600">Our Capabilities</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Comprehensive Security Solutions
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We provide end-to-end security solutions for federal contractors and government agencies, 
            from initial design through final certification.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {capabilities.map((capability) => {
              const IconComponent = iconMap[capability.icon as keyof typeof iconMap]
              return (
                <div key={capability.title} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <IconComponent className="h-5 w-5 flex-none text-red-600" aria-hidden="true" />
                    {capability.title}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{capability.description}</p>
                    <p className="mt-6">
                      <Link
                        href={capability.href}
                        className="text-sm font-semibold leading-6 text-red-600 hover:text-red-500 transition-colors"
                      >
                        Learn more <span aria-hidden="true">→</span>
                      </Link>
                    </p>
                  </dd>
                </div>
              )
            })}
          </dl>
        </div>
      </div>
    </div>
  )
}

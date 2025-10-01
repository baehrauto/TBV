export interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  message: string
  projectType?: string
  location?: string
  timeline?: string
  clearanceLevel?: string
}

export interface StatsData {
  projectsDelivered: number
  totalSquareFootage: number
  projectValue: number
}

export interface CapabilityTile {
  title: string
  description: string
  icon: string
  href: string
}

export interface ClientLogo {
  name: string
  logo: string
  href?: string
}

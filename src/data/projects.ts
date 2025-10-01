export interface Project {
  title: string
  slug: string
  category: string
  location: string
  squareFootage?: number
  duration?: string
  featured: boolean
  coverImage: string
  gallery: string[]
  excerpt: string
  body: {
    html: string
  }
  url: string
}

export const allProjects: Project[] = [
  {
    title: "Federal Data Center SCIF",
    slug: "federal-data-center",
    category: "SCIF & Secure Space",
    location: "Washington, DC",
    squareFootage: 25000,
    duration: "18 months",
    featured: true,
      coverImage: "/projects/project-1.svg",
      gallery: [
        "/projects/project-2.svg",
        "/projects/project-3.svg",
        "/projects/project-4.svg"
      ],
    excerpt: "State-of-the-art SCIF facility for federal data processing with advanced security measures and compliance with ICD 705 standards.",
    body: {
      html: `
        <h1>Federal Data Center SCIF</h1>
        <p>This comprehensive SCIF (Sensitive Compartmented Information Facility) project involved the complete design and construction of a 25,000 square foot secure data center for federal operations.</p>
        <h2>Project Overview</h2>
        <p>The facility was designed to meet the highest security standards including ICD 705 compliance, with advanced access control systems, TEMPEST shielding, and redundant security measures.</p>
        <h2>Key Features</h2>
        <ul>
          <li><strong>Security Level:</strong> Top Secret/SCI</li>
          <li><strong>Compliance:</strong> ICD 705, FISMA, FedRAMP</li>
          <li><strong>Capacity:</strong> 500+ workstations</li>
          <li><strong>Redundancy:</strong> N+1 power and cooling systems</li>
          <li><strong>Access Control:</strong> Multi-factor authentication with biometric verification</li>
        </ul>
        <h2>Technical Specifications</h2>
        <p>The project included specialized construction techniques including:</p>
        <ul>
          <li>TEMPEST shielding throughout</li>
          <li>Acoustic isolation systems</li>
          <li>Advanced HVAC with positive pressure</li>
          <li>Redundant power systems with UPS backup</li>
          <li>Secure communications infrastructure</li>
        </ul>
        <h2>Timeline</h2>
        <p>The project was completed on schedule despite complex security requirements and multiple agency approvals. The facility is now operational and serving critical federal missions.</p>
      `
    },
    url: "/projects/federal-data-center"
  },
  {
    title: "Defense Contractor Secure Office",
    slug: "defense-contractor-office",
    category: "SCIF & Secure Space",
    location: "Arlington, VA",
    squareFootage: 15000,
    duration: "12 months",
    featured: true,
    coverImage: "/projects/project-5.svg",
    gallery: [
      "/projects/project-6.svg",
      "/projects/project-7.svg"
    ],
    excerpt: "Modern secure office space for defense contractor with classified work areas and advanced security infrastructure.",
    body: {
      html: `
        <h1>Defense Contractor Secure Office</h1>
        <p>A comprehensive secure office renovation for a major defense contractor, featuring both unclassified and classified work areas within a single facility.</p>
        <h2>Project Scope</h2>
        <p>The project involved complete interior renovation of a 15,000 square foot office space, including the construction of secure work areas, conference rooms, and support facilities.</p>
        <h2>Security Features</h2>
        <ul>
          <li><strong>Access Control:</strong> Card reader systems with audit trails</li>
          <li><strong>Video Surveillance:</strong> 24/7 monitoring with secure storage</li>
          <li><strong>Secure Communications:</strong> Encrypted voice and data systems</li>
          <li><strong>Document Security:</strong> Secure storage and destruction systems</li>
        </ul>
        <h2>Compliance</h2>
        <p>The facility meets all requirements for:</p>
        <ul>
          <li>NISPOM (National Industrial Security Program Operating Manual)</li>
          <li>DoD 5220.22-M standards</li>
          <li>Facility Security Clearance requirements</li>
        </ul>
        <h2>Design Highlights</h2>
        <ul>
          <li>Open office layout with secure perimeter</li>
          <li>Modular furniture systems for flexibility</li>
          <li>Advanced HVAC with air filtration</li>
          <li>Emergency egress systems</li>
          <li>Secure waste disposal systems</li>
        </ul>
      `
    },
    url: "/projects/defense-contractor-office"
  },
  {
    title: "Intelligence Agency Regional Facility",
    slug: "intelligence-agency-facility",
    category: "SCIF & Secure Space",
    location: "Denver, CO",
    squareFootage: 35000,
    duration: "24 months",
    featured: true,
    coverImage: "/projects/project-8.svg",
    gallery: [
      "/projects/project-9.svg",
      "/projects/project-10.svg"
    ],
    excerpt: "Multi-level SCIF facility for intelligence operations with advanced security measures and specialized construction requirements.",
    body: {
      html: `
        <h1>Intelligence Agency Regional Facility</h1>
        <p>A sophisticated multi-level SCIF facility designed for intelligence operations, featuring advanced security measures and specialized construction techniques.</p>
        <h2>Facility Overview</h2>
        <p>This 35,000 square foot facility includes multiple security levels, from unclassified to Top Secret/SCI, with specialized areas for different types of operations.</p>
        <h2>Security Levels</h2>
        <ul>
          <li><strong>Unclassified Areas:</strong> General office and support functions</li>
          <li><strong>Secret Areas:</strong> Sensitive but unclassified operations</li>
          <li><strong>Top Secret Areas:</strong> Classified operations and briefings</li>
          <li><strong>SCIF Areas:</strong> Sensitive Compartmented Information operations</li>
        </ul>
        <h2>Specialized Features</h2>
        <ul>
          <li><strong>TEMPEST Shielding:</strong> Complete electromagnetic shielding</li>
          <li><strong>Acoustic Isolation:</strong> Soundproof construction throughout</li>
          <li><strong>Access Control:</strong> Multi-level security with biometric verification</li>
          <li><strong>Secure Communications:</strong> Encrypted systems with audit trails</li>
          <li><strong>Emergency Systems:</strong> Secure emergency egress and communication</li>
        </ul>
        <h2>Construction Challenges</h2>
        <p>The project required specialized construction techniques including:</p>
        <ul>
          <li>Continuous security monitoring during construction</li>
          <li>Vetted construction personnel with security clearances</li>
          <li>Secure material handling and storage</li>
          <li>Multiple agency inspections and approvals</li>
        </ul>
        <h2>Timeline and Results</h2>
        <p>Despite complex requirements and multiple security clearances, the project was completed on schedule and within budget. The facility is now operational and serving critical intelligence missions.</p>
      `
    },
    url: "/projects/intelligence-agency-facility"
  },
  {
    title: "Compliance Consulting Project",
    slug: "compliance-consulting",
    category: "Compliance Consulting",
    location: "Multiple Locations",
    squareFootage: 0,
    duration: "6 months",
    featured: false,
    coverImage: "/projects/project-1.svg",
    gallery: [
      "/projects/project-2.svg"
    ],
    excerpt: "Comprehensive compliance assessment and consulting services for federal contractor security requirements.",
    body: {
      html: `
        <h1>Compliance Consulting Project</h1>
        <p>A comprehensive compliance consulting engagement for a federal contractor requiring assistance with security clearance processes and facility requirements.</p>
        <h2>Project Scope</h2>
        <p>The consulting engagement covered multiple aspects of federal security compliance including:</p>
        <ul>
          <li>Facility Security Clearance (FSC) application process</li>
          <li>Personnel Security Clearance (PSC) coordination</li>
          <li>Security education and training programs</li>
          <li>Policy development and implementation</li>
          <li>Audit preparation and support</li>
        </ul>
        <h2>Services Provided</h2>
        <ul>
          <li><strong>Security Assessment:</strong> Comprehensive evaluation of existing security measures</li>
          <li><strong>Policy Development:</strong> Custom security policies and procedures</li>
          <li><strong>Training Programs:</strong> Security awareness and compliance training</li>
          <li><strong>Audit Support:</strong> Preparation for government security audits</li>
          <li><strong>Documentation:</strong> Complete security documentation package</li>
        </ul>
        <h2>Results</h2>
        <p>The client successfully obtained their Facility Security Clearance and implemented all required security measures. The project resulted in:</p>
        <ul>
          <li>100% compliance with NISPOM requirements</li>
          <li>Successful government security audit</li>
          <li>Complete security documentation package</li>
          <li>Trained security staff and cleared personnel</li>
        </ul>
        <h2>Client Testimonial</h2>
        <p>"Trust But Verify Solutions provided exceptional guidance throughout our security clearance process. Their expertise and attention to detail were instrumental in our success."</p>
      `
    },
    url: "/projects/compliance-consulting"
  },
  {
    title: "Federal Building Interior Renovation",
    slug: "federal-interiors",
    category: "Federal Interiors",
    location: "Baltimore, MD",
    squareFootage: 45000,
    duration: "15 months",
    featured: false,
    coverImage: "/projects/project-3.svg",
    gallery: [
      "/projects/project-4.svg",
      "/projects/project-5.svg"
    ],
    excerpt: "Complete interior renovation of federal building with modern design while maintaining security and accessibility requirements.",
    body: {
      html: `
        <h1>Federal Building Interior Renovation</h1>
        <p>A comprehensive interior renovation project for a federal building, modernizing the space while maintaining strict security and accessibility requirements.</p>
        <h2>Project Overview</h2>
        <p>The 45,000 square foot renovation included complete interior redesign of office spaces, conference rooms, and support areas while maintaining federal building standards.</p>
        <h2>Design Features</h2>
        <ul>
          <li><strong>Modern Office Layout:</strong> Open office design with flexible workstations</li>
          <li><strong>Accessibility Compliance:</strong> Full ADA compliance throughout</li>
          <li><strong>Security Integration:</strong> Seamless integration of security systems</li>
          <li><strong>Sustainable Design:</strong> LEED Silver certification achieved</li>
          <li><strong>Technology Integration:</strong> Advanced AV and IT infrastructure</li>
        </ul>
        <h2>Key Areas</h2>
        <ul>
          <li><strong>Executive Suites:</strong> Modern executive offices with integrated technology</li>
          <li><strong>Conference Facilities:</strong> Multiple conference rooms with advanced AV</li>
          <li><strong>Open Office Areas:</strong> Flexible workstations with privacy options</li>
          <li><strong>Support Spaces:</strong> Break rooms, storage, and utility areas</li>
          <li><strong>Reception Areas:</strong> Professional reception and waiting areas</li>
        </ul>
        <h2>Technical Specifications</h2>
        <ul>
          <li><strong>HVAC:</strong> Energy-efficient systems with individual zone control</li>
          <li><strong>Lighting:</strong> LED lighting with daylight harvesting</li>
          <li><strong>Flooring:</strong> Sustainable materials with acoustic properties</li>
          <li><strong>Ceilings:</strong> Suspended ceiling systems with integrated services</li>
          <li><strong>Walls:</strong> Modular wall systems for flexibility</li>
        </ul>
        <h2>Timeline and Results</h2>
        <p>The project was completed on schedule and within budget, resulting in a modern, efficient workspace that meets all federal requirements while providing an excellent environment for employees.</p>
      `
    },
    url: "/projects/federal-interiors"
  },
  {
    title: "Secure Communications Facility",
    slug: "secure-communications",
    category: "SCIF & Secure Space",
    location: "San Antonio, TX",
    squareFootage: 12000,
    duration: "10 months",
    featured: false,
    coverImage: "/projects/project-6.svg",
    gallery: [
      "/projects/project-7.svg"
    ],
    excerpt: "Specialized secure communications facility with advanced TEMPEST shielding and secure voice/data systems.",
    body: {
      html: `
        <h1>Secure Communications Facility</h1>
        <p>A specialized secure communications facility designed for sensitive government communications with advanced TEMPEST shielding and secure systems.</p>
        <h2>Facility Design</h2>
        <p>The 12,000 square foot facility was specifically designed for secure communications operations, featuring advanced shielding and specialized construction techniques.</p>
        <h2>Security Features</h2>
        <ul>
          <li><strong>TEMPEST Shielding:</strong> Complete electromagnetic shielding throughout</li>
          <li><strong>Acoustic Security:</strong> Soundproof construction for voice communications</li>
          <li><strong>Access Control:</strong> Multi-level security with biometric verification</li>
          <li><strong>Secure Communications:</strong> Encrypted voice and data systems</li>
          <li><strong>Audit Trails:</strong> Complete logging of all communications</li>
        </ul>
        <h2>Technical Specifications</h2>
        <ul>
          <li><strong>Shielding:</strong> Copper mesh and specialized materials</li>
          <li><strong>Power:</strong> Isolated power systems with UPS backup</li>
          <li><strong>HVAC:</strong> Positive pressure systems with filtration</li>
          <li><strong>Communications:</strong> Secure voice and data infrastructure</li>
          <li><strong>Monitoring:</strong> 24/7 security monitoring and recording</li>
        </ul>
        <h2>Specialized Areas</h2>
        <ul>
          <li><strong>Secure Briefing Rooms:</strong> Soundproof rooms for classified briefings</li>
          <li><strong>Communications Center:</strong> Central hub for secure communications</li>
          <li><strong>Equipment Rooms:</strong> Secure storage for communications equipment</li>
          <li><strong>Support Areas:</strong> Break rooms and administrative spaces</li>
        </ul>
        <h2>Compliance</h2>
        <p>The facility meets all requirements for:</p>
        <ul>
          <li>ICD 705 (SCIF construction standards)</li>
          <li>TEMPEST requirements</li>
          <li>Secure communications standards</li>
          <li>Government security requirements</li>
        </ul>
        <h2>Results</h2>
        <p>The facility was completed on schedule and is now operational, providing secure communications capabilities for critical government operations.</p>
      `
    },
    url: "/projects/secure-communications"
  }
]

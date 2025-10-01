'use client'

import { useState } from 'react'
import { Project } from '@/data/projects'

interface ProjectFiltersProps {
  projects: Project[]
  onFilterChange: (filteredProjects: Project[]) => void
}

const categories = [
  'All',
  'SCIF & Secure Space',
  'Compliance Consulting',
  'Federal Interiors',
]

export default function ProjectFilters({ projects, onFilterChange }: ProjectFiltersProps) {
  const [activeFilter, setActiveFilter] = useState('All')

  const handleFilterChange = (category: string) => {
    setActiveFilter(category)
    
    if (category === 'All') {
      onFilterChange(projects)
    } else {
      const filtered = projects.filter(project => project.category === category)
      onFilterChange(filtered)
    }
  }

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleFilterChange(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            activeFilter === category
              ? 'bg-red-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

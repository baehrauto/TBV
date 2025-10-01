'use client'

import { useState } from 'react'
import { allProjects } from '@/data/projects'
import ProjectCard from '@/components/ProjectCard'
import ProjectFilters from '@/components/ProjectFilters'

export default function ProjectsClient() {
  const [filteredProjects, setFilteredProjects] = useState(allProjects)

  const handleFilterChange = (category: string) => {
    if (category === 'All') {
      setFilteredProjects(allProjects)
    } else {
      setFilteredProjects(allProjects.filter(project => project.category === category))
    }
  }

  const categories = ['All', ...new Set(allProjects.map(project => project.category))]

  return (
    <>
      {/* Filters - Enhanced Design */}
      <div className="py-16 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-red-100/30 rounded-full -translate-y-36 translate-x-36"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-100/30 rounded-full translate-y-40 -translate-x-40"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-black text-gray-900 mb-4">
              Filter Projects
            </h2>
            <p className="text-lg text-gray-600 font-semibold">
              Browse our projects by category
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleFilterChange(category)}
                className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 hover:scale-105 shadow-lg ${
                  filteredProjects === allProjects && category === 'All'
                    ? 'bg-red-600 text-white shadow-red-500/25'
                    : filteredProjects.length > 0 && filteredProjects[0]?.category === category
                    ? 'bg-red-600 text-white shadow-red-500/25'
                    : 'bg-white text-gray-700 hover:bg-red-50 hover:text-red-600 border-2 border-gray-200 hover:border-red-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid - Enhanced Design */}
      <div className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <div key={project.slug} className="group bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 hover:-translate-y-3">
                <div className="relative overflow-hidden">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <span className="inline-flex items-center px-4 py-2 bg-red-100 text-red-800 text-sm font-semibold rounded-full shadow-sm">
                      {project.category}
                    </span>
                    <span className="text-sm text-gray-500 font-medium">{project.duration}</span>
                  </div>
                  <h3 className="text-3xl font-heading font-black text-gray-900 mb-4 group-hover:text-red-600 transition-colors duration-300">{project.title}</h3>
                  <p className="text-gray-600 mb-4 font-medium">{project.location}</p>
                  <p className="text-gray-600 leading-relaxed mb-8 text-base">{project.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <a href={`/projects/${project.slug}`} className="group/link inline-flex items-center text-sm font-semibold text-red-600 hover:text-red-700 transition-all duration-300">
                      View Project
                      <svg className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                    <div className="text-sm text-gray-500 font-medium">{project.squareFootage} sq ft</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <div className="mx-auto h-24 w-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                <svg className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.709" />
                </svg>
              </div>
              <h3 className="text-2xl font-heading font-black text-gray-900 mb-4">No Projects Found</h3>
              <p className="text-lg text-gray-500 font-semibold">No projects found for the selected category.</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

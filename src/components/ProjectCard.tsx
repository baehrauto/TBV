import Link from 'next/link'
import Image from 'next/image'
import { Project } from '@/data/projects'
import { formatNumber } from '@/lib/utils'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <Image
          src={project.coverImage}
          alt={project.title}
          width={400}
          height={300}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-900">
            <Link href={project.url}>
              <span aria-hidden="true" className="absolute inset-0" />
              {project.title}
            </Link>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{project.location}</p>
          <p className="mt-1 text-sm text-gray-500">{project.category}</p>
          {project.squareFootage && (
            <p className="mt-1 text-sm text-gray-500">
              {formatNumber(project.squareFootage)} sq ft
            </p>
          )}
        </div>
      </div>
      <p className="mt-2 text-sm text-gray-600 line-clamp-3">{project.excerpt}</p>
    </div>
  )
}

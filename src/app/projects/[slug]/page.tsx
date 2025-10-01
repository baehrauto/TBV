import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { allProjects } from '@/data/projects'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, MapPin, Calendar, Square } from 'lucide-react'
import Gallery from '@/components/Gallery'
import ProjectCard from '@/components/ProjectCard'
import { formatNumber } from '@/lib/utils'

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return allProjects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = allProjects.find((project) => project.slug === params.slug)
  
  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: `${project.title} - Trust But Verify Solutions`,
    description: project.excerpt,
    openGraph: {
      title: project.title,
      description: project.excerpt,
      images: [project.coverImage],
    },
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = allProjects.find((project) => project.slug === params.slug)
  
  if (!project) {
    notFound()
  }

  const relatedProjects = allProjects
    .filter((p) => p.slug !== project.slug && p.category === project.category)
    .slice(0, 3)

  return (
    <div className="bg-white">
      {/* Back Button */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-8">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>
      </div>

      {/* Hero Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            <div className="max-w-xl lg:max-w-lg">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                {project.title}
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                {project.excerpt}
              </p>
              
              {/* Project Details */}
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-gray-400" />
                  <span className="text-sm text-gray-600">{project.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-gray-900">Category:</span>
                  <span className="text-sm text-gray-600">{project.category}</span>
                </div>
                {project.squareFootage && (
                  <div className="flex items-center gap-3">
                    <Square className="h-5 w-5 text-gray-400" />
                    <span className="text-sm text-gray-600">
                      {formatNumber(project.squareFootage)} sq ft
                    </span>
                  </div>
                )}
                {project.duration && (
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-gray-400" />
                    <span className="text-sm text-gray-600">{project.duration}</span>
                  </div>
                )}
              </div>
            </div>
            
            <div className="flex flex-col items-start">
              <div className="relative w-full">
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="aspect-[16/10] w-full rounded-2xl bg-gray-100 object-cover shadow-xl"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      {project.gallery && project.gallery.length > 0 && (
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Project Gallery
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Additional images from this project.
              </p>
              <div className="mt-8">
                <Gallery images={project.gallery} title={project.title} />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Project Content */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="prose prose-lg prose-gray max-w-none">
              <div dangerouslySetInnerHTML={{ __html: project.body.html }} />
            </div>
          </div>
        </div>
      </div>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <div className="bg-gray-50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Related Projects
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Other projects in the {project.category} category.
              </p>
              <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-20 lg:grid-cols-3">
                {relatedProjects.map((relatedProject) => (
                  <ProjectCard key={relatedProject.slug} project={relatedProject} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

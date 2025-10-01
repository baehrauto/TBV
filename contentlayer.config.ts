import { defineDocumentType, makeSource } from 'contentlayer2/source-files'

export const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: `projects/**/*.mdx`,
  fields: {
    title: {
      type: 'string',
      description: 'The title of the project',
      required: true,
    },
    slug: {
      type: 'string',
      description: 'The slug of the project',
      required: true,
    },
    category: {
      type: 'string',
      description: 'The category of the project',
      required: true,
    },
    location: {
      type: 'string',
      description: 'The location of the project',
      required: true,
    },
    squareFootage: {
      type: 'number',
      description: 'The square footage of the project',
      required: false,
    },
    duration: {
      type: 'string',
      description: 'The duration of the project',
      required: false,
    },
    featured: {
      type: 'boolean',
      description: 'Whether the project is featured',
      required: false,
      default: false,
    },
    coverImage: {
      type: 'string',
      description: 'The cover image of the project',
      required: true,
    },
    gallery: {
      type: 'list',
      of: { type: 'string' },
      description: 'Gallery images for the project',
      required: false,
      default: [],
    },
    excerpt: {
      type: 'string',
      description: 'The excerpt of the project',
      required: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (project) => `/projects/${project.slug}`,
    },
  },
}))

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `posts/**/*.mdx`,
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    slug: {
      type: 'string',
      description: 'The slug of the post',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the post',
      required: true,
    },
    excerpt: {
      type: 'string',
      description: 'The excerpt of the post',
      required: true,
    },
    coverImage: {
      type: 'string',
      description: 'The cover image of the post',
      required: false,
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
      description: 'Tags for the post',
      required: false,
      default: [],
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/posts/${post.slug}`,
    },
  },
}))

export default makeSource({
  contentDirPath: './content',
  documentTypes: [Project, Post],
})

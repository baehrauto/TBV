# Trust But Verify Solutions

A production-ready website for Trust But Verify Solutions, a veteran-owned company specializing in secure facility construction and federal compliance consulting.

## Features

- **Modern Design**: Built with Next.js 14, TypeScript, and Tailwind CSS
- **Content Management**: Contentlayer for MDX-based content management
- **SEO Optimized**: Complete SEO setup with sitemap, robots.txt, and metadata
- **Contact Form**: Integrated contact form with Resend email service
- **Payment Integration**: External payment portal integration
- **Responsive**: Mobile-first responsive design
- **Accessible**: Semantic HTML and accessibility best practices
- **Performance**: Optimized images and Lighthouse score ≥ 90

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Content**: Contentlayer with MDX
- **Forms**: React Hook Form with Zod validation
- **Email**: Resend
- **Icons**: Lucide React
- **Testing**: Vitest

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd tbv-solutions
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Update the environment variables in `.env.local`:
```env
# Contact form configuration
CONTACT_TO=contact@tbvsolutions.com
RESEND_API_KEY=your_resend_api_key_here

# Payment configuration
PAYMENT_URL=https://payments.tbvsolutions.com

# Next.js configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

5. Run the development server:
```bash
npm run dev
# or
pnpm dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `CONTACT_TO` | Email address to receive contact form submissions | Yes |
| `RESEND_API_KEY` | Resend API key for email service | No (falls back to console logging) |
| `PAYMENT_URL` | External payment portal URL | No (shows fallback message) |
| `NEXT_PUBLIC_SITE_URL` | Base URL for the site | Yes |

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── api/               # API routes
│   ├── contact/           # Contact page
│   ├── make-a-payment/    # Payment page
│   ├── projects/          # Projects pages
│   ├── scif-secure/       # SCIF/Secure page
│   ├── services/          # Services page
│   └── thank-you/         # Thank you page
├── components/            # React components
├── lib/                   # Utility functions and validations
└── types/                 # TypeScript type definitions

content/                   # Contentlayer content
├── projects/              # Project MDX files
└── posts/                 # Blog post MDX files

public/                    # Static assets
├── projects/              # Project images
├── pdfs/                  # PDF documents
└── robots.txt             # SEO robots file
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run test` - Run tests in watch mode
- `npm run test:run` - Run tests once

## Content Management

The site uses Contentlayer for content management with MDX files:

### Projects
- Location: `content/projects/`
- Frontmatter fields: `title`, `slug`, `category`, `location`, `squareFootage`, `duration`, `featured`, `coverImage`, `gallery`, `excerpt`

### Posts
- Location: `content/posts/`
- Frontmatter fields: `title`, `slug`, `date`, `excerpt`, `coverImage`, `tags`

## Deployment

The site is ready for deployment on Vercel, Netlify, or any other Next.js-compatible platform.

### Vercel (Recommended)

1. Connect your repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy

### Other Platforms

1. Build the project: `npm run build`
2. Deploy the `.next` folder and other static files
3. Set environment variables

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests: `npm run test:run`
5. Run linting: `npm run lint`
6. Submit a pull request

## License

This project is proprietary and confidential. All rights reserved.

## Support

For support or questions, please contact:
- Email: contact@tbvsolutions.com
- Phone: (555) 123-4567
# Next.js Minimal Template

A modern, minimal Next.js template with TypeScript, Tailwind CSS, and essential features for rapid development.

## ✨ Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Sonner** for beautiful toast notifications
- **Error Boundaries** for graceful error handling
- **SEO Optimized** with automatic sitemap generation
- **Environment Configuration** with TypeScript support
- **Utility Functions** for common operations
- **Loading States** with reusable components
- **Responsive Design** with mobile-first approach

## 🚀 Quick Start

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd npcl
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp env.example .env.local
   ```

   Edit `.env.local` with your configuration:

   ```env
   SITE_URL=https://your-domain.com
   NEXT_PUBLIC_SITE_NAME=Your Site Name
   NEXT_PUBLIC_SITE_DESCRIPTION=Your site description
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Main page (redirects to home)
│   └── home/              # Home page route
│       └── page.tsx       # Homepage component
├── src/
│   ├── components/        # React components
│   │   ├── ui/           # Base UI components (shadcn/ui)
│   │   ├── common/       # Shared components
│   │   ├── features/     # Feature-specific components
│   │   └── index.ts      # Component exports
│   ├── hooks/            # Custom React hooks
│   │   └── index.ts      # Hook exports
│   ├── lib/              # Utilities & configurations
│   │   ├── utils/        # Utility functions
│   │   ├── constants.ts  # App constants
│   │   └── index.ts      # Library exports
│   ├── types/            # TypeScript type definitions
│   │   └── index.d.ts    # Global types
│   └── styles/           # Global styles
│       └── globals.css   # Global CSS
├── config/               # Configuration files
│   ├── tailwind.config.js
│   ├── postcss.config.mjs
│   ├── eslint.config.mjs
│   └── next-sitemap.config.js
├── public/               # Static assets
├── env.example           # Environment variables template
└── README.md            # Project documentation
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run postbuild` - Generate sitemap (runs after build)

## 🎨 Customization

### Styling

The project uses Tailwind CSS. You can customize the design system in `tailwind.config.js`.

### Components

- **ErrorBoundary**: Catches and handles React errors gracefully
- **LoadingSpinner**: Reusable loading component with different sizes
- **Toast Notifications**: Beautiful notifications using Sonner

### Utilities

Common utility functions are available in `src/lib/utils/common.ts`:

- `formatDate()` - Format dates
- `copyToClipboard()` - Copy text to clipboard
- `generateId()` - Generate random IDs
- `debounce()` - Debounce function calls
- `throttle()` - Throttle function calls

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file with the following variables:

```env
SITE_URL=https://your-domain.com
NEXT_PUBLIC_SITE_NAME=Your Site Name
NEXT_PUBLIC_SITE_DESCRIPTION=Your site description
```

### SEO Configuration

The template includes:

- Automatic sitemap generation
- Robots.txt generation
- OpenGraph metadata
- Twitter card support
- Viewport configuration

### Sitemap

The sitemap is automatically generated after each build. Configure it in `next-sitemap.config.js`.

## 📱 Responsive Design

The template is built with a mobile-first approach using Tailwind CSS breakpoints.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

The template works with any platform that supports Next.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Sonner](https://sonner.emilkowal.ski/) - Toast notifications
- [Radix UI](https://www.radix-ui.com/) - UI primitives

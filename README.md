# Next.js Minimal Template

> **Optimized for AI-assisted development and rapid prototyping**

A modern, production-ready Next.js template with TypeScript, Tailwind CSS v4, and essential features. Designed for maximum compatibility with AI development tools and quick project bootstrapping.

## ✨ Features

- **Next.js 14** with App Router and Server Components
- **TypeScript** for type safety and better DX
- **Tailwind CSS v4** with CSS variables and dark mode
- **Radix UI** components with shadcn/ui styling
- **Dark/Light mode** with system preference detection
- **Toast notifications** with Sonner
- **Error boundaries** for graceful error handling
- **Loading states** and async utilities
- **SEO optimized** with automatic sitemap generation
- **AI-optimized** structure for all AI development tools

## 🚀 Quick Start

### Option 1: Clone and Use
```bash
# Clone the repository
git clone <your-repo-url>
cd nextjs-minimal-template

# Install dependencies
npm install

# Start development server
npm run dev
```

### Option 2: One Command Setup
```bash
npm run setup
```

### Option 3: AI-Assisted Development
This template is optimized for AI-assisted development. Simply:
1. Copy the project structure
2. Reference the component examples
3. Use the established patterns

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with theme provider
│   └── page.tsx           # Homepage with examples
├── src/
│   ├── components/        # React components
│   │   ├── ui/           # Base UI components (Radix + shadcn)
│   │   ├── common/       # Shared utility components
│   │   ├── theme-provider.tsx  # Theme context provider
│   │   ├── theme-toggle.tsx    # Dark/light mode toggle
│   │   └── index.ts      # Component exports
│   ├── lib/              # Utilities and configurations
│   │   ├── utils/        # Utility functions
│   │   ├── constants.ts  # App constants
│   │   └── index.ts      # Library exports
│   ├── hooks/            # Custom React hooks
│   ├── types/            # TypeScript type definitions
│   └── assets/           # Static assets and styles
│       └── styles/
│           └── globals.css # Global styles with CSS variables
├── public/               # Static files
├── package.json          # Dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── next.config.js        # Next.js configuration
├── postcss.config.js     # PostCSS configuration
├── components.json       # shadcn/ui configuration
└── next-sitemap.config.js # Sitemap configuration
```

## 🎨 Design System

### Colors
Uses CSS variables for theming with automatic dark mode:
- `--background`, `--foreground`
- `--primary`, `--secondary`, `--muted`
- `--border`, `--input`, `--ring`
- `--destructive`, `--accent`

### Components
All components use Radix UI primitives with shadcn/ui styling:
- **Button** - Multiple variants (default, destructive, outline, secondary, ghost)
- **Card** - Header, content, description layouts
- **Badge** - Status and category indicators
- **Dialog, Sheet, Popover** - Modal and overlay components
- **Form elements** - Input, Label, Select, Textarea

### Typography
- Font: Plus Jakarta Sans (Google Fonts)
- CSS variable: `--font-custom`
- Responsive text sizing

## 🛠️ Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint with auto-fix
- `npm run type-check` - TypeScript type checking
- `npm run format` - Format code with Prettier
- `npm run clean` - Clean build artifacts
- `npm run setup` - Install dependencies and start dev server

### Adding New Components
1. Create component in appropriate directory
2. Export from `src/components/index.ts`
3. Follow existing patterns for consistency

### Environment Variables
Create `.env.local`:
```env
SITE_URL=https://your-domain.com
NEXT_PUBLIC_SITE_NAME=Your Site Name
NEXT_PUBLIC_SITE_DESCRIPTION=Your site description
```

## 🤖 AI-Assisted Development

### Optimized for All AI Tools
- **Clear component structure** with consistent exports
- **Example implementations** in the homepage
- **Well-documented patterns** for common use cases
- **Type-safe props** for all components
- **Semantic HTML** with proper accessibility

### Code Generation Features
- **Predictable file structure** following Next.js conventions
- **Consistent naming patterns** (kebab-case for files, PascalCase for components)
- **Complete TypeScript types** for all props and functions
- **Reusable utility functions** in `src/lib/utils/`

### Component Usage Examples
```tsx
// Import components
import { Button, Card, Badge } from '@/components'
import { ThemeToggle } from '@/components/theme-toggle'

// Use with TypeScript support
<Button variant="destructive" size="lg">
  Delete Item
</Button>

<Card>
  <CardHeader>
    <CardTitle>Feature Card</CardTitle>
    <CardDescription>Description text</CardDescription>
  </CardHeader>
  <CardContent>
    Content goes here
  </CardContent>
</Card>
```

## 📦 Key Dependencies

### Core
- **next** - React framework
- **react** & **react-dom** - UI library
- **typescript** - Type safety

### Styling
- **tailwindcss** - Utility-first CSS framework (v4)
- **next-themes** - Theme switching
- **tailwind-merge** - Conditional class merging
- **clsx** - Class name utility

### UI Components
- **@radix-ui/** - Headless UI primitives
- **lucide-react** - Icon library
- **sonner** - Toast notifications

### Development
- **prettier** - Code formatting
- **eslint** - Code linting
- **next-sitemap** - SEO sitemap generation

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect to Vercel
3. Set environment variables
4. Deploy automatically

### Other Platforms
Compatible with:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify
- Any Node.js hosting

## 📈 Performance

- **Automatic code splitting** with Next.js
- **Optimized fonts** with next/font
- **Image optimization** with next/image
- **Bundle analysis** available with `npm run build`

## 🎯 Use Cases

### Perfect For
- **Rapid prototyping** with AI assistance
- **MVP development** and startups
- **Design system foundations**
- **Component library starting point**
- **Learning modern React patterns**

### AI-Assisted Development
- **Cursor** - Use as project foundation
- **GitHub Copilot** - Leverage existing patterns
- **Claude/ChatGPT** - Reference for code generation
- **v0.dev** - Copy components and patterns
- **Any AI coding assistant** - Clear structure and patterns

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Radix UI](https://www.radix-ui.com/) - Headless UI components
- [shadcn/ui](https://ui.shadcn.com/) - Component design system
- [Sonner](https://sonner.emilkowal.ski/) - Toast notifications

---

**Ready to build something amazing?** This template provides everything you need to get started quickly while maintaining production-ready code quality. Perfect for solo developers, teams, and AI-assisted development workflows.
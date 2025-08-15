# AI Integration Guide

Quick reference for AI-assisted development with this Next.js template.

## 🎯 Template Stack

- **Next.js 14** with App Router
- **TypeScript**
- **Tailwind CSS v4** (no config file)
- **Radix UI + shadcn/ui** components
- **Dark/Light mode** support
- **Toast notifications** with Sonner

## 📋 Available Components

Import everything from `@/components`:

### UI Components

- `Button` - variants: default, destructive, outline, secondary, ghost
- `Card, CardHeader, CardTitle, CardDescription, CardContent`
- `Badge` - variants: default, secondary, destructive, outline
- `Input, Label, Textarea`
- `Dialog, Sheet, Popover`
- `Select, Tabs, Separator`
- `Avatar, AlertDialog, DropdownMenu`

### Theme & Utilities

- `ThemeToggle` - dark/light mode switch
- `ThemeProvider` - theme context
- `LoadingSpinner` - sizes: sm, md, lg
- `ErrorBoundary` - error handling
- `toast` from 'sonner' - notifications

### Utility Functions

From `@/lib/utils/common`:

- `formatDate`, `formatRelativeTime`
- `copyToClipboard`, `generateId`
- `debounce`, `throttle`
- `isMobile`, `sleep`

## 🎨 Design System

### Semantic Colors

Uses CSS variables that automatically work with dark/light themes:

- `bg-background`, `text-foreground`
- `bg-primary`, `text-primary-foreground`
- `bg-secondary`, `text-secondary-foreground`
- `bg-muted`, `text-muted-foreground`
- `border-border`, `bg-card`

### Layout Patterns

- Container: `container mx-auto px-4`
- Grid: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`
- Spacing: `space-y-4`, `space-x-2`
- Responsive: `flex flex-col md:flex-row`

## 📁 File Structure

```
app/
  layout.tsx          # Root layout with theme provider
  page.tsx            # Homepage with component examples
src/components/
  ui/                 # Radix UI components (Button, Card, etc.)
  common/             # LoadingSpinner, ErrorBoundary
  examples/           # Reference implementations
  theme-provider.tsx  # Theme context
  theme-toggle.tsx    # Dark/light mode toggle
  index.ts            # All component exports
src/lib/utils/        # Utility functions
src/assets/styles/    # Global CSS with theme variables
```

## 🎯 Key Points for AI-Assisted Development

- **Import everything from** `@/components`
- **Use semantic color classes** (bg-background, text-foreground, etc.)
- **Reference** `app/page.tsx` for component usage examples
- **TypeScript interfaces** are defined for all components
- **Toast notifications** use `toast` from 'sonner'
- **Theme support** is automatic with CSS variables
- **Predictable patterns** for consistent code generation

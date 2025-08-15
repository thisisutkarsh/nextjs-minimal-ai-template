"use client"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"
import { Github, Sparkles, Zap, Code2, Palette, Shield, Rocket, ArrowRight, Star, Download } from "lucide-react"

export default function HomePage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="border-b border-border">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                            <Code2 className="w-4 h-4 text-primary-foreground" />
                        </div>
                        <span className="font-semibold text-lg">Next.js AI Template</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <ThemeToggle />
                        <Button variant="outline" size="sm" asChild>
                            <a
                                href="https://github.com/thisisutkarsh/nextjs-minimal-ai-template"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Github className="w-4 h-4 mr-2" />
                                GitHub
                            </a>
                        </Button>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto text-center max-w-4xl">
                    <div className="flex items-center justify-center gap-2 mb-6">
                        <Badge variant="secondary" className="px-3 py-1">
                            <Sparkles className="w-3 h-3 mr-1" />
                            AI-Optimized
                        </Badge>
                        <Badge variant="outline">Next.js 14</Badge>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">Build Faster with AI</h1>

                    <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                        A production-ready Next.js template optimized for AI-assisted development. TypeScript, Tailwind CSS v4,
                        Radix UI, and everything you need to ship quickly.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="px-8" asChild>
                            <a
                                href="https://github.com/thisisutkarsh/nextjs-minimal-ai-template"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Download className="w-4 h-4 mr-2" />
                                Get Started
                            </a>
                        </Button>
                        <Button variant="outline" size="lg" className="px-8 bg-transparent" asChild>
                            <a
                                href="https://github.com/thisisutkarsh/nextjs-minimal-ai-template#readme"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Documentation
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </a>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-16 px-4 bg-muted/50">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Everything You Need</h2>
                        <p className="text-muted-foreground text-lg">
                            Built with modern tools and optimized for AI development workflows
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Card className="hover:shadow-lg transition-all duration-200">
                            <CardHeader>
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                    <Zap className="w-6 h-6 text-primary" />
                                </div>
                                <CardTitle>Lightning Fast</CardTitle>
                                <CardDescription>
                                    Next.js 14 with App Router, automatic code splitting, and optimized performance out of the box.
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card className="hover:shadow-lg transition-all duration-200">
                            <CardHeader>
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                    <Palette className="w-6 h-6 text-primary" />
                                </div>
                                <CardTitle>Beautiful Design</CardTitle>
                                <CardDescription>
                                    Tailwind CSS v4 with CSS variables, dark mode support, and Radix UI components with shadcn/ui styling.
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card className="hover:shadow-lg transition-all duration-200">
                            <CardHeader>
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                    <Shield className="w-6 h-6 text-primary" />
                                </div>
                                <CardTitle>Type Safe</CardTitle>
                                <CardDescription>
                                    Full TypeScript support with strict type checking, IntelliSense, and better developer experience.
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card className="hover:shadow-lg transition-all duration-200">
                            <CardHeader>
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                    <Sparkles className="w-6 h-6 text-primary" />
                                </div>
                                <CardTitle>AI-Optimized</CardTitle>
                                <CardDescription>
                                    Clear structure, consistent patterns, and well-documented code perfect for AI-assisted development.
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card className="hover:shadow-lg transition-all duration-200">
                            <CardHeader>
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                    <Code2 className="w-6 h-6 text-primary" />
                                </div>
                                <CardTitle>Developer Ready</CardTitle>
                                <CardDescription>
                                    ESLint, Prettier, error boundaries, loading states, and toast notifications included.
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card className="hover:shadow-lg transition-all duration-200">
                            <CardHeader>
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                    <Rocket className="w-6 h-6 text-primary" />
                                </div>
                                <CardTitle>Deploy Anywhere</CardTitle>
                                <CardDescription>
                                    Optimized for Vercel, but works with Netlify, Railway, AWS Amplify, and any Node.js hosting.
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="py-16 px-4">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl font-bold mb-8">Built with Modern Tools</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            "Next.js 14",
                            "TypeScript",
                            "Tailwind CSS v4",
                            "Radix UI",
                            "shadcn/ui",
                            "Sonner",
                            "Lucide Icons",
                            "Plus Jakarta Sans",
                        ].map((tech) => (
                            <Badge key={tech} variant="secondary" className="py-2 px-4 text-sm">
                                {tech}
                            </Badge>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 bg-muted/30">
                <div className="container mx-auto text-center max-w-3xl">
                    <h2 className="text-3xl font-bold mb-4">Ready to Build Something Amazing?</h2>
                    <p className="text-muted-foreground text-lg mb-8">
                        This template provides everything you need to get started quickly while maintaining production-ready code
                        quality. Perfect for solo developers, teams, and AI-assisted workflows.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="px-8" asChild>
                            <a
                                href="https://github.com/thisisutkarsh/nextjs-minimal-ai-template"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Star className="w-4 h-4 mr-2" />
                                Star on GitHub
                            </a>
                        </Button>
                        <Button variant="outline" size="lg" className="px-8 bg-transparent" asChild>
                            <a
                                href="https://github.com/thisisutkarsh/nextjs-minimal-ai-template#readme"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Read Documentation
                            </a>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-border py-8 px-4">
                <div className="container mx-auto text-center text-muted-foreground">
                    <p>
                        Built with ❤️ for the developer community by
                        <a href="https://github.com/thisisutkarsh" className="text-primary hover:underline ml-1">
                            @thisisutkarsh
                        </a>
                    </p>
                </div>
            </footer>
        </div>
    )
}

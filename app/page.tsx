"use client";

import React, { useState } from "react";
import { toast } from "sonner";
import { LoadingSpinner } from "@/components/common/LoadingSpinner";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { copyToClipboard, generateId } from "@/lib/utils/common";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [generatedId, setGeneratedId] = useState("");

  const handleShowToast = () => {
    toast.success("Hello from Sonner!", {
      description: "This is a beautiful toast notification",
    });
  };

  const handleShowErrorToast = () => {
    toast.error("Something went wrong!", {
      description: "Please try again later",
    });
  };

  const handleShowInfoToast = () => {
    toast.info("Here's some information", {
      description: "This is an informational toast",
    });
  };

  const handleShowWarningToast = () => {
    toast.warning("Warning!", {
      description: "This is a warning message",
    });
  };

  const handleAsyncOperation = async () => {
    setIsLoading(true);
    try {
      // Simulate async operation
      await new Promise(resolve => setTimeout(resolve, 2000));
      toast.success("Async operation completed!", {
        description: "The operation was successful",
      });
    } catch (error) {
      toast.error("Async operation failed!", {
        description: "Something went wrong during the operation",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGenerateId = () => {
    const id = generateId();
    setGeneratedId(id);
    toast.success("ID Generated!", {
      description: "A new ID has been generated",
    });
  };

  const handleCopyId = async () => {
    if (generatedId) {
      const success = await copyToClipboard(generatedId);
      if (success) {
        toast.success("Copied to clipboard!", {
          description: "The ID has been copied to your clipboard",
        });
      } else {
        toast.error("Failed to copy!", {
          description: "Could not copy to clipboard",
        });
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 transition-colors">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <h2 className="text-xl font-semibold">Next.js Template</h2>
            <Badge variant="secondary">v1.0</Badge>
          </div>
          <ThemeToggle />
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <div className="space-y-4">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Next.js Minimal Template
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A modern, production-ready template with TypeScript, Tailwind CSS v4,
              and essential features for rapid development. Perfect for AI tools like v0.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              <Badge>Next.js 14</Badge>
              <Badge>TypeScript</Badge>
              <Badge>Tailwind CSS v4</Badge>
              <Badge>Radix UI</Badge>
              <Badge>Dark Mode</Badge>
              <Badge>AI-Friendly</Badge>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <Card>
              <CardHeader>
                <CardTitle>Toast Notifications</CardTitle>
                <CardDescription>Beautiful toast notifications with Sonner</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button onClick={handleShowToast} className="w-full" variant="default">
                  Success Toast
                </Button>
                <Button onClick={handleShowErrorToast} className="w-full" variant="destructive">
                  Error Toast
                </Button>
                <Button onClick={handleShowInfoToast} className="w-full" variant="secondary">
                  Info Toast
                </Button>
                <Button onClick={handleShowWarningToast} className="w-full" variant="outline">
                  Warning Toast
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Utility Functions</CardTitle>
                <CardDescription>Common utilities and async operations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  onClick={handleAsyncOperation}
                  disabled={isLoading}
                  className="w-full"
                  variant="secondary"
                >
                  {isLoading ? (
                    <>
                      <LoadingSpinner size="sm" className="mr-2" />
                      Loading...
                    </>
                  ) : (
                    "Async Operation"
                  )}
                </Button>

                <Button onClick={handleGenerateId} className="w-full" variant="outline">
                  Generate ID
                </Button>

                {generatedId && (
                  <div className="space-y-2 pt-2">
                    <p className="text-sm text-muted-foreground">Generated ID:</p>
                    <div className="flex items-center space-x-2">
                      <code className="bg-muted px-3 py-2 rounded text-sm flex-1 text-left font-mono">
                        {generatedId}
                      </code>
                      <Button onClick={handleCopyId} size="sm" variant="ghost">
                        Copy
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">🚀 Modern Stack</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Built with Next.js 14, TypeScript, and Tailwind CSS v4 for optimal performance and developer experience.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">🎨 Design System</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Includes a complete design system with Radix UI components, dark mode support, and CSS variables.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">🤖 AI-Friendly</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Optimized structure and documentation for AI tools like v0, Cursor, and other code generation tools.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t mt-16">
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-sm text-muted-foreground">
            Built with Next.js, TypeScript, Tailwind CSS v4, and Radix UI
          </p>
        </div>
      </footer>
    </div>
  );
}

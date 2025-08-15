import "@/assets/styles/globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import type { Metadata, Viewport } from "next";
import { Toaster } from "sonner";
import { ErrorBoundary } from "@/components/common/ErrorBoundary";

const inter = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-custom",
  display: "swap",
});

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_SITE_NAME || "Your Site Name",
  description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION || "Your site description",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: process.env.NEXT_PUBLIC_SITE_NAME || "Your Site Name",
    description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION || "Your site description",
    type: "website",
    siteName: process.env.NEXT_PUBLIC_SITE_NAME || "Your Site Name",
  },
  twitter: {
    card: "summary_large_image",
    title: process.env.NEXT_PUBLIC_SITE_NAME || "Your Site Name",
    description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION || "Your site description",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <ErrorBoundary>
          {children}
          <Toaster
            position="top-right"
            richColors
            closeButton
            duration={4000}
          />
        </ErrorBoundary>
      </body>
    </html>
  );
}

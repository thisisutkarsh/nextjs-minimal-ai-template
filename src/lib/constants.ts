/**
 * Application constants and configuration
 */

export const APP_CONFIG = {
    name: process.env.NEXT_PUBLIC_SITE_NAME || 'Your Site Name',
    description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION || 'Your site description',
    url: process.env.SITE_URL || 'https://example.com',
    version: '1.0.0',
} as const;

export const ROUTES = {
    home: '/',
    about: '/about',
    contact: '/contact',
} as const;

export const API_ENDPOINTS = {
    // Add your API endpoints here
    // example: '/api/users',
} as const;

export const TOAST_DURATION = {
    short: 2000,
    medium: 4000,
    long: 6000,
} as const;

export const BREAKPOINTS = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536,
} as const;

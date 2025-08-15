declare global {
  interface Window {
    Razorpay: any;
    gtag: (...args: any[]) => void;
  }
}

// Environment variables types
declare namespace NodeJS {
  interface ProcessEnv {
    SITE_URL: string;
    NEXT_PUBLIC_SITE_NAME: string;
    NEXT_PUBLIC_SITE_DESCRIPTION: string;
    NEXT_PUBLIC_GA_ID?: string;
    NEXT_PUBLIC_GTM_ID?: string;
    NODE_ENV: 'development' | 'production' | 'test';
  }
}



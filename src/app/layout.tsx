import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';

import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk'
});

export const metadata: Metadata = {
  title: 'Futuristic Portfolio | John Doe',
  description:
    'Step into the personal universe of John Doe. Explore skills, experience, and contact details within a futuristic, interactive landing page.',
  openGraph: {
    title: 'Futuristic Portfolio | John Doe',
    description:
      'Step into the personal universe of John Doe. Explore skills, experience, and contact details within a futuristic, interactive landing page.',
    url: 'https://agentic-31043c10.vercel.app',
    siteName: 'John Doe | Futurist',
    images: [
      {
        url: 'https://agentic-31043c10.vercel.app/og-image.png',
        width: 1200,
        height: 630
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Futuristic Portfolio | John Doe',
    description:
      'Step into the personal universe of John Doe. Explore skills, experience, and contact details within a futuristic, interactive landing page.',
    creator: '@johndoe'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body>{children}</body>
    </html>
  );
}

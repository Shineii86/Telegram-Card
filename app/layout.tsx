import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Telegram Card Generator',
  description:
    'Generate beautiful, customizable cards for Telegram profiles, channels, groups, and bots.',
  openGraph: {
    title: 'Telegram Card Generator',
    description:
      'Generate stunning, customizable cards for Telegram profiles, channels, groups, and bots.',
    images: [{ url: '/og.png', width: 700, height: 250 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Telegram Card Generator',
    description:
      'Generate stunning, customizable cards for Telegram profiles, channels, groups, and bots.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mallow Express | Fast local delivery in Mallow',
  description: 'Food delivery, essentials and parcel service for Mallow and the surrounding area.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

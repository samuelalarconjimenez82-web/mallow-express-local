import './globals.css';

export const metadata = {
  title: 'Mallow Express | Local delivery in Mallow',
  description: 'Fast local food delivery and essentials for Mallow, Ireland.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

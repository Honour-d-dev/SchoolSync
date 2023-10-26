import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'School Sync',
  description: 'An Aya Team 4 Project',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className=" font-OpenSans">{children}</body>
    </html>
  );
}

import './globals.css';
import type { Metadata } from 'next';
import ActiveSectionContextProvider from '@/context/active-section-context';
import { EdgeStoreProvider } from '@/lib/edgestore';

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
      <body className=" font-OpenSans scroll-smooth overflow-x-hidden">
        <EdgeStoreProvider>
          <ActiveSectionContextProvider>
            {children}
          </ActiveSectionContextProvider>
        </EdgeStoreProvider>
      </body>
    </html>
  );
}

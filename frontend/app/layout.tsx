import "./globals.css";
import type { Metadata } from "next";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { EdgeStoreProvider } from "@/lib/edgestore";
import WalletProvider from "@/context/walletContext";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "School Sync",
  description: "An Aya Team 4 Project",
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
          <WalletProvider>
            <ActiveSectionContextProvider>
              {children}
            </ActiveSectionContextProvider>
          </WalletProvider>
        </EdgeStoreProvider>
        <Toaster />
      </body>
    </html>
  );
}

import "./globals.css";
import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import { Providers } from "@/shared/components/shared";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"]
});

export const metadata: Metadata = {
  title: "Cloudrage | Main",
  description: "Cloud Storage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={spaceMono.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ADA — Advanced Design Assistant",
  description: "AI assistant specializing in STEM fields",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full">{children}</body>
    </html>
  );
}

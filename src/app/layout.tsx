import type { Metadata } from "next";
import { Changa } from "next/font/google";
import "./globals.css";

const changa = Changa({
  subsets: ["arabic"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-changa",
});

export const metadata: Metadata = {
  title: "بيت الشعر - نواكشوط",
  description: "مؤسسة ثقافية وطنية",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${changa.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}

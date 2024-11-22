import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amda Game Store",
  description: "Amda Game Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
        ${poppins.className}
        antialiased
        bg-gradient-to-b from-zinc-50 from-70% to-zinc-100 to-100% min-h-full bg-fixed
        `}
      >
        {children}
      </body>
    </html>
  );
}

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
        antialiased text-zinc-600 bg-gradient-to-b from-zinc-50 from-70% to-zinc-200 to-100% min-h-full bg-fixed`}
      >
        {children}
        <footer>
          <div className="flex items-center justify-center h-20 w-full bg-zinc-500 text-white">
            <p>© 2024 Amda Game Store. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}

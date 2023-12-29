"use client";

import "./globals.css";
import { Poppins } from "next/font/google";
import { Josefin_Sans } from "next/font/google";
import { ThemeProvider } from "@/Providers/ThemeProvider";
import ReduxProvider from "@/Providers/ReduxProvider";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-Poppins",
});

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-Josefin",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${josefin.variable} bg-background dark:bg-background-dark duration-300`}
      >
        <ReduxProvider>
          <SessionProvider>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              {children}
              <Toaster position="bottom-right" reverseOrder={false} />
            </ThemeProvider>
          </SessionProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}

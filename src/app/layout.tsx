import type {Metadata} from "next";
import {Montserrat, Marcellus} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import Transition from "@/components/Transition";
import CursorProvider from "@/components/CursorProvider";

const marcellus = Marcellus({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-marcellus",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Salon Website",
  description: "Salon Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-screen">
      <body
        className={`${marcellus.variable} ${montserrat.variable} overflow-x-hidden`}
      >
        <CursorProvider>
          <Transition />
          <Header />
          <PageTransition>{children}</PageTransition>
        </CursorProvider>
      </body>
    </html>
  );
}

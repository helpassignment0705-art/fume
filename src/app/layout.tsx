import type { Metadata } from "next";
import { Open_Sans, Karla, Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const karla = Karla({
  subsets: ["latin"],
  variable: "--font-karla",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Fume | Top Coworking & Shared Office Spaces in India",
  description:
    "Flexible workspace solutions for every stage of your business. Built across India for productivity, convenience, and community.",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} ${karla.variable} ${montserrat.variable} font-sans antialiased bg-background`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

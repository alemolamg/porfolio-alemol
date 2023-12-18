import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.scss";
import NavBar from "@/components/navbar/navBar";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alejandro Molero Gómez",
  description: "Developer & IT specialist",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      {/* <NavBar/> */}
      <body>{children}</body>
    </html>
  );
}

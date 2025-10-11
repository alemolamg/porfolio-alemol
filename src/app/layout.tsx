import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.scss";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alejandro Molero Gómez",
  description: "Developer & IT specialist",
  metadataBase: new URL("https://alemolamg.com"), // <-- ajusta si tienes dominio
  applicationName: "Portfolio Alejandro Molero",
  openGraph: {
    title: "Alejandro Molero Gómez",
    description: "Developer & IT specialist",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alejandro Molero Gómez",
    description: "Developer & IT specialist",
  },
  // Ayuda a que el sistema use tu esquema de color CSS
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0c0f" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        {/* Landmarks semánticos */}
        <a href="#main" className="skip-link">Saltar al contenido</a>
        {children}
        {/* Analytics deben ir en el body */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import "@/styles/globals.scss";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Alejandro Molero Gómez | Responsable de IT y automatización",
  description:
    "Portfolio profesional de Alejandro Molero Gómez, Responsable de IT en Grupoasesores, con foco en desarrollo, automatización, integración de sistemas e inteligencia artificial.",
  metadataBase: new URL("https://alemolamg.com"), // <-- ajusta si tienes dominio
  applicationName: "Portfolio Alejandro Molero",
  openGraph: {
    title: "Alejandro Molero Gómez | Responsable de IT y automatización",
    description:
      "Portfolio profesional con enfoque en desarrollo full-stack, orquestación de procesos e inteligencia artificial aplicada.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alejandro Molero Gómez | Responsable de IT y automatización",
    description:
      "Portfolio profesional con foco en sistemas, automatización e IA aplicada.",
  },
  // Ayuda a que el sistema use tu esquema de color CSS
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
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
      <body>
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

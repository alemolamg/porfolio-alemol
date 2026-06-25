import type { Metadata } from "next";
import "@/styles/globals.scss";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { headers } from "next/headers";
import { defaultLocale, isLocale } from "@/i18n/locales";
import { getSiteCopy } from "@/i18n/siteCopy";

export const metadata: Metadata = {
  metadataBase: new URL("https://alemolamg.com"), // <-- ajusta si tienes dominio
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

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const requestHeaders = await headers();
  const localeHeader = requestHeaders.get("x-locale") ?? defaultLocale;
  const locale = isLocale(localeHeader) ? localeHeader : defaultLocale;
  const copy = getSiteCopy(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        {/* Landmarks semánticos */}
        <a href="#main" className="skip-link">{copy.common.skipToContent}</a>
        {children}
        {/* Analytics deben ir en el body */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Presentation from "@/components/presentation";
import ContainerDescrip from "../../components/descriptComponent/containerDescript";
import SkillsContainer from "@/components/technologies/skillsContainer";
import Footer from "@/components/footer/footer";
import { defaultLocale, isLocale, type Locale } from "@/i18n/locales";
import { getSiteCopy } from "@/i18n/siteCopy";

const metadataBase = new URL("https://alemolamg.com");

function resolvePageLocale(value: string): Locale {
  return isLocale(value) ? value : defaultLocale;
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const resolvedLocale = resolvePageLocale(locale);
  const copy = getSiteCopy(resolvedLocale);

  return {
    title: copy.metadata.title,
    description: copy.metadata.description,
    metadataBase,
    applicationName: copy.metadata.applicationName,
    alternates: {
      canonical: `/${resolvedLocale}`,
      languages: {
        es: "/es",
        en: "/en",
      },
    },
    openGraph: {
      title: copy.metadata.openGraphTitle,
      description: copy.metadata.openGraphDescription,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: copy.metadata.twitterTitle,
      description: copy.metadata.twitterDescription,
    },
  };
}

export default async function LocaleHome({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const copy = getSiteCopy(locale);

  return (
    <main id="main">
      <Presentation copy={copy.presentation} navigation={copy.navigation} locale={locale} />
      <ContainerDescrip copy={copy.about} />
      <SkillsContainer copy={copy.skills} />
      <Footer copy={copy.footer} common={copy.common} />
    </main>
  );
}
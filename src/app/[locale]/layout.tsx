import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import '../globals.css';
import Navbar from '@/components/Navbar';
import { Schibsted_Grotesk, Vollkorn } from 'next/font/google';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'misia.center',
  description: 'Translation, Audio Description, Subtitling, Editing',
};

const schibsted = Schibsted_Grotesk({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-schibsted',
});

const vollkorn = Vollkorn({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-vollkorn',
});


const locales = ['en', 'pl', 'es', 'nl'];

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className={`${schibsted.variable} ${vollkorn.variable}`}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Navbar />          {/* ← add this */}
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
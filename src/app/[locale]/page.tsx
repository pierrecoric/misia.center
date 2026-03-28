import { Suspense } from 'react';
import { getTranslations } from 'next-intl/server';
import { redirect } from 'next/navigation';
import ServiceSection from '@/components/ServiceSection';
import ContactForm from '@/components/ContactForm';


async function getServiceContent(locale: string) {
  const map: Record<string, () => Promise<{ serviceContent: import('@/data/services.en').ServiceContent }>> = {
    en: () => import('@/data/services.en'),
    pl: () => import('@/data/services.pl'),
    es: () => import('@/data/services.es'),
    nl: () => import('@/data/services.nl'),
  };

  const loader = map[locale] ?? map['en'];
  const module = await loader();
  return module.serviceContent;
}

export default async function HomePage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ service?: string }>;
}) {
  const { locale } = await params;
  const { service } = await searchParams;

  if (!service) {
    redirect(`/${locale}?service=translation`);
  }

  const t = await getTranslations();
  const content = await getServiceContent(locale);

  const services = {
    translation: t('services.translation'),
    audioDescription: t('services.audioDescription'),
    subtitling: t('services.subtitling'),
    editing: t('services.editing'),
  };


  return (
    <main>
      <Suspense>
        <ServiceSection services={services} content={content} />
      </Suspense>
      <ContactForm />
    </main>
  );
}
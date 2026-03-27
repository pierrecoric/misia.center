import { Suspense } from 'react';
import { getTranslations } from 'next-intl/server';
import { redirect } from 'next/navigation';
import ServiceSection from '@/components/ServiceSection';
import ContactForm from '@/components/ContactForm';

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

  const services = {
    translation: t('services.translation'),
    audioDescription: t('services.audioDescription'),
    subtitling: t('services.subtitling'),
    editing: t('services.editing'),
  };

  const content = {
    translation: t('serviceContent.translation'),
    audioDescription: t('serviceContent.audioDescription'),
    subtitling: t('serviceContent.subtitling'),
    editing: t('serviceContent.editing'),
  };

  const blurbs = {
    translation: t('serviceBlurbs.translation'),
    audioDescription: t('serviceBlurbs.audioDescription'),
    subtitling: t('serviceBlurbs.subtitling'),
    editing: t('serviceBlurbs.editing'),
  };

  return (
    <main>
      <Suspense>
        <ServiceSection services={services} content={content} blurbs={blurbs} />
      </Suspense>
      <ContactForm />
    </main>
  );
}
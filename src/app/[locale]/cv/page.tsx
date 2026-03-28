import CVSection from '@/components/CVSection';
import styles from './cv.module.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Misia Halwa - CV',
};

async function getCVData(locale: string) {
  const cvMap: Record<string, () => Promise<{ cv: import('@/data/cv.en').CVSection[] }>> = {
    en: () => import('@/data/cv.en'),
    pl: () => import('@/data/cv.pl'),
    es: () => import('@/data/cv.es'),
    nl: () => import('@/data/cv.nl'),
  };

  const loader = cvMap[locale] ?? cvMap['en'];
  const module = await loader();
  return module.cv;
}

export default async function CVPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const sections = await getCVData(locale);

  return (
    <main className={styles.main}>
      {sections.map((section, index) => (
        <CVSection key={index} {...section} />
      ))}
    </main>
  );
}
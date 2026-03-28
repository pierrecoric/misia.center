'use client';

import { useRef } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import styles from './ServiceSection.module.css';
import { ServiceParagraph } from '@/data/services.en';


type Service = 'translation' | 'audioDescription' | 'subtitling' | 'editing';


type Props = {
  services: Record<Service, string>;
  content: Record<Service, ServiceParagraph[]>;
};



function smoothScrollTo(target: number, duration: number) {
  const start = window.scrollY;
  const distance = target - start;
  let startTime: number | null = null;

  function step(timestamp: number) {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = progress < 0.5
      ? 4 * progress ** 3
      : 1 - (-2 * progress + 2) ** 3 / 2;
    window.scrollTo(0, start + distance * ease);
    if (elapsed < duration) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

const validServices: Service[] = ['translation', 'audioDescription', 'subtitling', 'editing'];

export default function ServiceSection({ services, content }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const contentRef = useRef<HTMLDivElement>(null);

  const selectedParam = searchParams.get('service');
  const selected = validServices.includes(selectedParam as Service)
    ? (selectedParam as Service)
    : null;

  function handleSelect(key: Service) {
    const params = new URLSearchParams(searchParams.toString());
    params.set('service', key);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });

    setTimeout(() => {
      const el = contentRef.current;
      if (!el) return;
      const navbarHeight = 72;
      const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight;
      smoothScrollTo(top, 900);
    }, 50);
  }

  return (
    <section>
      <div className={styles.grid}>
        {(Object.keys(services) as Service[]).map((key) => (
          <button
            key={key}
            className={`${styles.serviceButton} ${selected === key ? styles.active : ''}`}
            onClick={() => handleSelect(key)}
          >
            <div className={styles.card}>
              {services[key]}
            </div>
          </button>
        ))}
      </div>

      {selected && (
        <div className={styles.contentWrapper}>
          <div ref={contentRef} className={styles.content}>
            <h2>{services[selected]}</h2>
            {content[selected].map((paragraph, pIndex) => (
              <p key={pIndex} className={styles.paragraph}>
                {paragraph.map((segment, sIndex) => {
                  if (segment.type === 'heading') {
                    return <span key={sIndex} className={styles.segmentHeading}>{segment.content}</span>;
                  }
                  if (segment.type === 'bold') {
                    return <span key={sIndex} className={styles.segmentBold}>{segment.content}</span>;
                  }
                  return <span key={sIndex}>{segment.content}</span>;
                })}
              </p>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
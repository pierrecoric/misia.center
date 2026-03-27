'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';
import styles from './Navbar.module.css';

const languages = [
  { code: 'en', label: 'en — English' },
  { code: 'nl', label: 'nl — Nederlands' },
  { code: 'es', label: 'es — Español' },
  { code: 'pl', label: 'pl — Polski' },
];

export default function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  function switchLanguage(newLocale: string) {
  const segments = pathname.split('/');
  segments[1] = newLocale;
  const search = window.location.search; // preserves ?service=translation
  router.replace(segments.join('/') + search, { scroll: false });
  setIsOpen(false);
}

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

  return (
    <nav className={styles.navbar}>
      <button
  className={styles.name}
  onClick={() => {
    if (pathname === `/${locale}`) {
      smoothScrollTo(0, 400);
    } else {
      router.push(`/${locale}`);
    }
  }}
>
  Misia Halwa
</button>

      <div className={styles.rightSection}>
        <div className={styles.navLinks}>
          <a href={`/${locale}/cv`}>{t('cv')}</a>
          <button
            className={styles.contactLink}
            onClick={() => {
            const el = document.getElementById('contact');
            if (!el) return;
            const navbarHeight = 72;
            const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight;
            smoothScrollTo(top, 800);
          }}
        >
          {t('contact')}
        </button>
        </div>

        <div className={styles.languageSwitcher}>
          <button
            className={styles.languageButton}
            onClick={() => setIsOpen(!isOpen)}
          >
            {locale.toLowerCase()} ▾
          </button>

          {isOpen && (
            <div className={styles.dropdown}>
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  className={`${styles.dropdownItem} ${locale === lang.code ? styles.active : ''}`}
                  onClick={() => switchLanguage(lang.code)}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
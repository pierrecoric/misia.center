'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const t = useTranslations('contact');

  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // No backend yet — just show confirmation for now
    setSubmitted(true);
  }

  return (
    <section className={styles.section} id="contact">
      <h2 className={styles.title}>{t('title')}</h2>

      {submitted ? (
        <p className={styles.confirmation}>{t('sent')}</p>
      ) : (
        <div className={styles.form}>
          <div className={styles.field}>
            <label className={styles.label}>{t('name')}</label>
            <input
              className={styles.input}
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={t('name')}
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label}>{t('surname')}</label>
            <input
              className={styles.input}
              type="text"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              placeholder={t('surname')}
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label}>{t('email')}</label>
            <input
              className={styles.input}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t('email')}
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label}>{t('message')}</label>
            <textarea
              className={styles.textarea}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={t('message')}
              rows={5}
            />
          </div>

          <button className={styles.button} onClick={handleSubmit}>
            {t('submit')}
          </button>
        </div>
      )}
    </section>
  );
}
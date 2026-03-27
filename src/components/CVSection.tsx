import styles from './CVSection.module.css';
import CVItemComponent from './CVItem';
import { CVSection as CVSectionType } from '@/data/cv.en';

export default function CVSection({ title, items }: CVSectionType) {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.items}>
        {items.map((item, index) => (
          <CVItemComponent key={index} {...item} />
        ))}
      </div>
    </section>
  );
}
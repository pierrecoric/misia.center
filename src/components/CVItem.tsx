import styles from './CVItem.module.css';
import { CVItem as CVItemType, CVLink } from '@/data/cv.en';

function renderField(field: string | CVLink) {
  if (typeof field === 'string') {
    return <span>{field}</span>;
  }
  return <a href={field.url} target="_blank" rel="noopener noreferrer">{field.text}</a>;
}

export default function CVItem({ title, date, place, description }: CVItemType) {
  return (
    <div className={styles.item}>
      <div className={styles.meta}>
        <span className={styles.title}>{renderField(title)}</span>
        <span className={styles.date}>{date}</span>
        <span className={styles.place}>{renderField(place)}</span>
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
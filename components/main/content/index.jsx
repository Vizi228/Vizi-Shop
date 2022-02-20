import styles from '../../../styles/main/content.module.scss';
import ContentBlock from './block';

export default function Content() {
  const items = [1, 2, 3, 4, 5, 6];
  return (
    <div className={styles.content}>
      <h2>Новинки</h2>
      <ul>
        {items.map((obj) => (
          <ContentBlock key={obj} />
        ))}
      </ul>
      <button className={styles.button}>Смотреть еще</button>
    </div>
  );
}

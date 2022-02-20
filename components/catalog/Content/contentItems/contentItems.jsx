import styles from '../../../../styles/catalog/catalogContent.module.scss';
import ContentItemBlock from './contentItemBlock';

export default function ContentItems({ items }) {
  return (
    <div className={styles.content_items}>
      {items && items.map((obj) => <ContentItemBlock key={obj.id} />)}
    </div>
  );
}

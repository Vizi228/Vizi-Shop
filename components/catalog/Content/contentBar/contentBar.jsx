import styles from '../../../../styles/catalog/catalogContent.module.scss';
import ContentBarBlock from './Block';
export default function ContentBar({ items }) {
  return (
    <div className={styles.filter_bar}>
      {items && items.map((obj) => <ContentBarBlock key={obj.id} {...obj} />)}
    </div>
  );
}

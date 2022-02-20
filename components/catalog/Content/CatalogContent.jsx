import styles from '../../../styles/catalog/catalogContent.module.scss';
import ContentBar from './contentBar/contentBar';
import ContentBarBlock from './contentBar/Block';
import ContentItems from './contentItems/contentItems';

export default function CatalogContent({ items, cards }) {
  return (
    <div className={styles.container}>
      <ContentBar items={items} />
      <ContentItems items={cards} />
    </div>
  );
}

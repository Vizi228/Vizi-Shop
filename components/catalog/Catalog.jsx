import Navigation from './navigation/navigation';
import styles from '../../styles/catalog/catalog.module.scss';
import CatalogContent from './Content/CatalogContent';

export default function CatalogMain() {
  let sorts = [
    { id: 0, name: 'За рейтингом' },
    { id: 1, name: 'Сначало дешевые' },
    { id: 2, name: 'Сначало дорогие' },
    { id: 3, name: 'Популярные' },
  ];
  let filtres = [
    {
      id: 0,
      name: 'Жанры',
      objects: [
        { id: 1, name: 'Выживание' },
        { id: 2, name: 'Приключения' },
        { id: 3, name: 'Вестерны' },
      ],
    },
    {
      id: 1,
      name: 'Издатели',
      objects: [
        { id: 1, name: 'UBISOFT' },
        { id: 2, name: 'Rockstar Games' },
        { id: 3, name: 'Electronic Arts' },
      ],
    },
    {
      id: 2,
      name: 'Платформа',
      objects: [
        { id: 1, name: 'PC' },
        { id: 2, name: 'PS4' },
        { id: 3, name: 'XBOX' },
      ],
    },
  ];
  let cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <div className={styles.container}>
      <Navigation styles={styles} objects={sorts} />
      <CatalogContent items={filtres} cards={cards} />
    </div>
  );
}

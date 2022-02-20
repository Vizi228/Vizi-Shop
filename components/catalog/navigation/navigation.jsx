import classNames from 'classnames';
import SortItem from './sort-item';
import { useEffect, useRef, useState } from 'react';
import styles from '../../../styles/catalog/catalogNavigation.module.scss';

export default function Navigation({ objects }) {
  const [activeItem, setActiveItem] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const onHandleSort = () => {
    setIsVisible(!isVisible);
  };
  const onHandleItem = (id) => {
    setActiveItem(id);
    setIsVisible(false);
  };

  const sortRef = useRef();
  useEffect(() => {
    document.body.addEventListener('click', (e) => {
      if (!e.path.includes(sortRef.current)) {
        setIsVisible(false);
      }
    });
  }, []);

  return (
    <div className={styles.navigation}>
      <form className={styles.search}>
        <input type="search" name="filter" placeholder="Поиск..." autoComplete="off" />
        <button type="submit">
          <img src="/icon-search.png" alt="search" />
        </button>
      </form>

      <div className={styles.sort_bar} ref={sortRef} onClick={() => onHandleSort()}>
        <span>{objects[activeItem].name}</span>
        <div className={classNames(styles.sort_items, `${isVisible ? styles.active : ''}`)}>
          {objects.map((obj) => (
            <SortItem styles={styles} activeId={activeItem} onHandleItem={onHandleItem} {...obj} />
          ))}
        </div>
      </div>
    </div>
  );
}

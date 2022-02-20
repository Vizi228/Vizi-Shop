import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import styles from '../../../../styles/catalog/catalogContent.module.scss';

export default function ContentBarBlock({ name, objects }) {
  const [isVisible, setIsVisible] = useState(false);
  const [currentItem, setCurrentItem] = useState(1);

  const onHadleBlock = () => {
    setIsVisible(!isVisible);
  };
  const onHadleItem = (id) => {
    setCurrentItem(id);
  };
  const filterRef = useRef();
  const objectsRef = useRef();
  useEffect(() => {
    document.body.addEventListener('click', (e) => {
      if (!e.path.includes(filterRef.current)) {
        setIsVisible(false);
      }
    });
  }, []);

  return (
    <div className={styles.filter_block} onClick={() => onHadleBlock()}>
      <h1 ref={filterRef}>{name}</h1>
      <div className={classNames(styles.filter_items, `${isVisible ? styles.active : ''}`)}>
        {objects.map((obj) => (
          <div
            className={classNames(
              styles.filter_item,
              `${obj.id === currentItem ? styles.active : ''}`,
            )}
            onClick={() => onHadleItem(obj.id)}>
            {obj.name}
          </div>
        ))}
      </div>
    </div>
  );
}

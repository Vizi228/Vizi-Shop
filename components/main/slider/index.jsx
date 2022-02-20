import { useEffect, useState } from 'react';
import styles from '../../../styles/main/slider.module.scss';
import Dots from './dots';
import Slide from './slide';

export default function Slider() {
  const items = [1, 2, 3, 4, 5, 6];
  const [currentSlide, setCurrentSlide] = useState(1);
  const [slideCoor, setSlideCoor] = useState(0);
  const onHandleDot = (id) => {
    setCurrentSlide(id);
    setSlideCoor(id * -490 + 490);
  };

  return (
    <div className={styles.slider}>
      <div className={styles.wrapper}>
        {items.map((obj) => (
          <Slide key={obj} id={obj} currentSlide={currentSlide} slideCoor={slideCoor} />
        ))}
        <ul className={styles.dots}>
          <Dots onHandleDot={onHandleDot} items={items} currentSlide={currentSlide} />
        </ul>
      </div>
    </div>
  );
}

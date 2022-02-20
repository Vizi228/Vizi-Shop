import styles from '../../../styles/main/slider.module.scss';

export default function Slide({ currentSlide, id, slideCoor }) {
  const slideStyle = {
    transform: `translateX(${slideCoor}px)`,
  };
  return (
    <div className={currentSlide === id ? 'slide_main active' : 'slide_main'} style={slideStyle}>
      <img src="/slide-img1.jpg" alt="" />
      <div className={styles.info}>
        <p>
          Цена: 1499р. <span>1999р.</span>
        </p>
        <button>Подробнее</button>
      </div>
    </div>
  );
}

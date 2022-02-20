import styles from '../../../styles/main/content.module.scss';

export default function ContentBlock() {
  return (
    <div className={styles.block}>
      <img src="/main-img1.jpg" alt="main-image" />
      <div className={styles.main_price}>
        <p>
          Цена: <span>1499 р.</span>
        </p>
        <button>Подробнее</button>
      </div>
    </div>
  );
}

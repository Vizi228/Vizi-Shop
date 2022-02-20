import styles from '../../styles/main/main.module.scss';
import Content from './content';
import Slider from './slider';

export default function Main() {
  return (
    <div className={styles.container}>
      <Slider />
      <img src="/main-background.jpg" alt="" />
      <div className={styles.main__text}>
        <h1>KEY-SHOP</h1>
        <p>Фаворит в выборе магазина ключей!</p>
      </div>
      <Content />
    </div>
  );
}

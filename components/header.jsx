import styles from '../styles/header.module.scss';
import Link from 'next/link';
import { useState } from 'react';
import classNames from 'classnames';

export default function Header() {
  const [isBurger, setIsBurger] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link href="/">
          <img src="/logo.png" alt="" />
        </Link>
      </div>

      <div className={classNames(styles.content, `${isBurger ? '' : styles.active}`)}>
        <ul>
          <Link href="/catalog">
            <li>Каталог игр</li>
          </Link>
          <Link href="/about">
            <li>Как купить</li>
          </Link>
          <Link href="/guarantees">
            <li>Гарантии</li>
          </Link>
        </ul>
        <div className={styles.login}>
          <p>Предложения</p>
          <img src="/profile-logo.svg" alt="" />
        </div>
      </div>

      <div className={styles.burger} onClick={() => setIsBurger(!isBurger)}>
        {isBurger ? <img src="/burger-menu.svg" /> : <img src="/close-burger.png" />}
      </div>
    </div>
  );
}

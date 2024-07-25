'use client';

import styles from './SplashLoader.module.css'; // Import the CSS module

const SplashLoader = () => {
  return (
    <div className={styles.mainLoadingConatiner}>
      <div>
        <div className={styles.boxOfStar1}>
          <div className={`${styles.star} ${styles.starPosition1}`}></div>
          <div className={`${styles.star} ${styles.starPosition2}`}></div>
          <div className={`${styles.star} ${styles.starPosition3}`}></div>
          <div className={`${styles.star} ${styles.starPosition4}`}></div>
          <div className={`${styles.star} ${styles.starPosition5}`}></div>
          <div className={`${styles.star} ${styles.starPosition6}`}></div>
          <div className={`${styles.star} ${styles.starPosition7}`}></div>
        </div>
        <div className={styles.boxOfStar2}>
          <div className={`${styles.star} ${styles.starPosition1}`}></div>
          <div className={`${styles.star} ${styles.starPosition2}`}></div>
          <div className={`${styles.star} ${styles.starPosition3}`}></div>
          <div className={`${styles.star} ${styles.starPosition4}`}></div>
          <div className={`${styles.star} ${styles.starPosition5}`}></div>
          <div className={`${styles.star} ${styles.starPosition6}`}></div>
          <div className={`${styles.star} ${styles.starPosition7}`}></div>
        </div>
        <div className={styles.boxOfStar3}>
          <div className={`${styles.star} ${styles.starPosition1}`}></div>
          <div className={`${styles.star} ${styles.starPosition2}`}></div>
          <div className={`${styles.star} ${styles.starPosition3}`}></div>
          <div className={`${styles.star} ${styles.starPosition4}`}></div>
          <div className={`${styles.star} ${styles.starPosition5}`}></div>
          <div className={`${styles.star} ${styles.starPosition6}`}></div>
          <div className={`${styles.star} ${styles.starPosition7}`}></div>
        </div>
        <div className={styles.boxOfStar4}>
          <div className={`${styles.star} ${styles.starPosition1}`}></div>
          <div className={`${styles.star} ${styles.starPosition2}`}></div>
          <div className={`${styles.star} ${styles.starPosition3}`}></div>
          <div className={`${styles.star} ${styles.starPosition4}`}></div>
          <div className={`${styles.star} ${styles.starPosition5}`}></div>
          <div className={`${styles.star} ${styles.starPosition6}`}></div>
          <div className={`${styles.star} ${styles.starPosition7}`}></div>
        </div>
        <div data-js="astro" className={styles.astronaut}>
          <div className={styles.head}></div>
          <div className={`${styles.arm} ${styles.armLeft}`}></div>
          <div className={`${styles.arm} ${styles.armRight}`}></div>
          <div className={styles.body}>
            <div className={styles.panel}></div>
          </div>
          <div className={`${styles.leg} ${styles.legLeft}`}></div>
          <div className={`${styles.leg} ${styles.legRight}`}></div>
          <div className={styles.schoolbag}></div>
        </div>
      </div>
      <div className={styles.loadingConatiner}>
        <div data-glitch="Loading..." className={styles.glitch}>
          Loading...
        </div>
      </div>
    </div>
  );
};

export default SplashLoader;

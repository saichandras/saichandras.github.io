'use client';

import styles from './SplashLoader.module.css';

const generateStars = () => {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  let numStars;
  let minStarSize;
  let maxStarSize;

  if (screenWidth < 768) {
    // Small screens (e.g., mobile)
    numStars = 100;
    minStarSize = 1;
    maxStarSize = 8;
  } else if (screenWidth < 1200) {
    // Medium screens (e.g., tablets)
    numStars = 200;
    minStarSize = 2;
    maxStarSize = 8;
  } else {
    // Large screens (e.g., desktops)
    numStars = 300;
    minStarSize = 3;
    maxStarSize = 12;
  }

  const stars = [];
  for (let i = 0; i < numStars; i++) {
    const size = Math.random() * (maxStarSize - minStarSize) + minStarSize;
    const left = Math.random() * 100; // Random left position
    const delay = Math.random() * -10; // Random delay to stagger star appearance
    const duration = Math.random() * 5 + 5; // Random duration between 5s and 10s
    stars.push(
      <div
        key={i}
        className={styles.star}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          left: `${left}vw`,
          animationDelay: `${delay}s`,
          animationDuration: `${duration}s`,
        }}
      />,
    );
  }
  return stars;
};

const SplashLoader = () => {
  return (
    <div className={styles.mainLoadingConatiner}>
      <div className={styles.boxOfStar}>{generateStars()}</div>
      <div className={styles.astronaut}>
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
      <div className={styles.loadingConatiner}>
        <div data-glitch="Loading..." className={styles.glitch}>
          Loading...
        </div>
      </div>
    </div>
  );
};

export default SplashLoader;

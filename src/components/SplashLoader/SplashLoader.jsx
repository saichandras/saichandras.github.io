'use client';

import { useEffect, useState, useMemo } from 'react';
import styles from './SplashLoader.module.css'; // Import the CSS module

const generateStars = (numStars, minStarSize, maxStarSize) => {
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
  const numStars = 200;
  const minStarSize = 2;
  const maxStarSize = 8;

  const stars = useMemo(() => generateStars(numStars, minStarSize, maxStarSize), []);

  return (
    <div className={styles.mainLoadingConatiner}>
      <div className={styles.backgroundImage}></div> {/* Background Image */}
      <div className={styles.boxOfStar}>{stars}</div>
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

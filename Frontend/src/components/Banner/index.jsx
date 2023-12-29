import React, { useState, useEffect } from 'react';
import styles from './Banner.module.css';

const Banner = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const updateSlider = () => {
    const slider = document.querySelector(`.${styles.slider}`);
    slider.style.transform = `translateX(-${currentIndex * 55}%)`;
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    updateSlider();
  }, [currentIndex]);

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.contSlider}>
        <div className={styles.slider}>
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Imagem ${index + 1}`} />
          ))}
        </div>
        
      </div>
      <div className={styles.sliderControls}>
        <div className={styles.prevSlide} onClick={prevSlide}>&#10094;</div>
        <div className={styles.nextSlide} onClick={nextSlide}>&#10095;</div>
      </div>
      
      <div className={styles.slideIndicators}>
        {images.map((_, index) => (
          <div
            key={index}
            className={`${styles.indicator} ${index === currentIndex ? styles.active : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Banner;

import React, { useState } from 'react';
import styles from './Gallery.module.css';

export default function Gallery() {
  const arrGallery = [
    'https://on-desktop.com/wps/2017Nature___Rivers_and_lakes_Glacial_Moraine_Lake__Canada_113006_.jpg',
    'https://get.wallhere.com/photo/landscape-mountains-lake-nature-reflection-grass-sky-river-national-park-valley-wilderness-Alps-tree-autumn-leaf-mountain-season-tarn-loch-mountainous-landforms-mountain-range-590185.jpg',
    'https://getwallpapers.com/wallpaper/full/2/9/7/1121181-free-download-baby-kitten-wallpaper-2880x1800.jpg'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImg = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? arrGallery.length - 1 : prevIndex - 1));
  };

  const nextImg = () => {
    setCurrentIndex((prevIndex) => (prevIndex === arrGallery.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className={styles.slider}>
      <button onClick={prevImg}>Prev</button>
      <div className={styles.galleryCard}>
        <img src={arrGallery[currentIndex]} alt="Gallery Image" />
      </div>
      <button onClick={nextImg}>Next</button>
    </div>
  );
}

import { useState, useEffect } from "react";
import { sliderImages } from "../utils/sliderImages";

const useIntroBanner = (autoSlideInterval = 5000, swipeThreshold = 50) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
      );
    }, autoSlideInterval);

    return () => clearInterval(interval);
  }, [autoSlideInterval]);

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;

    if (distance > swipeThreshold) {
      setCurrentIndex((prevIndex) =>
        prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
      );
    } else if (distance < -swipeThreshold) {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? sliderImages.length - 1 : prevIndex - 1
      );
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return {
    currentIndex,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    goToSlide,
  };
};

export default useIntroBanner;

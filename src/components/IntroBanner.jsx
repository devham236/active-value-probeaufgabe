import shopwareBanner from "../assets/images/shopware_banner.png";
import { sliderImages } from "../utils/sliderImages";
import useIntroBanner from "../hooks/useIntroBanner";
import "../styles/stylesheets/introbanner.scss";

const IntroBanner = () => {
  const {
    currentIndex,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    goToSlide,
  } = useIntroBanner(5000, 50);

  return (
    <section className="intro-banner">
      <div className="slider-wrapper">
        {sliderImages.map((img, index) => (
          <div
            key={img.id}
            className={
              index === currentIndex
                ? "slider-container slider-container-active"
                : "slider-container"
            }
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <img src={shopwareBanner} alt="shopware banner" />
          </div>
        ))}
      </div>
      <div className="pagination">
        {sliderImages.map((img, index) => (
          <span
            onClick={() => goToSlide(index)}
            key={img.id}
            className="material-symbols-rounded pagi-dot"
          >
            {index == currentIndex
              ? "radio_button_checked"
              : "radio_button_unchecked"}
          </span>
        ))}
      </div>
    </section>
  );
};

export default IntroBanner;

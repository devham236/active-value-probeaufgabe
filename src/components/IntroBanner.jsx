import React from "react";
import shopwareBanner from "../assets/images/shopware_banner.png";

const IntroBanner = () => {
  return (
    <section className="intro-banner">
      <div className="intro-banner-container">
        <img src={shopwareBanner} alt="shopware banner" />
      </div>
    </section>
  );
};

export default IntroBanner;

import React from "react";

import iphone from "../../assets/iphone-14-pro.webp";
import mac from "../../assets/mac-system-cut.jfif";
import HeroSection from "./HeroSection";
import FeaturedProduct from "./FeaturedProduct";

const HomePage = () => {
  return (
    <div>
    <HeroSection
      title="Buy iphone 14 pro"
      subtitle="Experience the power of latest iphone 14 with our most pro camera ever"
      link="/"
      image={iphone}
    />
    <FeaturedProduct/>
    <HeroSection
      title="Build the ultimate setup"
      subtitle="You ca add studio display and colour-matched Magic accessories to your bag after configure your mac mini"
      link="/"
      image={mac}
    />
    </div>
  );
};

export default HomePage;

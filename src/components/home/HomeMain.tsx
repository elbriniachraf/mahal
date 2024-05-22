import React from "react";
import CategoryBanner from "./CategoryBanner";
import ProductArea from "./ProductArea";
import FeaturedProduct from "./FeaturedProduct";
import CategoryArea from "./CategoryArea";
import FeaturesArea from "../SharedComponents/FeaturesArea";
import SidebarMain from "../SharedComponents/Sidebars/SidebarMain";
import HeroBannerSec from "./HeroBannerSec";
const HomeMain = () => {
  return (
    <>
      <HeroBannerSec />
      <CategoryBanner />
      <ProductArea />
      <FeaturedProduct />
      <CategoryArea />
      <FeaturesArea />
      <SidebarMain vendorId="-1"/>
    </>
  );
};

export default HomeMain;

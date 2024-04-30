import React from "react";
import ProductArea from "../home/ProductArea";
import CategoryAreaTwo from "./CategoryAreaTwo";
import BundleComboArea from "./BundleComboArea";
import BlogArea from "./BlogArea";
import FeaturedAreaHomeTwo from "./FeaturedAreaHomeTwo";
import SidebarMain from "../SharedComponents/Sidebars/SidebarMain";
import HomeTwoBannerArea from "./HomeTwoBannerArea";
const HomeTwoMain = () => {
  return (
    <>
      <HomeTwoBannerArea />
      <ProductArea />
      <CategoryAreaTwo />
      <BundleComboArea />
      <BlogArea />
      <FeaturedAreaHomeTwo />
      <SidebarMain />
    </>
  );
};

export default HomeTwoMain;

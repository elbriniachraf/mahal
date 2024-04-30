import React from "react";

import blog_data from "@/data/blog-data";
import { BlogType, idType } from "@/interFace/interFace";
import BreadCrumb from "../SharedComponents/BreadCrumb";
import BlogDetailsArea from "./BlogDetailsArea";
import SidebarMain from "../SharedComponents/Sidebars/SidebarMain";

const BlogDetailsMain = ({ id }: idType) => {
  const item = blog_data.find((item) => item.id == id) as BlogType;
  return (
    <>
      <BreadCrumb title={item?.title} />
      <BlogDetailsArea item={item}/>
      <SidebarMain/>
    </>
  );
};

export default BlogDetailsMain;

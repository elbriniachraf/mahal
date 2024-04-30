import React from "react";
import BlogDetailsLeft from "./BlogDetailsLeft";
import BlogRightContent from "../blog/BlogRightContent";
import { BlogType } from "@/interFace/interFace";

interface propsType{
    item:BlogType
}

const BlogDetailsArea = ({item}:propsType) => {
  return (
    <>
      <div className="blog-area pt-120 pb-90">
        <div className="container container-small">
          <div className="row">
            <BlogDetailsLeft item={item}/>
            <BlogRightContent />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetailsArea;

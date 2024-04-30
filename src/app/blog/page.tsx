import BlogMain from "@/components/blog/BlogMain";
import MetaData from "@/hooks/useMetaData";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

const Blogpage = () => {
  return (
    <>
      <MetaData pageTitle="Blog">
        <Wrapper>
          <main>
            <BlogMain />
          </main>
        </Wrapper>
      </MetaData>
    </>
  );
};

export default Blogpage;

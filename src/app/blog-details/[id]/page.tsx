import BlogDetailsMain from "@/components/blog-details/BlogDetailsMain";
import MetaData from "@/hooks/useMetaData";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

const page = ({ params }: { params: { id: number } }) => {
  const id = params.id;
  return (
    <MetaData pageTitle="Blog Details">
      <Wrapper>
        <main>
          <BlogDetailsMain id={id} />
        </main>
      </Wrapper>
    </MetaData>
  );
};
export default page;

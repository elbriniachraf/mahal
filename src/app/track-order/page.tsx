import TrackOrderMain from "@/components/track-order/TrackOrderMain";
import MetaData from "@/hooks/useMetaData";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

const OrderTrackPage = () => {
  return (
    <>
      <MetaData pageTitle="Track Order">
        <Wrapper>
          <main>
            <TrackOrderMain />
          </main>
        </Wrapper>
      </MetaData>
    </>
  );
};

export default OrderTrackPage;

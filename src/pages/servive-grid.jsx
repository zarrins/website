import React from "react";
import SEO from "../common/seo";
import serviceGrid from "../components/service-grid";
import WrapperFour from "../layout/wrapper-4";

const index = () => {
  return (
    <WrapperFour>
      <SEO pageTitle={"service Grid"} />
      <serviceGrid />
    </WrapperFour>
  );
};

export default index;

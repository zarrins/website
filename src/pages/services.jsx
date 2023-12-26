import React from "react";
import SEO from "../common/seo";
import WrapperFour from "../layout/wrapper-4";
import ServicesList from "../components/services-list";

const index = () => {
  return (
    <WrapperFour>
      <SEO pageTitle={"خدمات"} />
      <ServicesList />
    </WrapperFour>
  );
};

export default index;

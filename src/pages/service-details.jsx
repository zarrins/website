import React from "react";
import SEO from "../common/seo";
import ServiceDetails from "../components/service-details";
import WrapperFour from "../layout/wrapper-4";

const index = () => {
  return (
    <WrapperFour>
      <SEO pageTitle={"جزئیات سرویس"} />
      <ServiceDetails />
      
    </WrapperFour>
  );
};

export default index;

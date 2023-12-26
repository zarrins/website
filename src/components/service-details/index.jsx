
import React from "react";
import Breadcrumb from "../bredcrumb/breadcrumb";
import CounterArea from "../homes/home-3/counter-area";
import ServiceArea from "./service-area";
import ServiceDetailsArea from "./service-details-area";

const serviceDetails = () => {
  return (
    <>
      <Breadcrumb title="جزئیات خدمات" subtitle="جزئیات خدمات" isDbbl="خدمات" />
      <ServiceDetailsArea />
      {/* <ServiceArea /> */}
      {/* <CounterArea /> */}
    </>
  );
};

export default serviceDetails;

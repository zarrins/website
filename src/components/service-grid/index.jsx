import FeatureArea from "@/src/common/feature-area";
import SuitableArea from "@/src/common/suitable-area";
import React from "react";
import Breadcrumb from "../bredcrumb/breadcrumb";
import CounterArea from "../homes/home-3/counter-area";
import ServiceArea from "./service-area";

const serviceGrid = () => {
  return (
    <>
      <Breadcrumb title="service Grid" subtitle="service Grid" isDbbl="service" />
      <FeatureArea style_about={true} />
      <ServiceArea />
      <SuitableArea style_2={true} />
      <CounterArea />
    </>
  );
};

export default serviceGrid;

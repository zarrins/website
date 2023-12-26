import React from "react";
import AboutArea from "./about-area";
import CategoryArea from "./category-area";
import ChooseArea from "./choose-area";
import CounterArea from "../../../common/counter-area";
import serviceArea from "../../services-list/service-area";
import FeatureArea from "./feature-area";
import HeroBanner from "./hero-banner";
import InstructorArea from "../../../common/instructor-area";
import SuitableArea from "../../../common/suitable-area";
import TestimonialArea from "./testimonial-area";
import BlogArea from "./blog-area";
import BrandArea from "../../../common/brand-area";

const Home = () => {
  return (
    <>
      <HeroBanner />
      <CategoryArea />
      {/* <FeatureArea /> */}
      <AboutArea />
      <serviceArea />
      <CounterArea />
      <ChooseArea />
      {/* <InstructorArea /> */}
      <SuitableArea style_2={true}/>
      {/* <TestimonialArea /> */}
      <BlogArea />
      <BrandArea style_1={true} />
    </>
  );
};

export default Home;

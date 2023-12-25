
import React from "react";
import Breadcrumb from "../bredcrumb/breadcrumb";
import CounterArea from "../homes/home-3/counter-area";
import Postbox from "./postbox";

const Blog = () => {
  return (
    <>
      <Breadcrumb title="بلاگ" subtitle="بلاگ" />
      <Postbox />
      <CounterArea />
    </>
  );
};

export default Blog;

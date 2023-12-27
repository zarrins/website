import React from "react";
import SEO from "../../common/seo";
import Breadcrumb from "../../components/bredcrumb/breadcrumb";
import review_content from '@/src/data/review-data';
import WrapperFour from "../../layout/wrapper-4";
import ToggleableTabs from "@/src/components/service-details/datail-tabs";

const index = () => {
  return (
    <WrapperFour>
      <SEO pageTitle={"تعمیرات جارو برقی"} />
      <Breadcrumb title="تعمیرات جارو برقی" subtitle="تعمیرات جاروبرقی" isDbbl="خدمات" />

      {/* <ServiceDetails /> */}
      <section className="c-details-area pt-120 pb-50 wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".2s">
         <div className="container">
            <div className="row c-details-sidebar" style={{paddingBottom: "50px"}}>
               <div className="col-lg-6 col-md-12">
                  <div className="c-details-wrapper mr-25">
                    
                     <div className="service-details-content mt-40 mb-45">
                        <div className="tpservice__ava-title mb-25">
                           <h4 className="c-details-title"><a href="#">تعمیرات جارو برقی</a></h4>
                        </div>
                     </div>
                     <div className="c-details-about mb-40">
                        {/* <h5 className="tp-c-details-title mb-20">About This service</h5> */}
                        <p>Synergistically foster 24/7 leadership rather than scalable platforms. Conveniently visualize installed base products before interactive results. Collaboratively restore corporate experiences and open-source applications. Proactively mesh cooperative growth strategies for covalent opportunities. Competently create efficient markets through best-of-breed potentialities.</p>
                        <p>Proactively initiate corporate vortals via bricks-and-clicks relationships. Dynamically envisioneer cutting-edge paradigms via client-centered relationships. Globally repurpose backward-compatible growth strategies and fully tested e-services. Energistically promote stand-alone models whereas effective solutions. Quickly target low-risk high-yield e-markets via web-enabled networks.</p>
                     </div>
                  </div>
               </div>
               <div className="col-lg-6 col-md-12">
                  <div className="c-details-sidebar">
                     <div className="c-details-thumb p-relative">
                        <img src="/assets/img/service/c-details-bg-07.jpg" alt="details-bg" />
                     </div>
                  </div>
               </div>
            </div>
            <div className="row">
               <ToggleableTabs/>
            </div>  
         </div>
      </section>
      
    </WrapperFour>
  );
};

export default index;

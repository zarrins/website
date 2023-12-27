import React from "react";
import SEO from "../../common/seo";
import Breadcrumb from "../../components/bredcrumb/breadcrumb";
import review_content from '@/src/data/review-data';
import WrapperFour from "../../layout/wrapper-4";
import ToggleableTabs from "@/src/components/service-details/datail-tabs";

const index = () => {
  return (
    <WrapperFour>
      <SEO pageTitle={"تعمیرات کولر گازی"} />
      <Breadcrumb title="تعمیرات کولر گازی" subtitle="تعمیرات کولر گازی" isDbbl="خدمات" />

      {/* <ServiceDetails /> */}
      <section className="c-details-area pt-120 pb-50 wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".2s">
         <div className="container">
            <div className="row c-details-sidebar" style={{paddingBottom: "50px"}}>
               <div className="col-lg-6 col-md-12">
                  <div className="c-details-wrapper mr-25">
                    
                     <div className="service-details-content mt-40 mb-45">
                        
                        <div className="tpservice__ava-title mb-25">
                           <h4 className="c-details-title"><a href="#">تعمیرات کولر گازی</a></h4>
                        </div>
                        {/* <div className="tpservice__meta service-details-list">
                           <ul className="d-flex align-items-center">
                              <li>
                                 <div className="rating-gold d-flex align-items-center">
                                    <p>4.7</p>
                                    <i className="fi fi-ss-star"></i>
                                    <i className="fi fi-ss-star"></i>
                                    <i className="fi fi-ss-star"></i>
                                    <i className="fi fi-ss-star"></i>
                                    <i className="fi fi-rs-star"></i>
                                    <span>(125)</span>
                                 </div>
                              </li>
                              <li><img src="/assets/img/icon/c-meta-01.png" alt="meta-icon" /> <span>35 Classes</span></li>
                           </ul>
                        </div> */}
                     </div>

                     <div className="c-details-about mb-40">
                        {/* <h5 className="tp-c-details-title mb-20">About This service</h5> */}
                        <p>Synergistically foster 24/7 leadership rather than scalable platforms. Conveniently visualize installed base products before interactive results. Collaboratively restore corporate experiences and open-source applications. Proactively mesh cooperative growth strategies for covalent opportunities. Competently create efficient markets through best-of-breed potentialities.</p>
                        <p>Proactively initiate corporate vortals via bricks-and-clicks relationships. Dynamically envisioneer cutting-edge paradigms via client-centered relationships. Globally repurpose backward-compatible growth strategies and fully tested e-services. Energistically promote stand-alone models whereas effective solutions. Quickly target low-risk high-yield e-markets via web-enabled networks.</p>
                     </div>

                     {/* <div className="cor-details-instructor mb-40">
                        <h4 className="tp-c-details-title mb-40">Instructor</h4>
                        <div className="service-instructor-details d-flex f-wrap align-items-center">
                           <div className="service-avata mr-30 mb-20">
                              <img src="/assets/img/service/c-details-ava-thumb-01.jpg" alt="avata-thumb" />
                           </div>
                           <div className="service-avatar-details mb-20">
                              <h5 className="c-avata-title mb-10">Hossain Mahmud</h5>
                              <p>Award Winning Chemical & User Interface Design Training</p>
                              <div className="c-details-list mb-5">
                                 <ul className="d-flex align-items-center">
                                    <li>
                                       <div className="rating-gold d-flex align-items-center">
                                          <p>4.7</p>
                                          <i className="fi fi-ss-star"></i>
                                          <i className="fi fi-ss-star"></i>
                                          <i className="fi fi-ss-star"></i>
                                          <i className="fi fi-ss-star"></i>
                                          <i className="fi fi-rs-star"></i>
                                          <span>(125)</span>
                                       </div>
                                    </li>
                                    <li><img src="/assets/img/icon/c-details-01.png" alt="meta-icon" /><span>35 Classes</span></li>
                                 </ul>
                              </div>
                              <div className="c-details-stu">
                                 <ul>
                                    <li className="d-flex align-items-center"><img src="/assets/img/icon/c-details-02.png" alt="meta-icon"/> <span>2,35,687 Students</span></li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                        <p>Synergistically foster 24/7 leadership rather than scalable platforms. Conveniently visualize installed base products before interactive results. Collaboratively restore corporate experiences and open-source applications. Proactively mesh cooperative growth strategies.</p>
                     </div>
                     <div className="c-details-review pb-15">
                        <div className="c-review-title-wrapper">
                           <h5 className="c-review-title mb-40">Review</h5>
                        </div>
                        <div className="service-reviewer-item-wrapper">

                              {review_content.map((item, i) => 
                                 <div key={i} className="service-reviewer-item d-flex mb-25">
                                 <div className="service-review-ava">
                                    <img src={item.img} alt="details-avata" />
                                 </div>
                                 <div className="service-review-content p-relative">
                                    <h5 className="service-ava-title mb-15">{item.name}</h5>
                                    <div className="tpservice__rating-icon d-flex align-items-center mb-10">
                                       <i className="fi fi-ss-star"></i>
                                       <i className="fi fi-ss-star"></i>
                                       <i className="fi fi-ss-star"></i>
                                       <i className="fi fi-ss-star"></i>
                                       <i className="fi fi-rs-star"></i>
                                    </div>
                                    <p>{item.review_text}</p>
                                    <div className="c-reviewer-time">
                                       <span>{item.review_time}</span>
                                    </div>
                                 </div>
                              </div>
                                 
                                 )
                              }

                        </div>
                     </div> */}
                  </div>
               </div>
               <div className="col-lg-6 col-md-12">
                  <div className="c-details-sidebar">
                  <div className="c-details-thumb p-relative">
                        <img src="/assets/img/service/c-details-bg-03.jpg" alt="details-bg" />
                        {/* <div className="c-details-ava d-md-flex align-items-center">
                           <img src="/assets/img/service/c-details-ava-01.png" alt="avata" />
                           <span>By <a href="#">Emilia Jonas</a></span>
                        </div> */}
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

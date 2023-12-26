import service_data_2 from "@/src/data/service-data-2";
import Link from "next/link";
import React from "react";

const serviceArea = () => {
  return (
    <>
      <section
        className="service-wrap-area bg-bottom grey-bg pt-115 pb-60 wow fadeInUp"
        data-wow-duration=".8s"
        data-wow-delay=".4s"
        style={{ backgroundImage: `url(/assets/img/bg/shape-bg-1.png)` }}
      >
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-xl-6 col-lg-8 col-md-8">
              <div className="section-title mb-65">
                <span className="tp-sub-title-box mb-15">Our services</span>
                <h2 className="tp-section-title mb-20">
                  Explore Popular services
                </h2>
              </div>
            </div>
            <div className="col-xl-6 col-lg-4 col-md-4">
              <div className="tp-service-btn mb-40 d-flex justify-content-md-end">
                <a className="tp-btn" href="#">
                  Browse All services
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            {service_data_2.map((item) => (
              <div key={item.id} className="col-lg-6 col-md-12">
                <div className="tpservice tp-wrap-service mb-40">
                  <div className="row">
                    <div className="col-xl-4 tpservice-thumb-w">
                      <div className="tpservice__thumb p-relative w-img fix">
                        <Link href="/service-details">
                          <img src={item.img} alt="service-thumb" />
                        </Link>
                      </div>
                    </div>
                    <div className="col-xl-8 tpservice-thumb-text">
                      <div className="tp-wrap-service__content ml-5">
                        <div className="tp-wrap-service__heading">
                          <h4 className="tp-wrap-service__title mb-20">
                            <Link href="/service-details">{item.title}</Link>
                          </h4>
                        </div>
                        <div className="tpservice__meta tp-service-line pb-20 mb-25">
                          <ul className="d-flex align-items-center">
                            <li>
                              <img
                                src="/assets/img/icon/c-meta-01.png"
                                alt="meta-icon"
                              />
                              <span>{item.cls_text}</span>
                            </li>
                            <li>
                              <img
                                src="/assets/img/icon/c-meta-02.png"
                                alt="meta-icon"
                              />
                              <span>{item.st_text}</span>
                            </li>
                            <li>
                              <img
                                src="/assets/img/icon/c-meta-03.png"
                                alt="meta-icon"
                              />
                              <span>{item.start_text}</span>
                            </li>
                          </ul>
                        </div>
                        <div className="tpservice__category c-price-list d-flex align-items-center justify-content-between">
                          <h5 className="tpservice__service-price c-price-pac">
                            ${item.service_price}
                          </h5>
                          <ul className="tpservice__price-list d-flex align-items-center">
                            <li>
                              <Link href="/service-details">
                                {item.service_title}
                              </Link>
                            </li>
                            <li>
                              <Link href="/service-details">
                                {item.service_name}
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default serviceArea;

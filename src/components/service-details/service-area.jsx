import our_service_data from "@/src/data/our-service-data";
import Link from "next/link";
import React from "react";

const ServiceArea = () => {
  return (
    <>
      <section className="service-area mb-80">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title mb-65">
                <h2 className="tp-section-title mb-20">Related services</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {our_service_data.slice(0, 3).map((item, i) => (
              <div key={i} className="col-xl-4 col-lg-6 col-md-6">
                <div
                  className="tpservice mb-40 wow fadeInUp"
                  data-wow-duration=".8s"
                  data-wow-delay=".3s"
                >
                  <div className="tpservice__thumb p-relative w-img fix">
                    <Link href={item.service_link}>
                      <img src={item.img} alt="service-thumb" />
                    </Link>
                    <div className="tpservice__tag">
                      <Link href={item.service_link}>
                        <i className="fi fi-rr-heart"></i>
                      </Link>
                    </div>
                    <div className="tpservice__img-icon">
                      <img src={item.icon} alt="service-avata" />
                    </div>
                  </div>
                  <div className="tpservice__content-2">
                    <div className="tpservice__category mb-10">
                      <ul className="tpservice__price-list d-flex align-items-center">
                        <li>
                          <Link
                            className={item.ct_color}
                            href={item.service_link}
                          >
                            {item.service_title}
                          </Link>
                        </li>
                        <li>
                          <Link
                            className={item.cn_color}
                            href={item.service_link}
                          >
                            {item.service_name}
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="tpservice__ava-title mb-15">
                      <h4 className="tpservice__title tp-cours-title-color">
                        <Link href={item.service_link}>{item.title}</Link>
                      </h4>
                    </div>
                    <div className="tpservice__meta tpservice__meta-gap pb-15 mb-15">
                      <ul className="d-flex align-items-center">
                        <li>
                          <img
                            src="/assets/img/icon/c-meta-01.png"
                            alt="meta-icon"
                          />{" "}
                          <span>{item.cls_text}</span>
                        </li>
                        <li>
                          <img
                            src="/assets/img/icon/c-meta-02.png"
                            alt="meta-icon"
                          />{" "}
                          <span>{item.st_text}</span>
                        </li>
                      </ul>
                    </div>
                    <div className="tpservice__rating d-flex align-items-center justify-content-between">
                      <div className="tpservice__rating-icon">
                        <span>{item.start_text}</span>
                        <i className="fi fi-ss-star"></i>
                        <i className="fi fi-ss-star"></i>
                        <i className="fi fi-ss-star"></i>
                        <i className="fi fi-ss-star"></i>
                        <i className="fi fi-rs-star"></i>
                        <p>({item.total_start})</p>
                      </div>
                      <div className="tpservice__pricing">
                        <h5 className="price-title">${item.service_price}</h5>
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

export default ServiceArea;

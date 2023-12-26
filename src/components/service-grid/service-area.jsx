import our_service_data from "@/src/data/our-service-data";
import Link from "next/link";
import React from "react";

const ServiceArea = () => {
  return (
    <>
      <section className="service-area pb-120">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title text-center mb-65">
                <span className="tp-sub-title-box mb-15">Our services</span>
                <h2 className="tp-section-title mb-20">
                  Explore Popular services
                </h2>
              </div>
            </div>
          </div>
          <div className="row mb-20">
            {our_service_data.slice(0, 9).map((item, i) => (
              <div key={i} className="col-xl-4 col-lg-6 col-md-6">
                <div
                  className="tpservice mb-40 wow fadeInUp"
                  data-wow-duration=".8s"
                  data-wow-delay=".2s"
                >
                  <div className="tpservice__thumb p-relative w-img fix">
                    <Link href="/service-details">
                      <img src={item.img} alt="service-thumb" />
                    </Link>
                    <div className="tpservice__tag">
                      <Link href="/service-details">
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
                            href="/service-details"
                          >
                            {item.service_title}
                          </Link>
                        </li>
                        <li>
                          <Link
                            className={item.cn_color}
                            href="/service-details"
                          >
                            {item.service_name}
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="tpservice__ava-title mb-15">
                      <h4 className="tpservice__title tp-cours-title-color">
                        <Link href="/service-details">{item.title}</Link>
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
                        <span>4.7</span>
                        <i className="fi fi-ss-star"></i>
                        <i className="fi fi-ss-star"></i>
                        <i className="fi fi-ss-star"></i>
                        <i className="fi fi-ss-star"></i>
                        <i className="fi fi-rs-star"></i>
                        <p>(125)</p>
                      </div>
                      <div className="tpservice__pricing">
                        <h5 className="price-title">$29.99</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="basic-pagination">
            <nav>
              <ul>
                <li>
                  <Link href="/blog">
                    <i className="far fa-angle-left"></i>
                  </Link>
                </li>
                <li>
                  <span className="current">1</span>
                </li>
                <li>
                  <Link href="/blog">2</Link>
                </li>
                <li>
                  <Link href="/blog">3</Link>
                </li>
                <li>
                  <Link href="/blog">
                    <i className="far fa-angle-right"></i>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceArea;

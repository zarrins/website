import service_list_data from "@/src/data/service-list-data";
import Link from "next/link";
import React from "react";
import serviceArea from "./service-area";

const  ServiceListArea = () => {
  return (
    <>

      <serviceArea />
     
      {/* <section
        className="service-list-area pb-120 wow fadeInUp"
        data-wow-duration=".8s"
        data-wow-delay=".2s"
      >
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-12">
              <div className="section-title mb-60">
                <span className="tp-sub-title-box mb-15">Our services</span>
                <h2 className="tp-section-title">Explore Popular services</h2>
              </div>
            </div>
          </div>
          <div className="row mb-20">
            <div className="col-lg-4 col-md-12 servicer-list-width mb-60">
              <div className="service-sidebar">
                <div className="country-select">
                  <h4 className="service-sidebar__title mb-35">Category </h4>
                  <select>
                    <option value="volvo">All Category</option>
                    <option value="saab">service Level</option>
                    <option value="mercedes">service Price</option>
                    <option value="audi">Instructor</option>
                    <option value="audi2">Class Duration</option>
                  </select>
                </div>
                <div className="service-sidebar__widget mb-50">
                  <div className="service-sidebar__info c-info-list">
                    <h4 className="service-sidebar__title mb-35">
                      service Level
                    </h4>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        All Levels
                      </label>
                      <span className="f-right">99</span>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckChecked"
                      >
                        Beginner
                      </label>
                      <span className="f-right">63</span>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked3"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckChecked3"
                      >
                        Intermediate
                      </label>
                      <span className="f-right">96</span>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked4"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckChecked4"
                      >
                        Expert
                      </label>
                      <span className="f-right">35</span>
                    </div>
                  </div>
                </div>
                <div className="service-sidebar__widget mb-50">
                  <div className="service-sidebar__info c-info-list">
                    <h4 className="service-sidebar__title mb-30">
                      service Price
                    </h4>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault5"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault5"
                      >
                        Free services
                      </label>
                      <span className="f-right">13</span>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked6"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckChecked6"
                      >
                        Paid services
                      </label>
                      <span className="f-right">25</span>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked7"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckChecked7"
                      >
                        Subscription Only
                      </label>
                      <span className="f-right">99</span>
                    </div>
                  </div>
                </div>
                <div className="service-sidebar__widget mb-50">
                  <div className="service-sidebar__info c-info-list">
                    <h4 className="service-sidebar__title mb-35">Instructor</h4>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault8"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault8"
                      >
                        Albert Flores
                      </label>
                      <span className="f-right">55</span>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked9"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckChecked9"
                      >
                        Savannah Nguyen
                      </label>
                      <span className="f-right">40</span>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked10"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckChecked10"
                      >
                        Arlene McCoy
                      </label>
                      <span className="f-right">26</span>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked11"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckChecked11"
                      >
                        Bessie Cooper
                      </label>
                      <span className="f-right">35</span>
                    </div>
                  </div>
                </div>
                <div className="service-sidebar__widget mb-50">
                  <div className="service-sidebar__info c-info-list">
                    <h4 className="service-sidebar__title mb-35">
                      Class Duration
                    </h4>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault12"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault12"
                      >
                        Less Than 2 hours
                      </label>
                      <span className="f-right">96</span>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked13"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckChecked13"
                      >
                        3-5 hours
                      </label>
                      <span className="f-right">27</span>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked14"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckChecked14"
                      >
                        4-7 hours
                      </label>
                      <span className="f-right">88</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-12 service-item-width ml-30">
              {service_list_data.map((item, i) => (
                <div key={i} className="tpservice tp-list-service mb-40">
                  <div className="row g-0">
                    <div className="col-xl-4 service-thumb-width">
                      <div className="tpservice__thumb p-relative w-img fix">
                        <Link href="/service-details">
                          <img src={item.img} alt="service-thumb" />
                        </Link>
                      </div>
                    </div>
                    <div className="col-xl-8  service-text-width">
                      <div className="service-list-content">
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
                            <Link href="/service-details">
                              {item.title}
                            </Link>
                          </h4>
                        </div>
                        <div className="tpservice__meta tpservice__meta-gap pb-15 mb-15">
                          <ul className="d-flex align-items-center">
                            <li>
                              <img
                                src="/assets/img/icon/c-meta-01.png"
                                alt="meta-icon"
                              />
                              <span>35 Classes</span>
                            </li>
                            <li>
                              <img
                                src="/assets/img/icon/c-meta-02.png"
                                alt="meta-icon"
                              />
                              <span>291 Students</span>
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
                </div>
              ))}
            </div>
          </div>
          <div className="basic-pagination text-center">
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
      </section> */}
    </>
  );
};

export default ServiceListArea;

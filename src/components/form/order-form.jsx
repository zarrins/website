import Link from "next/link";
import React from "react";

const OrderForm = () => {
  return (
    <>
      <section
        className="login-area wow fadeInUp"
        data-wow-duration=".8s"
        data-wow-delay=".5s"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="basic-login">
                {/* <h3 className="text-center mb-30">Sign up From Here</h3> */}
                <form onSubmit={(e) => e.preventDefault()}>
                  <label htmlFor="name">
                    نام و نام خانوادگی <span>**</span>
                  </label>
                  <input id="name" type="text" placeholder="نام و نام خانوادگی را وارد کنید" />
                  <label htmlFor="phone-id">
                    شماره تماس <span>**</span>
                  </label>
                  <input
                    id="phone-id"
                    type="text"
                    placeholder="شماره تماس خود را وارد کنید"
                  />
                  <label htmlFor="type">
                    نوع دستگاه <span>**</span>
                  </label>
                  <input
                    id="type"
                    type="text"
                    placeholder="نوع دستگاه را مشخص کنید"
                  />
                  <label htmlFor="brand">
                    برند دستگاه 
                  </label>
                  <input
                    id="brand"
                    type="text"
                    placeholder="برند دستگاه را مشخص کنید"
                  />
                  <div className="mt-10"></div>
                  <button className="tp-btn w-100">ثبت درخواست</button>
                  
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OrderForm;

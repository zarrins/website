import React from "react";

const ContactForm = () => {
  return (
    <>
      <section
        className="contact-area pb-60 wow fadeInUp"
        data-wow-duration=".8s"
        data-wow-delay=".2s"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-12">
              <div className="contact-wrapper mr-65 mb-60">
                <div className="sub-contact-title">
                  <h5 className="contact-title mb-30">پیشنهادات و نظرات خود را با ما در میان بگذارید.</h5>
                </div>
                <div className="contact-form">
                  <form
                    id="contact-form"
                    action="assets/mail.php"
                    method="POST"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <div className="contact-form-input mb-25">
                          <span>نام و نام خانوادگی</span>
                          <input
                            type="name"
                            placeholder="نام و نام خانوادگی را وارد کنید"
                            name="name"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="contact-form-input mb-25">
                          <span>آدرس ایمیل</span>
                          <input
                            type="email"
                            placeholder=" ایمیل خود را وارد کنید"
                            name="email"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="contact-form-input mb-40">
                          <span>دیدگاه شما</span>
                          <textarea
                            placeholder="پیغام خود را درج نمایید..."
                            name="message"
                            required
                          ></textarea>
                        </div>
                        <button className="tp-btn" type="submit">
                          ثبت دیدگاه
                        </button>
                      </div>
                    </div>
                  </form>
                  <p className="ajax-response"></p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <div className="contact-bg mb-60">
                <img
                  src="/assets/img/bg/contact-sub-bg-01.jpg"
                  alt="contact-bg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;

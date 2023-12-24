import React from "react";

const footer_data = [
  {
    id: 1,
    title: "لینک ها",
    cls: "col-xl-2",
    footer_col: "footer-col-1",
    links: [
      { name: "درباره ما", link: "/about" },
      { name: "وبلاگ", link: "/blog" },
      { name: "پرسش های متداول", link: "/" },
      { name: "خدمات", link: "/" },
    ],
  },
  {
    id: 2,
    title: "لینک های سریع",
    cls: "col-xl-3",
    footer_col: "footer-col-2",
    links: [
      { name: "تعمیر یخچال", link: "/policy" },
      { name: "تعمیر پکیج", link: "/documentation" },
      { name: "تعمیر لباسشویی", link: "/chat-online" },
      { name: "تعمیر کولر گازی", link: "/order-cancel" },
    ],
  },
  {
    id: 3,
    title: "پشتیبانی",
    footer_col: "footer-col-3",
    cls: "col-xl-3",
    links: [
      { name: "تماس با ما", link: "/contact" },
      { name: "واتساپ", link: "/whatsapp" },
      { name: "تلگرام", link: "/telegram" },
    ],
  },
];


// social_links
const social_links = [
  // {
  //   link: "http://facebook.com",
  //   target: "_blank",
  //   icon: "fab fa-facebook-f",
  //   name: "Facebook",
  // },
  {
    link: "https://www.youtube.com/",
    target: "_blank",
    icon: "fab fa-youtube",
    name: "Youtube",
  },
  {
    link: "https://www.basketball.com/",
    target: "_blank",
    icon: "fa-light fa-basketball",
    name: "Instagram",
  },

  {
    link: "http://whatsapp.com",
    target: "_blank",
    icon: "fa-brands fa-whatsapp",
    name: "Twitter",
  },
];

const copyright = {
  logo: "/assets/img/logo/logo.png",
  copyright_text: (
    <>Copyright © Uxaction {new Date().getFullYear()}, All Rights Reserved</>
  ),
};

const { logo, copyright_text } = copyright;
const Footer = () => {
  return (
    <>
      <footer>
        <div
          className="footer-bg theme-bg bg-bottom"
          style={{ backgroundImage: `url(/assets/img/bg/shape-bg-02.png)` }}
        >
          <div className="f-border pt-115 pb-70">
            <div className="container">
              <div className="row">
                {footer_data.map((item) => (
                  <div key={item.id} className={`${item.cls} col-md-4`}>
                    <div className={`footer-widget ${item.footer_col} mb-50`}>
                      <div className="footer-widget__text mb-35">
                        <h3 className="footer-widget__title">{item.title}</h3>
                      </div>
                      <div className="footer-widget__link">
                        <ul>
                          {item.links.map((link, i) => (
                            <li key={i}>
                              <a href="#">{link.name}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="col-xl-4 col-lg-6 col-md-8">
                  <div className="footer-widget footer-col-4  mb-50">
                    <div className="footer-widget__text mb-35">
                      <h3 className="footer-widget__title">Support</h3>
                    </div>
                    <p>
                      Be the first one to know about discounts, offers and
                      events. Unsubscribe whenever you like.
                    </p>
                    <div className="footer-widget__f-newsletter mb-40">
                      <form  onSubmit={(e) => e.preventDefault()}>
                        <span>
                          <i className="icon_mail_alt"></i>
                        </span>
                        <input type="email" placeholder="Enter your email" />
                        <button className="footer-widget__submit tp-border-btn2">
                          Subscribe Now
                        </button>
                      </form>
                    </div>
                    <div className="footer-widget__social d-flex align-items-center">
                      {social_links.map((link, i) => (
                        <a href={link.link} target={link.target} key={i}>
                          <i className={link.icon}></i>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="f-copyright pt-60 pb-30">
            <div className="container">
              <div className="row">
                <div className="col-md-5">
                  <div className="f-copyright__logo mb-30">
                    <a href="#">
                      <img src={logo} alt="logo" />
                    </a>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="f-copyright__text text-md-end mb-30">
                    <span>{copyright_text}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

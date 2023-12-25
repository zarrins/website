import Link from "next/link";
import React from "react";

const choose_data = {
  bg_img: "/assets/img/bg/choose-img-01.jpg",
  experiences_years: "10",
  title: "چرا ما؟؟؟",
  sub_title: (
    <>
      چرا باید به تیم
      <br />
      تماس با سرویس اعتماد کنید؟
    </>
  ),
  des: 'Dramatically supply transparent deliverables before & can backward comp internal or "organic" sources.',

  choose_list: [
    { title: "صرفه جویی در زمان" },
    { title: "خدمات در محل" },
    { title: "یک ماه پشتیبانی" },
  ],
};

const { bg_img, experiences_years, title, sub_title, des, choose_list } =
  choose_data;
const ChooseArea = () => {
  return (
    <>
      <section
        className="choose-area pb-30 pt-50 wow fadeInUp"
        data-wow-duration=".8s"
        data-wow-delay=".4s"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-7 col-lg-6 col-md-6">
              <div className="tp-choose-img p-relative mb-30 mt-30 ml-25">
                <img src={bg_img} alt="choose-img" />
                <div className="tpchoose-img-text d-none d-md-block">
                  <ul>
                    <li>
                      <i>{experiences_years}+</i>
                      <p className="fs-bold">سال تجربه</p>
                    </li>
                    <li>
                      <i className="fa-light fa-clock-desk"></i>
                      <p>سرعت بالای خدمات</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 col-md-6">
              <div className="tp-choose-content mb-30">
                <div className="section-title mb-25">
                  <span className="tp-sub-title mb-25">{title}</span>
                  <h2 className="tp-section-title mb-20">
                   {sub_title}
                  </h2>
                  <p>
                    {des}
                  </p>
                </div>
                <div className="tp-choose-list mb-35">
                  <ul className="d-flex flex-column">
                    {choose_list.map((item, i) => (
                      <li key={i} className="d-flex pr-10">
                        <span >{item.title}</span>
                        <i className="fa-light fa-check"></i>                      
                      </li>
                    ))}
                  </ul>
                </div>
                {/* <div className="choose-btn">
                  <Link href="/about" className="tp-btn">
                    Explore Courses
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChooseArea;

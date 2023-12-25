import React from "react";
import Count from "./count";
import Link from "next/link";


// counter data 
const counter_data = [
  {
    id: 1,
    icon: "fa-regular fa-address-book",
    count_number: 276,
    thousand: "K",
    title: "ثبت درخواست توسط شما",
    desc:"درخواست خود را به صورت آنلاین در سایت ثبت کرده و یا با ما تماس بگیرید."
  },
  {
    id: 2,
    icon: "fa-solid fa-headset",
    count_number: 23,
    thousand: "",
    title: "هماهنگی کارشناسان با شما",
    desc:"کارشناسان ما در کوتاهترین زمان به منظور هماهنگی با شما تماس خواهند گرفت."
  },
  {
    id: 3,
    icon: "fa-solid fa-comments-dollar",    
    count_number: 735,
    thousand: "",
    title: "مراجعه کارشناس واعلام هزینه",
    desc:"دستگاه شما توسط کارشناس بازدید و ایراد و هزینه خدمات به شما اعلام می گردد."
  },
  {
    id: 4,
    icon: "fa-solid fa-screwdriver-wrench",
    count_number: 407,
    thousand: "K",
    title: "تست دستگاه و پایان سفارش",
    desc:"دستگاه به صورت کامل تست شده و سالم تحویل شما خواهد گردید."
  },
];
const CounterArea = ({style_counter}) => {
  return (
    <>
      <section
        className={`tp-counter-area bg-bottom  ${style_counter ? "pb-60" : "grey-bg pt-120 pb-60"}  wow fadeInUp`}
        data-wow-duration="1s"
        data-wow-delay=".4s"
        
        style={{ backgroundImage: style_counter ? null : `url(/assets/img/bg/shape-bg-1.png)`}}
      >
        <div className="container">
          <div className="row">
            {counter_data.map((item) => (
              <div key={item.id} className="col-xl-3 col-md-6">
                <div className="counter-item mb-60 text-center">
                  <div className="counter-item__icon ">
                    <i className={item.icon}></i>
                  </div>
                  <div className="counter-item__content">
                    <h4 className="counter-item__title">
                      <span className="counter">
                        {/* <Count
                          add_style={true}
                          number={item.count_number}
                          text={item.thousand}
                        /> */}
                      </span>
                    </h4>
                    <p>{item.title}</p>
                    <p className="fs-6 mt-3">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
            <div className="d-flex justify-content-center">
                  <Link href="/about" className="tp-btn">ثبت درخواست تعمیرات</Link>
                </div>
          </div>

          {/* <div class="row">
            <div class="col-md-12">
              <ul class="stepper stepper-horizontal">
                <li class="completed">
                  <a href="#!">
                    <span class="circle">1</span>
                    <span class="label">First step</span>
                  </a>
                </li>

                <li class="active">
                  <a href="#!">
                    <span class="circle">2</span>
                    <span class="label">Second step</span>
                  </a>
                </li>

                <li class="warning">
                  <a href="#!">
                    <span class="circle"><i class="fas fa-exclamation"></i></span>
                    <span class="label">Third step</span>
                  </a>
                </li>

              </ul>

            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default CounterArea;

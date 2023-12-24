import React from "react";
import Count from "./count";

// counter data 
const counter_data = [
  {
    id: 1,
    icon: "fa-regular fa-address-book",
    count_number: 276,
    thousand: "K",
    title: "ثبت درخواست توسط شما",
    desc:""
  },
  {
    id: 2,
    icon: "fa-solid fa-headset",
    count_number: 23,
    thousand: "",
    title: "هماهنگی کارشناسان با شما",
    desc:""
  },
  {
    id: 3,
    icon: "fa-solid fa-comments-dollar",    
    count_number: 735,
    thousand: "",
    title: "مراجعه کارشناس واعلام هزینه",
    desc:""
  },
  {
    id: 4,
    icon: "fa-solid fa-screwdriver-wrench",
    count_number: 407,
    thousand: "K",
    title: "تست دستگاه و پایان سفارش",
    desc:""
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

export default CounterArea;

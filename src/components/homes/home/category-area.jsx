import Link from "next/link";
import React from "react";

// category_data
const category_data = [
  {
    id: 1,
    icon: "/assets/img/washing-machine.png",
    title: "تعمیر لباسشویی",
    link: "/service-grid",

  },
  {
    id: 2,
    icon: "/assets/img/washing-machine.png",
    title: "تعمیر یخچال",
    // des: "Interactively provide access world class materials for unique catalysts for change my ocardinat.",
    link: "/service-grid",
  },

  {
    id: 3,
    icon: "/assets/img/washing-machine.png",
    title: "تعمیر ظرفشویی",
    // des: "Interactively provide access world class materials for unique catalysts for change my ocardinat.",
    link: "/service-grid",

  },
  {
    id: 4,
    icon: "/assets/img/washing-machine.png",
    title: "تعمیر جاروبرقی",
    // des: "Interactively provide access world class materials for unique catalysts for change my ocardinat.",
    link: "/service-grid",

  },
  {
    id: 5,
    icon: "/assets/img/washing-machine.png",
    title: "تعمیر ماکروفر",
    // des: "Interactively provide access world class materials for unique catalysts for change my ocardinat.",
    link: "/service-grid",

  },
  {
    id: 6,
    icon: "/assets/img/washing-machine.png",
    title: "تعمیر کولرگازی",
    // des: "Interactively provide access world class materials for unique catalysts for change my ocardinat.",
    link: "/service-grid",

  },
  {
    id: 7,
    icon: "/assets/img/washing-machine.png",
    title: "تعمیر پکیج",
    // des: "Interactively provide access world class materials for unique catalysts for change my ocardinat.",
    link: "/service-grid",

  },
];


const CategoryArea = () => {
  return (
    <>
      <section
        className="tp-category-area bg-bottom grey-bg pt-110 pb-80 wow fadeInUp"
        data-wow-duration="1.5s"
        data-wow-delay=".4s"
        style={{ backgroundImage: `url(/assets/img/bg/shape-bg-1.png)` }}
      >
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-12">
              <div className="section-title mb-65">
                <h2 className="tp-section-title">خدمات تماس با سرویس</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {category_data.map((item) => (
              <div key={item.id} className="col-xl-3 col-lg-3 col-md-2">
                <div className="tp-cat-item mb-40 d-flex align-items-center flex-column">
                  <div className="tp-category-icon mr-10 mb-10">
                    <img src={item.icon} alt="category-img" />
                  </div>
                  <h4 className="tp-category-title">
                    <Link href={item.link}>{item.title}</Link>
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoryArea;

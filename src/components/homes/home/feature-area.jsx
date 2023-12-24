import React from "react";

const feature_content = [
  {
    id: 1,
    icon: "/assets/img/washing-machine.png",
    title: "تعمیر لباسشویی",
    // des: "Interactively provide access world class materials for unique catalysts for change my ocardinat.",
  },
  {
    id: 2,
    icon: "/assets/img/washing-machine.png",
    title: "تعمیر یخچال",
    // des: "Interactively provide access world class materials for unique catalysts for change my ocardinat.",
  },

  {
    id: 3,
    icon: "/assets/img/washing-machine.png",
    title: "تعمیر ظرفشویی",
    // des: "Interactively provide access world class materials for unique catalysts for change my ocardinat.",
  },
  {
    id: 4,
    icon: "/assets/img/washing-machine.png",
    title: "تعمیر جاروبرقی",
    // des: "Interactively provide access world class materials for unique catalysts for change my ocardinat.",
  },
  {
    id: 5,
    icon: "/assets/img/washing-machine.png",
    title: "تعمیر ماکروفر",
    // des: "Interactively provide access world class materials for unique catalysts for change my ocardinat.",
  },
  {
    id: 6,
    icon: "/assets/img/washing-machine.png",
    title: "تعمیر کولرگازی",
    // des: "Interactively provide access world class materials for unique catalysts for change my ocardinat.",
  },
  {
    id: 7,
    icon: "/assets/img/washing-machine.png",
    title: "تعمیر پکیج",
    // des: "Interactively provide access world class materials for unique catalysts for change my ocardinat.",
  },
];



const FeatureArea = () => {
  return (
    <>
      <section
        className="tp-feature-area grey-bg pt-115 pb-90 pl-205 pr-205 bg-bottom"
        style={{ backgroundImage: `url(/assets/img/bg/shape-bg-1.png)` }}
      >
        <div className="container-fluid">
          <div className="row text-center">
            <div className="col-lg-12">
              <div className="section-title mb-60">
                {/* <span className="tp-sub-title mb-20">What We Offer</span> */}
                <h2 className="tp-section-title">خدمات تماس با سرویس</h2>
              </div>
            </div>
          </div>
          <div className="tp-feature-cn">
            <div className="row justify-space-around ">
              {/* <div style={{backgroundImage: 'url(/assets/img/Vector.png)', width: "155px", height: '160px'}} >
                <img src="/assets/img/washing-machine.png" className=""></img>
              </div> */}
              {feature_content.map((item) => (
                <div key={item.id} className="col-xl-2 col-lg-7 col-md-6">
                  <div
                    className="tpfea mb-30 wow fadeInUp relative w-25%"
                    data-wow-duration=".8s"
                    data-wow-delay=".6s"
                  >
                    <div>
                      <div className="tpfea__icon mb-25">
                      <img src={item.icon} className="w-25 h-25"></img>
                      {/* <i className={item.icon}></i> */}
                    </div>
                    <div className="tpfea__text">
                      <h5 className="tpfea__title mb-20">{item.title}</h5>
                      
                    </div>
                    </div>
                    
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureArea;

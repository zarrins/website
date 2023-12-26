import Link from 'next/link';
import React from 'react';

const HeroBanner = () => {
    return (
        <>
     <section className="banner-area fix p-relative">
         <div className="banner-bg"   style={{backgroundImage: `url(/assets/img/banner/banner-01.jpg)`}}>
            <div className="container">
               <div className="row">
               <div className="banner-shape d-none d-lg-block">
                     <img src="/assets/img/banner/banner-shape-01.png" alt="banner-shape" className="b-shape" />
                  </div>
                  <div className="col-xl-6 col-lg-6">
                     <div className="banner-info d-none">
                        <ul>
                           <li><span>235K</span>Worldwide Students</li>
                           <li><span>3.5K</span>Free Pro services</li>
                           <li><span>4.7<i className="fi fi-rr-star "></i></span>Worldwide Review</li>
                        </ul>
                     </div>
                  </div>
                  
                  <div className="col-xl-6 col-lg-6 col-md-8">
                     <div className="hero-content">
                        <span>تعمیرات تخصصی لوازم خانگی</span>
                        <h2 className="hero-title mb-35">نصب و تعمیر انواع برند لوازم خانگی توسط تیم  <i>تماس با سرویس</i></h2>
                        <p>تیم ما متناسب با مشکل، مدل و برند دستگاه؛ بهترین متخصص را به شما اختصاص میدهد. </p>
                        <div className="tp-banner-btn">
                           <Link href="/service-list" className="tp-btn">ثبت درخواست تعمیرات</Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
        </>
    );
};

export default HeroBanner;
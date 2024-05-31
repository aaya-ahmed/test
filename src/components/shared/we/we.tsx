import React, { Fragment } from "react";
import './weComponent.css'
const WeComponent = () => {
    return (<>
        <section className="about py-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <strong className="h2 d-block fw-bold mb-4"> من نحن ؟ </strong>
                        <p>
                            في عام 2010م وضعت شركةُ “أساس مكين للتطوير والاستثمار العقاري” أساسَ أول مشروعِ تطويرٍ عقاري لها، وعلى مدى ثلاثة عشر سنة حققت الشركة نجاحات رسخت اسم مكين في سوق التطوير العقاري
                        </p>
                        <div className="aboutinfo mt-5">
                            <div className="item ps-3">
                                <strong className="d-block h4 ps-3"> رؤيتنا </strong>
                                <p>
                                    الريادة والتميز في التطوير العقاري
                                </p>
                            </div>
                            <div className="item ps-3">
                                <strong className="d-block h4 ps-3"> رسالتنا </strong>
                                <p>

                                    بناء الثقة وتعزيز المصداقية من خلال التميز في تصميم وبناء الوحدات السكنية بأعلى المواصفات وتقديم الضمانات
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="about-img">
                            <img src="/assets/images/005.jpg" className="img-fluid" alt="من نحن ؟" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>);
}
export default WeComponent;
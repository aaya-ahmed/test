import React, { Fragment } from "react";
import './feature.css'
const FeatureComponent = () => {
    return (<>
        <section id="features" className="sec-features py-5">
            <div className="container">
                <div className="sec-title text-center mb-5">
                    <strong className="h1 fw-bold d-block text-brown"> مزايانا </strong>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 col-12 mb-2 d-flex align-items-stretch services-wrap">
                        <div className="services d-flex  align-items-start">
                            <div className="icon"><img src="/assets/images/special.svg"/></div>
                            <div className="text">
                                <h4>متميز</h4>
                                <p className="mb-0"> نموذج عمل متميز يسير وفق أعلى مواصفات البناء، وأجود معايير التشييد </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 mb-2 d-flex align-items-stretch services-wrap">
                        <div className="services d-flex align-items-start">
                        <div className="icon"><img src="/assets/images/1680349185.svg"/></div>
                            <div className="text">
                                <h4>موثقة</h4>
                                <p className="mb-0">ضمانات موثقة تصل إلى خمس وعشرين سنة</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 mb-2 d-flex align-items-stretch services-wrap">
                        <div className="services d-flex  align-items-start">
                        <div className="icon"><img src="/assets/images/1680349200.svg"/></div>
                            <div className="text">
                                <h4>المواقع المميزة</h4>
                                <p className="mb-0">اختيار المواقع المميزة للمشاريع وفقاً لدراساتنا حول سلوك المستهلكين وحال السوق العقاري</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 mb-2 d-flex align-items-stretch services-wrap">
                        <div className="services d-flex  align-items-start">
                        <div className="icon"><img src="/assets/images/1680349212.svg"/></div>
                            <div className="text">
                                <h4>المؤهلة</h4>
                                <p className="mb-0">إدارات طموحة يشرف عليها نخبة من الكفاءات المؤهلة</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 mb-2 d-flex align-items-stretch services-wrap">
                        <div className="services d-flex  align-items-start">
                        <div className="icon"><img src="/assets/images/1680349227.svg"/></div>
                            <div className="text">
                                <h4>العميل</h4>
                                <p className="mb-0">خدمات ما بعد البيع التي تستهدف بشكل أساسي تحسين تجربة العميل</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 mb-2 d-flex align-items-stretch services-wrap">
                        <div className="services d-flex  align-items-start">
                        <div className="icon"><img src="/assets/images/1680349247.svg"/></div>
                            <div className="text">
                                <h4>التصاميم</h4>
                                <p className="mb-0">التفرد في المنتجات العقارية من خلال العناية بأدق التفاصيل والابتكار في التصاميم، والاستثمار الأمثل  </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    </>);
}
export default FeatureComponent;
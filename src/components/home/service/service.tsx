import styles from './service.module.css'
const ServiceComponent = () => {
    return (<>
        <section id="services" className={`${styles['sec-features']} py-5`}>
            <div className="container">
                <div  className={`${styles['sec-title']} text-center mb-5`}>
                    <strong className={`h1 fw-bold d-block ${styles['text-title']}`}> خدماتنا </strong>
                </div>
                <div className="row justify-content-center">
                    <div className={`col-lg-4 col-md-6 col-12 mb-2 d-flex align-items-stretch ${styles['services-wrap']}`}>
                        <div className={`${styles['services']} d-flex  align-items-start`}>
                            <div className={`${styles['icon']}`}><img src="/assets/images/special.svg"/></div>
                            <div className={`${styles['text']}`}>
                                <h4>التطوير العقاري</h4>
                                <p className="mb-0"> نموذج عمل متميز يسير وفق أعلى مواصفات البناء، وأجود معايير التشييد </p>
                            </div>
                        </div>
                    </div>
                    <div className={`col-lg-4 col-md-6 col-12 mb-2 d-flex align-items-stretch ${styles['services-wrap']}`}>
                        <div className={`${styles['services']} d-flex  align-items-start`}>
                        <div className={`${styles['icon']}`}><img src="/assets/images/1680349185.svg"/></div>
                            <div className={`${styles['text']}`}>
                                <h4>تأسيس الشركات العقارية</h4>
                                <p className="mb-0">ضمانات موثقة تصل إلى خمس وعشرين سنة</p>
                            </div>
                        </div>
                    </div>
                    <div className={`col-lg-4 col-md-6 col-12 mb-2 d-flex align-items-stretch ${styles['services-wrap']}`}>
                        <div className={`${styles['services']} d-flex  align-items-start`}>
                        <div className={`${styles['icon']}`}><img src="/assets/images/1680349200.svg"/></div>
                            <div className={`${styles['text']}`}>
                                <h4>الاستثمار العقاري</h4>
                                <p className="mb-0">اختيار المواقع المميزة للمشاريع وفقاً لدراساتنا حول سلوك المستهلكين وحال السوق العقاري</p>
                            </div>
                        </div>
                    </div>
                    <div className={`col-lg-4 col-md-6 col-12 mb-2 d-flex align-items-stretch ${styles['services-wrap']}`}>
                        <div className={`${styles['services']} d-flex  align-items-start`}>
                        <div className={`${styles['icon']}`}><img src="/assets/images/1680349212.svg"/></div>
                            <div className={`${styles['text']}`}>
                                <h4>التسويق العقاري</h4>
                                <p className="mb-0">إدارات طموحة يشرف عليها نخبة من الكفاءات المؤهلة</p>
                            </div>
                        </div>
                    </div>
                    <div className={`col-lg-4 col-md-6 col-12 mb-2 d-flex align-items-stretch ${styles['services-wrap']}`}>
                        <div className={`${styles['services']} d-flex  align-items-start`}>
                        <div className={`${styles['icon']}`}><img src="/assets/images/1680349227.svg"/></div>
                            <div className={`${styles['text']}`}>
                                <h4>إدارة المشاريع لما بعد البيع</h4>
                                <p className="mb-0">خدمات ما بعد البيع التي تستهدف بشكل أساسي تحسين تجربة العميل</p>
                            </div>
                        </div>
                    </div>
                    <div className={`col-lg-4 col-md-6 col-12 mb-2 d-flex align-items-stretch ${styles['services-wrap']}`}>
                        <div className={`${styles['services']} d-flex  align-items-start`}>
                        <div className={`${styles['icon']}`}><img src="/assets/images/1680349247.svg"/></div>
                            <div className={`${styles['text']}`}>
                                <h4>تأسيس جمعيات الملاك</h4>
                                <p className="mb-0">التفرد في المنتجات العقارية من خلال العناية بأدق التفاصيل والابتكار في التصاميم، والاستثمار الأمثل  </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    </>);
}
export default ServiceComponent;
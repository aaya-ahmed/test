import React, { Fragment } from "react";
import styles from './project.module.css'

const ProjectComponent = () => {
    return (<>
        <section className={`${styles['projects']} py-5`}>
            <div className="container">
                <div className={`${styles['title']} text-center mb-5`}>
                    <strong className="h1 fw-bold d-block"> مشاريعنا </strong>
                </div>

                <div className="row">

                    <div className={`${styles['col-lg-4']} col-lg-4 col-md-6 col-12 mb-4`}>
                        <div className={`${styles['project-item']}`}>
                            <div className={`${styles['project-body']}`}>
                                <div className={`${styles['project-img']}`}>
                                    <a href="#">
                                        <img src="/assets/images/001.jpg" className="img-fluid" alt="مكين 34" />
                                    </a>
                                    <div className={`${styles['project-badge']} w-100 d-flex align-items-center justify-content-start`}>
                                        <span className={`${styles['project-place']}`}>
                                            <i className="fas fa-map-pin"></i> العنوان </span>
                                        <span className={`${styles['sale-badge']}`}>متاح للبيع </span>
                                    </div>
                                </div>
                                <div className={`${styles['project-info']}`}>
                                    <a href="#" className={`${styles['project-title']}`}> وحده 1 </a>
                                    <div className={`${styles['project-description']}`}>
                                        <p>
                                            شقق فاخرة
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className={`${styles['project-footer']}`}>
                                <ul className={`${styles['list-units-item']} d-flex align-items-center justify-content-evenly pt-3']}`}>
                                    <li> <i className="fas  fa-home" title=""></i>
                                        83
                                        وحدة
                                    </li>
                                    <li> <i className="fas fa-map-pin" title=""></i>
                                        حي الرمال
                                    </li>

                                    <li> <i className="fas  fa-percentage" title=""></i>
                                        45

                                        مباع
                                    </li>


                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles['col-lg-4']} col-lg-4 col-md-6 col-12 mb-4`}>
                        <div className={`${styles['project-item']}`}>
                            <div className={`${styles['project-body']}`}>
                                <div className={`${styles['project-img']}`}>
                                    <a href="#">
                                        <img src="/assets/images/002.jpg" className="img-fluid" alt="مكين 39" />
                                    </a>
                                    <div className={`${styles['project-badge']} w-100 d-flex align-items-center justify-content-start`}>
                                        <span className={`${styles['project-place']}`}>

                                            <i className="fas fa-map-pin"></i> العنوان </span>
                                        <span className={`${styles['sale-badge']}`}>متاح للبيع </span>
                                    </div>
                                </div>
                                <div className={`${styles['project-info']}`}>
                                    <a href="#" className={`${styles['project-title']}`}> وحده 1 </a>
                                    <div className={`${styles['project-description']}`}>
                                        <p>
                                            شقق فاخرة
                                        </p>
                                    </div>

                                </div>
                            </div>
                            <div className={`${styles['project-footer']}`}>
                                <ul className={`${styles['list-units-item']} d-flex align-items-center justify-content-evenly pt-3']}`}>
                                    <li> <i className="fas  fa-home" title=""></i>
                                        83
                                        وحدة
                                    </li>
                                    <li> <i className="fas fa-map-pin" title=""></i>
                                        حي الرمال
                                    </li>

                                    <li> <i className="fas  fa-percentage" title=""></i>
                                        45

                                        مباع
                                    </li>


                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles['col-lg-4']} col-lg-4 col-md-6 col-12 mb-4`}>
                        <div className={`${styles['project-item']}`}>
                            <div className={`${styles['project-body']}`}>
                                <div className={`${styles['project-img']}`}>
                                    <a href="#">
                                        <img src="/assets/images/003.jpg" className="img-fluid" alt="مكين 48" /></a>
                                    <div className={`${styles['project-badge']} w-100 d-flex align-items-center justify-content-start`}>
                                        <span className={`${styles['project-place']}`}>

                                            <i className="fas fa-map-pin"></i> العنوان </span>
                                        <span className={`${styles['sale-badge']}`}>متاح للبيع </span>
                                    </div>
                                </div>
                                <div className={`${styles['project-info']}`}>
                                    <a href="#" className={`${styles['project-title']}`}> وحده 1 </a>
                                    <div className={`${styles['project-description']}`}>
                                        <p>
                                            شقق فاخرة
                                        </p>
                                    </div>

                                </div>
                            </div>
                            <div className={`${styles['project-footer']}`}>
                                <ul className={`${styles['list-units-item']} d-flex align-items-center justify-content-evenly pt-3']}`}>
                                    <li> <i className="fas  fa-home" title=""></i>
                                        83
                                        وحدة
                                    </li>
                                    <li> <i className="fas fa-map-pin" title=""></i>
                                        حي الرمال
                                    </li>

                                    <li> <i className="fas  fa-percentage" title=""></i>
                                        45

                                        مباع
                                    </li>


                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles['col-lg-4']} col-lg-4 col-md-6 col-12 mb-4`}>
                        <div className={`${styles['project-item']}`}>
                            <div className={`${styles['project-body']}`}>
                                <div className={`${styles['project-img']}`}>
                                    <a href="#">
                                        <img src="/assets/images/004.jpg" className="img-fluid" alt="مكين 50" /></a>
                                    <div className={`${styles['project-badge']} w-100 d-flex align-items-center justify-content-start`}>
                                        <span className={`${styles['project-place']}`}>

                                            <i className="fas fa-map-pin"></i> العنوان </span>
                                        <span className={`${styles['sale-badge']}`}>متاح للبيع </span>
                                    </div>
                                </div>
                                <div className={`${styles['project-info']}`}>
                                    <a href="#" className={`${styles['project-title']}`}> وحده 1 </a>
                                    <div className={`${styles['project-description']}`}>
                                        <p>
                                            شقق فاخرة
                                        </p>
                                    </div>
                                </div>
                                
                            </div>
                            <div className={`${styles['project-footer']}`}>
                                <ul className={`${styles['list-units-item']} d-flex align-items-center justify-content-evenly pt-3']}`}>
                                    <li> <i className="fas  fa-home" title=""></i>
                                        83
                                        وحدة
                                    </li>
                                    <li> <i className="fas fa-map-pin" title=""></i>
                                        حي الرمال
                                    </li>

                                    <li> <i className="fas  fa-percentage" title=""></i>
                                        45

                                        مباع
                                    </li>


                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles['col-lg-4']} col-lg-4 col-md-6 col-12 mb-4`}>
                        <div className={`${styles['project-item']}`}>
                            <div className={`${styles['project-body']}`}>
                                <div className={`${styles['project-img']}`}>
                                    <a href="#">
                                        <img src="/assets/images/005.jpg" className="img-fluid" alt="مكين 42" /></a>
                                    <div className={`${styles['project-badge']} w-100 d-flex align-items-center justify-content-start`}>
                                        <span className={`${styles['project-place']}`}>

                                            <i className="fas fa-map-pin"></i> العنوان </span>
                                        <span className={`${styles['sale-badge']}`}>متاح للبيع </span>
                                    </div>
                                </div>
                                <div className={`${styles['project-info']}`}>
                                    <a href="#" className={`${styles['project-title']}`}> وحده 1 </a>
                                    <div className={`${styles['project-description']}`}>
                                        <p>
                                            فلل وادوار فاخرة
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={`${styles['project-footer']}`}>
                                <ul className={`${styles['list-units-item']} d-flex align-items-center justify-content-evenly pt-3']}`}>
                                    <li> <i className="fas  fa-home" title=""></i>
                                        83
                                        وحدة
                                    </li>
                                    <li> <i className="fas fa-map-pin" title=""></i>
                                        حي الرمال
                                    </li>

                                    <li> <i className="fas  fa-percentage" title=""></i>
                                        45

                                        مباع
                                    </li>


                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles['col-lg-4']} col-lg-4 col-md-6 col-12 mb-4`}>
                        <div className={`${styles['project-item']}`}>
                            <div className={`${styles['project-body']}`}>
                                <div className={`${styles['project-img']}`}>
                                    <a href="#">
                                        <img src="/assets/images/009.webp" className="img-fluid" alt="مكين 52" /></a>
                                    <div className={`${styles['project-badge']} w-100 d-flex align-items-center justify-content-start`}>
                                        <span className={`${styles['project-place']}`}>

                                            <i className="fas fa-map-pin"></i> العنوان </span>
                                        <span className={`${styles['sale-badge']}`}>متاح للبيع </span>
                                    </div>
                                </div>
                                <div className={`${styles['project-info']}`}>
                                    <a href="#" className={`${styles['project-title']}`}> وحده 1 </a>
                                    <div className={`${styles['project-description']}`}>
                                        <p>
                                            شقق وأدوار فاخرة
                                        </p>
                                    </div>

                                </div>
                            </div>
                            <div className={`${styles['project-footer']}`}>
                                <ul className={`${styles['list-units-item']} d-flex align-items-center justify-content-evenly pt-3']}`}>
                                    <li> <i className="fas  fa-home" title=""></i>
                                        83
                                        وحدة
                                    </li>
                                    <li> <i className="fas fa-map-pin" title=""></i>
                                        حي الرمال
                                    </li>

                                    <li> <i className="fas  fa-percentage" title=""></i>
                                        45

                                        مباع
                                    </li>


                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles['col-lg-4']} col-lg-4 col-md-6 col-12 mb-4`}>
                        <div className={`${styles['project-item']}`}>
                            <div className={`${styles['project-body']}`}>
                                <div className={`${styles['project-img']}`}>
                                    <a href="#">
                                        <img src="/assets/images/001.jpg" className="img-fluid" alt="مكين 47" /></a>
                                    <div className={`${styles['project-badge']} w-100 d-flex align-items-center justify-content-start`}>
                                        <span className={`${styles['project-place']}`}>

                                            <i className="fas fa-map-pin"></i> العنوان </span>
                                        <span className={`${styles['sale-badge']}`}>متاح للبيع </span>
                                    </div>
                                </div>
                                <div className={`${styles['project-info']}`}>
                                    <a href="#" className={`${styles['project-title']}`}> وحده 1 </a>
                                    <div className={`${styles['project-description']}`}>
                                        <p>
                                            شقق فاخرة
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={`${styles['project-footer']}`}>
                                <ul className={`${styles['list-units-item']} d-flex align-items-center justify-content-evenly pt-3']}`}>
                                    <li> <i className="fas  fa-home" title=""></i>
                                        83
                                        وحدة
                                    </li>
                                    <li> <i className="fas fa-map-pin" title=""></i>
                                        حي الرمال
                                    </li>

                                    <li> <i className="fas  fa-percentage" title=""></i>
                                        45

                                        مباع
                                    </li>


                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles['col-lg-4']} col-lg-4 col-md-6 col-12 mb-4`}>
                        <div className={`${styles['project-item']}`}>
                            <div className={`${styles['project-body']}`}>
                                <div className={`${styles['project-img']}`}>
                                    <a href="#">
                                        <img src="/assets/images/001.jpg" className="img-fluid" alt="مكين 46" /></a>
                                    <div className={`${styles['project-badge']} w-100 d-flex align-items-center justify-content-start`}>
                                        <span className={`${styles['project-place']}`}>

                                            <i className="fas fa-map-pin"></i> العنوان </span>
                                        <span className={`${styles['sale-badge']}`}>متاح للبيع </span>
                                    </div>
                                </div>
                                <div className={`${styles['project-info']}`}>
                                    <a href="#" className={`${styles['project-title']}`}> وحده 1 </a>
                                    <div className={`${styles['project-description']}`}>
                                        <p>
                                            شقق فاخرة
                                        </p>
                                    </div>

                                </div>
                            </div>
                            <div className={`${styles['project-footer']}`}>
                                <ul className={`${styles['list-units-item']} d-flex align-items-center justify-content-evenly pt-3']}`}>
                                    <li> <i className="fas  fa-home" title=""></i>
                                        83
                                        وحدة
                                    </li>
                                    <li> <i className="fas fa-map-pin" title=""></i>
                                        حي الرمال
                                    </li>

                                    <li> <i className="fas  fa-percentage" title=""></i>
                                        45

                                        مباع
                                    </li>


                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles['col-lg-4']} col-lg-4 col-md-6 col-12 mb-4`}>
                        <div className={`${styles['project-item']}`}>
                            <div className={`${styles['project-body']}`}>
                                <div className={`${styles['project-img']}`}>
                                    <a href="#">
                                        <img src="/assets/images/002.jpg" className="img-fluid" alt="مكين 35" /></a>
                                    <div className={`${styles['project-badge']} w-100 d-flex align-items-center justify-content-start`}>
                                        <span className={`${styles['project-place']}`}>

                                            <i className="fas fa-map-pin"></i> العنوان </span>
                                        <span className={`${styles['sale-badge']}`}>متاح للبيع </span>
                                    </div>
                                </div>
                                <div className={`${styles['project-info']}`}>
                                    <a href="#" className={`${styles['project-title']}`}> وحده 1 </a>
                                    <div className={`${styles['project-description']}`}>
                                        <p>
                                            شقق فاخرة
                                        </p>
                                    </div>

                                </div>
                            </div>
                            <div className={`${styles['project-footer']}`}>
                                <ul className={`${styles['list-units-item']} d-flex align-items-center justify-content-evenly pt-3']}`}>
                                    <li> <i className="fas  fa-home" title=""></i>
                                        83
                                        وحدة
                                    </li>
                                    <li> <i className="fas fa-map-pin" title=""></i>
                                        حي الرمال
                                    </li>

                                    <li> <i className="fas  fa-percentage" title=""></i>
                                        45

                                        مباع
                                    </li>


                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles['col-lg-4']} col-lg-4 col-md-6 col-12 mb-4`}>
                        <div className={`${styles['project-item']}`}>
                            <div className={`${styles['project-body']}`}>
                                <div className={`${styles['project-img']}`}>
                                    <a href="#">
                                        <img src="/assets/images/003.jpg" className="img-fluid" alt="مكين 53" /></a>
                                    <div className={`${styles['project-badge']} w-100 d-flex align-items-center justify-content-start`}>
                                        <span className={`${styles['project-place']}`}>

                                            <i className="fas fa-map-pin"></i> العنوان </span>
                                        <span className={`${styles['sale-badge']}`}>متاح للبيع </span>
                                    </div>
                                </div>
                                <div className={`${styles['project-info']}`}>
                                    <a href="#" className={`${styles['project-title']}`}> وحده 1 </a>
                                    <div className={`${styles['project-description']}`}>
                                        <p>
                                            ادوار فاخرة
                                        </p>
                                    </div>

                                </div>
                            </div>
                            <div className={`${styles['project-footer']}`}>
                                <ul className={`${styles['list-units-item']} d-flex align-items-center justify-content-evenly pt-3']}`}>
                                    <li> <i className="fas  fa-home" title=""></i>
                                        83
                                        وحدة
                                    </li>
                                    <li> <i className="fas fa-map-pin" title=""></i>
                                        حي الرمال
                                    </li>

                                    <li> <i className="fas  fa-percentage" title=""></i>
                                        45

                                        مباع
                                    </li>


                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles['col-lg-4']} col-lg-4 col-md-6 col-12 mb-4`}>
                        <div className={`${styles['project-item']}`}>
                            <div className={`${styles['project-body']}`}>
                                <div className={`${styles['project-img']}`}>
                                    <a href="#">
                                        <img src="/assets/images/009.webp" className="img-fluid" alt="مكين 51" /></a>
                                    <div className={`${styles['project-badge']} w-100 d-flex align-items-center justify-content-start`}>
                                        <span className={`${styles['project-place']}`}>

                                            <i className="fas fa-map-pin"></i> العنوان </span>
                                        <span className={`${styles['construction-badge']}`}>تحت الإنشاء </span>
                                    </div>
                                </div>
                                <div className={`${styles['project-info']}`}>
                                    <a href="#" className={`${styles['project-title']}`}> وحده 1 </a>
                                    <div className={`${styles['project-description']}`}>
                                        <p>
                                            مجمع تجاري وفندقي
                                        </p>
                                    </div>

                                </div>
                            </div>
                            <div className={`${styles['project-footer']}`}>
                                <ul className={`${styles['list-units-item']} d-flex align-items-center justify-content-evenly pt-3']}`}>
                                    <li> <i className="fas  fa-home" title=""></i>
                                        83
                                        وحدة
                                    </li>
                                    <li> <i className="fas fa-map-pin" title=""></i>
                                        حي الرمال
                                    </li>

                                    <li> <i className="fas  fa-percentage" title=""></i>
                                        45

                                        مباع
                                    </li>


                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles['col-lg-4']} col-lg-4 col-md-6 col-12 mb-4`}>
                        <div className={`${styles['project-item']}`}>
                            <div className={`${styles['project-body']}`}>
                                <div className={`${styles['project-img']}`}>
                                    <a href="#">
                                        <img src="/assets/images/009.webp" className="img-fluid" alt="مكين 56" /></a>
                                    <div className={`${styles['project-badge']} w-100 d-flex align-items-center justify-content-start`}>
                                        <span className={`${styles['project-place']}`}>

                                            <i className="fas fa-map-pin"></i> العنوان </span>
                                        <span className={`${styles['construction-badge']}`}>تحت الإنشاء </span>
                                    </div>
                                </div>
                                <div className={`${styles['project-info']}`}>
                                    <a href="#" className={`${styles['project-title']}`}> وحده 1 </a>
                                    <div className={`${styles['project-description']}`}>
                                        <p>
                                            شقق فاخرة
                                        </p>
                                    </div>

                                </div>
                            </div>
                            <div className={`${styles['project-footer']}`}>
                                <ul className={`${styles['list-units-item']} d-flex align-items-center justify-content-evenly pt-3']}`}>
                                    <li> <i className="fas  fa-home" title=""></i>
                                        83
                                        وحدة
                                    </li>
                                    <li> <i className="fas fa-map-pin" title=""></i>
                                        حي الرمال
                                    </li>

                                    <li> <i className="fas  fa-percentage" title=""></i>
                                        45

                                        مباع
                                    </li>


                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles['col-lg-4']} col-lg-4 col-md-6 col-12 mb-4`}>
                        <div className={`${styles['project-item']}`}>
                            <div className={`${styles['project-body']}`}>
                                <div className={`${styles['project-img']}`}>
                                    <a href="#">
                                        <img src="/assets/images/009.webp" className="img-fluid" alt="مكين 54" /></a>
                                    <div className={`${styles['project-badge']} w-100 d-flex align-items-center justify-content-start`}>
                                        <span className={`${styles['project-place']}`}>

                                            <i className="fas fa-map-pin"></i> العنوان </span>
                                        <span className={`${styles['construction-badge']}`}>تحت الإنشاء </span>
                                    </div>
                                </div>
                                <div className={`${styles['project-info']}`}>
                                    <a href="#" className={`${styles['project-title']}`}> وحده 1 </a>
                                    <div className={`${styles['project-description']}`}>
                                        <p>
                                            شقق تأجير
                                        </p>
                                    </div>

                                </div>
                            </div>
                            <div className={`${styles['project-footer']}`}>
                                <ul className={`${styles['list-units-item']} d-flex align-items-center justify-content-evenly pt-3']}`}>
                                    <li> <i className="fas  fa-home" title=""></i>
                                        83
                                        وحدة
                                    </li>
                                    <li> <i className="fas fa-map-pin" title=""></i>
                                        حي الرمال
                                    </li>

                                    <li> <i className="fas  fa-percentage" title=""></i>
                                        45

                                        مباع
                                    </li>


                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="title text-center mb-5">

                        <a href="#" className="btn btn-dark    ">
                            <i className="fa fa-plus"></i>
                            شاهد جميع المشاريع
                        </a>
                    </div>


                </div>

            </div>
        </section>
    </>);
}
export default ProjectComponent;
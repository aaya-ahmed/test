import React, { Fragment } from "react";
import './footer.css';
import { IRouter } from "@routes/IRouter.type";
const FooterComponent = ({routerList}:{routerList:IRouter[]}) => {
    return (<>
        <footer className="pt-5">
            <div className="container pb-5">
                <div className="row">
                    <div className="col-md-4">
                        <img src="/assets/images/logo.gif" 
                        className="logo-footer img-fluid w-75 mb-4" alt="LOGO" />
                        <p className="lines-5">
                            في عام 2010م وضعت شركةُ “أساس مكين للتطوير والاستثمار العقاري” أساسَ أول مشروعِ تطويرٍ عقاري لها، وعلى مدى ثلاثة عشر سنة حققت الشركة نجاحات رسخت اسم مكين في سوق التطوير العقاري
                        </p>
                    </div>
                    <div className="col-md-3">
                        <h5 className="title"> روابط سريعة  </h5>
                        <ul className="links">

                        {routerList?.map(
                        (route: any, index: number) => {
                            return <Fragment key={index}>
                                <li className={`nav-item ${index==0?'active':''}`} aria-current="page" >
                                    <a className="nav-link "  href={route.path}>{route.name}</a>
                                </li>
                            </Fragment>
                        }
                    )}
                        </ul>
                    </div>
                    <div className="col-md-5">
                        <h5 className="title">  ابقَ على اتصال دائما  </h5>
                        <a className="d-block mb-3" href="mailto:Info@asasmakeen.com"> <i className="far fa-envelope"></i> Info@asasmakeen.com
                        </a>
                        <a className="d-block mb-3" href="tel:920033"> <i className="fas fa-phone-volume"></i> 920033366 </a>

                        <h5 className="title">  العنوان  </h5>

                        <ul>
                            <li> شركة أساس مكين للتطوير والاستثمار العقاري - رقم السجل : 1010895854 - الرقم الضريبي : 310251874500013

                                2023 - العنوان : 4112 النرجس - طريق انس بن مالك - المنطقة الوسطى - الرياض 13327 </li>
                        </ul>

                        <ul className="social-media m-0 mt-4">


                            <li><a href="https://twitter.com/asas_maken" rel="noreferrer" target="_blank" aria-label="twitter"><i className="fa-brands fa-x-twitter"></i></a></li>
                            <li><a href="https://www.linkedin.com/company/asasmakeen/" rel="noreferrer" target="_blank" aria-label="linkedin"><i className="fab fa-linkedin-in"></i></a></li>
                            <li><a href="https://www.youtube.com/@AsasMakeen"rel="noreferrer" target="_blank" aria-label="youtube"><i className="fab fa-youtube"></i></a></li>
                            <li><a href="https://www.instagram.com/asas_maken/" rel="noreferrer" target="_blank" aria-label="instagram"><i className="fab fa-instagram"></i></a></li>
                            <li><a href="https://www.snapchat.com/add/asas_maken" target="_blank" rel="noreferrer" aria-label="snapchat"><i className="fab fa-snapchat"></i></a></li>

                        </ul>
                    </div>
                </div>
            </div>

            <div className="bottom-footer py-4 text-center">
                <p className="m-0"> جميع الحقوق محفوظة

                    -
                    تصميم وتطوير
                    <a href="https://expert-code.com/" style={{ color: "black" }}>Expert-Code</a>
                </p>
            </div>
        </footer>
    </>);
};
export default FooterComponent;
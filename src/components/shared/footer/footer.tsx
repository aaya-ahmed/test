import React, { Fragment } from "react";
import './footer.scss';
import { IRouter } from "@routes/IRouter.type";
const FooterComponent = ({routerList}:{routerList:any[]}) => {
    return (<>
        <footer className="pt-5">
            <div className="container pb-5">
                <div className="row">
                    <div className="col-md-4">
                        <img src="/assets/images/logo1.gif" 
                        className="logo-footer img-fluid w-100 mb-4" alt="LOGO" />
                        <p className="lines-5">
                        نحن متخصصون في توفير المنتجات العقارية المتوافقة مع مبادئ الشريعة الإسلامية

التي تشمل إدارة مشاريع التطوير العقاري، إدارة الممتلكات، المقاولات المعمارية، التسويق العقاري، والاستشارات العقارية.
                        </p>
                    </div>
                    <div className="col-md-3">
                        <h5 className="title"> روابط سريعة  </h5>
                        <ul className="links">

                        {routerList?.map(
                        (route: any, index: number) => {
                            return !route.protected&&(<Fragment key={index}>
                                <li className={`nav-item ${index==0?'active':''}`} aria-current="page" >
                                    <a className="nav-link "   href={`/${route.path}`}>{route.name}</a>
                                </li>
                            </Fragment>)
                        }
                    )}
                        </ul>
                    </div>
                    <div className="col-md-5">
                        <h5 className="title">  ابقَ على اتصال دائما  </h5>
                        <a className="d-block mb-3 contact-link" href="mailto:info@almouhaysni.com"> <i className="far fa-envelope"></i> info@almouhaysni.com
                        </a>
                        <a className="d-block mb-3 contact-link" href="tel:+966920027028"> <i className="fas fa-phone-volume"></i> 966920027028+ </a>

                        <h5 className="title">  العنوان  </h5>

                        <ul>
                            <li>مكة المكرمة - التخصصي - مبنى الغرفة التجارية - الدور الثالث - مكتب رقم 4 </li>
                        </ul>

                        <ul className="social-media m-0 mt-4">


                            <li><a href="https://twitter.com/almouhaysni" rel="noreferrer" target="_blank" aria-label="twitter"><i className="fa-brands fa-x-twitter"></i></a></li>
                            <li><a href="https://www.linkedin.com/company/almouhaysni/" rel="noreferrer" target="_blank" aria-label="linkedin"><i className="fab fa-linkedin-in"></i></a></li>
                            <li><a href="https://www.youtube.com/@almouhaysni"rel="noreferrer" target="_blank" aria-label="youtube"><i className="fab fa-youtube"></i></a></li>
                            <li><a href="https://www.instagram.com/almouhaysni/" rel="noreferrer" target="_blank" aria-label="instagram"><i className="fab fa-instagram"></i></a></li>
                            <li><a href="https://www.snapchat.com/add/almouhaysni" target="_blank" rel="noreferrer" aria-label="snapchat"><i className="fab fa-snapchat"></i></a></li>

                        </ul>
                    </div>
                </div>
            </div>

            <div className="bottom-footer py-4 text-center">
                <p className="m-0"> الحسيني@2024
                </p>
            </div>
        </footer>
    </>);
};
export default FooterComponent;
import { Link, NavLink, Outlet } from "react-router-dom";
import './dashboard-layout.scss';
import logo from './logo.png';
import routers from "../../../routes/router";
import Breadcrumb from "@shared/breadcrumb/breadcrumb";
import { useState } from "react";

const DashboardLayout = () => {
    const routerList = routers.find(p => p.path == '/dashboard').routes;
    const [active, setActive] = useState<string>();
    const setMobileView = () => {
        if (document.getElementById("layoutApp").classList.contains('mobile-view-layout'))
            document.getElementById("layoutApp").classList.remove('mobile-view-layout')
        else
            document.getElementById("layoutApp").classList.add('mobile-view-layout')
    }
    return <>
        <div id="layoutApp">
            <div className="sidebar-wrapper active ps ps--active-y">
                <div className="p-2">
                    <button onClick={setMobileView} className={`btn color-black close-btn`} style={{ outline: "none" }} type="button" aria-label="Toggle navigation" >
                        <i className={`fa-solid fa-bars-staggered`} id="menu-icon"></i>
                    </button>
                </div>
                <div className="sidebar-header position-relative">

                    <div className="d-flex justify-content-center align-items-center">
                        <div className="logo">
                            <a href="/">
                                <img src={logo} />
                            </a>
                        </div>
                        <div className="sidebar-toggler  x">
                            <a href="#" className="sidebar-hide d-xl-none d-block"><i className="bi bi-x bi-middle"></i></a>
                        </div>
                    </div>
                </div>
                <div className="sidebar-menu">
                    <ul className="menu">
                        <li className="sidebar-title">القائمه</li>
                        {
                            routerList.map((item, i) => {
                                return <li className="sidebar-item" key={i}>
                                    <Link
                                        to={`/dashboard/${item.path}`}
                                        className="sidebar-link"
                                        onClick={() => setActive(item.name)}
                                    >
                                        <span>{item.name}</span>
                                    </Link>
                                </li>
                            })
                        }


                    </ul>
                </div>
            </div>
            <div id="main">
                <div className="page-heading">
                    <div className="page-title">

                        <div className=" d-flex justify-content-between align-items-center">
                            <div className="p-0 d-flex justify-content-center align-items-center">
                                <button onClick={setMobileView} className={`navbar-toggler btn navbar-toggler  shadow-none ms-3`} style={{ outline: "none" }} type="button" aria-label="Toggle navigation" >
                                    <i className={`fa-solid fa-bars-staggered`} id="menu-icon"></i>
                                </button>
                            </div>
                            <Breadcrumb path={[{ name: 'الصفحه الرئيسيه', href: '/' }, { name: active, href: '' }]} />

                        </div>
                    </div>
                </div>
                <Outlet />

                <footer className="dashboard-footer">
                    <div className="footer clearfix mb-0">
                        <p>2024 © Elhosuini</p>
                    </div>
                </footer>
            </div>
        </div>
    </>
}
export default DashboardLayout;
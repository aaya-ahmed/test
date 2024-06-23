import { Link, NavLink, Outlet } from "react-router-dom";
import './dashboard-layout.scss';
import logo from './logo.png';
import routers from "../../../routes/router";

const DashboardLayout = () => {
    const routerList = routers.find(p => p.path == '/dashboard').routes;
    return <>
        <div id="app">
            <div id="sidebar" className="active">
                <div className="sidebar-wrapper active ps ps--active-y">
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
                                        <a
                                            href={`/dashboard/${item.path}`}
                                            className="sidebar-link"
                                            
                                        >
                                            <span>{item.name}</span>
                                        </a>
                                    </li>
                                })
                            }


                        </ul>
                    </div>
                </div>
            </div>
            <div id="main">
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
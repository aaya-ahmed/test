import { Fragment, useEffect, useState } from "react";
import styles from './headerComponent.module.scss';

const HeaderComponent = ({ routerList }: { routerList: any[] }) => {
    const[isLogin,setIsLogin]=useState<boolean>(false);
    useEffect(()=>{
        console.log(localStorage.getItem('token'))
        localStorage.getItem('token')&&setIsLogin(true)
    },[])
    const setMobileView=()=>{
        const classies=document?.getElementById('navbarNav');
        if(classies?.classList.contains(styles['open'])){
            classies.classList.remove(styles['open'])
        }
        else{
            classies?.classList.add(styles['open'])
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            const classies=document.getElementById('navbar-sticky');
            if(window.scrollY ==0){
                classies?.classList?.remove(styles['sticky']);
            }
            else{
                classies?.classList?.add(styles['sticky'])

            }
        })
    },[])
    return (<>
        <header className={`${styles['navigation-header']}`}>
            <nav className={`navbar navbar-sticky navbar-expand-lg ${styles['navbar-sticky']} ${styles['navbar-expand-lg']} ${styles['bg-body-tertiary']} bg-dark py-1`} id="navbar-sticky" data-bs-theme="dark">
                <div className={`d-flex w-100 justify-content-between mx-5 align-items-start ${styles['container']}`}>
                    <a className={`${styles['navbar-brand']}`} href="/" aria-label="Logo">
                        <img src="/assets/images/logo1.gif" className={`${styles['no_sticky']} ${styles['img-fluid']}`} alt="Logo" />
                        <img src="/assets/images/logo.gif" className={`${styles['sticky_logo']} ${styles['img-fluid']}`} alt="Logo" />
                    </a>
                    <div className={`${styles['mobile-view']} justify-content-center`} id="navbarNav">
                        <i className={`${styles['menu-close']} fa-solid fa-close fa-lg`} onClick={setMobileView}></i>
                        <img src="/assets/images/logo.gif" className={`${styles['mobile-logo']} w-75 m-auto d-block img-fluid d-none`} alt="Logo Mobile" />
                        <ul className={`navbar-nav ${styles['navbar-nav']} align-items-lg-center mt-4`}>
                        {routerList.filter(p=>!p.protected)?.map(
                        (route: any, index: number) => {
                            return <Fragment key={index}>
                                <li className={`nav-item ${styles['nav-item']} ${index==0?'active':''}`} aria-current="page" >
                                    <a className={`nav-link ${styles['nav-link']}`}  href={`/${route.path}`}>{route.name}</a>
                                </li>
                            </Fragment>
                        }
                    )}
                        </ul>
                    </div>
                    <div className={`${styles['header_actions']}  mt-4`}>
                        {!isLogin&&<a className={`btn btn-primary fw-bold btn_reg_fav rounded-5`} href="/inquiry" key={2}> سجل اهتمامك </a>}
                        {isLogin&&<a className={`btn btn-primary fw-bold btn_reg_fav rounded-5`} href="/dashboard" key={3}>بروفيل</a>}
                        <button className={`navbar-toggler btn btn-primary ${styles['navbar-toggler']}  shadow-none ms-3`} style={{outline:"none"}} type="button" aria-label="Toggle navigation" onClick={setMobileView}>
                            <i className={`fa-solid fa-bars-staggered`} id="menu-icon"></i>
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    </>);
}
export default HeaderComponent;
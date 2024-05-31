import React, { Fragment, useEffect } from "react";
import './headerComponent.css';

const HeaderComponent = ({ routerList }: { routerList: any[] }) => {
    const setMobileView=()=>{
        const classies=document?.getElementById('navbarNav');
        if(classies?.classList.contains('open')){
            classies.classList.remove('open')
        }
        else{
            classies?.classList.add('open')
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            console.log(window.scrollY)
            const classies=document.getElementById('navbar-sticky');
            if(window.scrollY ==0){
                classies?.classList?.remove("sticky");
            }
            else{
                classies?.classList?.add('sticky')

            }
        })
    },[])
    return (<>
        <header className="navigation-header">
            <nav className="navbar navbar-sticky navbar-expand-lg bg-body-tertiary bg-dark py-1" id="navbar-sticky" data-bs-theme="dark">
                <div className="container">
                    <a className="navbar-brand" href="/" aria-label="Logo">
                        <img src="/assets/images/logo.gif" className="no_sticky img-fluid" alt="Logo" />
                        <img src="/assets/images/logo.gif" className="sticky_logo img-fluid" alt="Logo" />
                    </a>
                    <div className="menu-mobile justify-content-center" id="navbarNav">
                        <i className="close_menu fa-solid fa-close fa-lg" onClick={setMobileView}></i>
                        <img src="/assets/images/logo.gif" className="logo-mobile w-75 m-auto d-block img-fluid d-none" alt="Logo Mobile" />
                        <ul className="navbar-nav align-items-lg-center">
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
                    <div className="header_actions">
                        <a className="btn btn-primary fw-bold btn_reg_fav rounded-5" href="#"> سجل اهتمامك </a>
                        <button className="navbar-toggler btn btn-primary shadow-none ms-3" style={{outline:"none"}} type="button" aria-label="Toggle navigation" onClick={setMobileView}>
                            <i className="fa-solid fa-bars-staggered" id="menu-icon"></i>
                        </button>
                    </div>
                </div>
            </nav>
        </header>
        <section className="home-banner position-relative">
            <div className="swiper banner-slides h-100 swiper-fade swiper-initialized swiper-horizontal swiper-pointer-events swiper-rtl swiper-watch-progress swiper-backface-hidden">
                <div className="swiper-wrapper" id="swiper-wrapper-78d96a8f3626e35e" aria-live="polite" 
                style={{transitionDuration: "0ms"}}
                >
                    <div className="swiper-slide swiper-slide-active swiper-slide-visible" role="group" aria-label="1 / 1" 
                    style={{opacity: "1", transform: 'translate3d(0px, 0px, 0px)', transitionDuration: '0ms'}}
                    >
                        <video playsInline={true} autoPlay={true} muted={true} loop={true} className="banner-video">
                            <source src="/assets/videos/001.mp4" type="video/mp4" />
                            Your browser does not support HTML5 video.
                        </video>
                        <div className="banner-content">
                            <div className="container">
                                <strong className="h1 d-block"> مكين أجود <span>  </span>
                                </strong>
                                <p> الريادة والتميز في التطوير العقاري </p>
                                <div className="d-flex align-items-center justify-content-lg-start justify-content-md-start justify-content-center mt-5">
                                    <a id="play-video" className="video-play-button" href="https://www.asasmakeen.com/frontend/assets/maken-02.mp4" aria-label="play-video" data-fancybox="">
                                        <i className="fas fa-play"></i>
                                    </a>
                                    <a href="#" className="btn btn-primary ms-5 fw-bold btn_reg_fav rounded-5">
                                        اكتشف مشاريعنا
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal swiper-pagination-bullets-dynamic swiper-pagination-lock" 
                style={{width: '40px'}}
                >
                    <span className="swiper-pagination-bullet swiper-pagination-bullet-active swiper-pagination-bullet-active-main" tabIndex={0} role="button" aria-label="Go to slide 1" aria-current="true" 
                    style={{right:'0px'}}
                    ></span></div>
                <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
        </section>
    </>);
}
export default HeaderComponent;
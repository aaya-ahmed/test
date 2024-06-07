import styles from'./header-banner.module.scss';
const HeaderBanner = () => {
    return (<>
        <section className={`${styles['header-banner']} position-relative`}>
            <div className={`h-100 swiper ${styles['banner-slides']} 
            ${styles['swiper-fade']} 
            ${styles['swiper-initialized']} 
            ${styles['swiper-horizontal']} 
            swiper-pointer-events
            swiper-rtl
            swiper-watch-progress
            swiper-backface-hidden`}>
                <div className={`swiper-wrapper`} id="swiper-wrapper" aria-live="polite"
                    style={{ transitionDuration: "0ms" }}
                >
                    <div className={`${styles['swiper-slide']} swiper-slide-active swiper-slide-visible`} role="group" aria-label="1 / 1"
                        style={{ opacity: "1", transform: 'translate3d(0px, 0px, 0px)', transitionDuration: '0ms' }}
                    >
                        <video playsInline={true} autoPlay={true} muted={true} loop={true} className={`${styles['banner-video']}`}>
                            <source src="/assets/videos/001.mp4" type="video/mp4" />
                            Your browser does not support HTML5 video.
                        </video>
                        <div className={`${styles['banner-content']}`}>
                            <div className="container">
                                <strong className="h1 d-block">  المحيسني <span>  </span>
                                </strong>
                                <p> الرائدة في مجال الاستثمار
                                والتطوير والتسويق العقاري </p>
                                <div className="d-flex align-items-center justify-content-lg-start justify-content-md-start justify-content-center mt-5">
                                    <a id="play-video" className={`${styles['play-button']}`} href="/assets/videos/001.mp4" aria-label="play-video" data-fancybox="">
                                        <i className="fas fa-play"></i>
                                    </a>
                                    <a href="#" className={`btn btn-primary ms-5 fw-bold btn_reg_fav rounded-5`}>
                                        اكتشف مشاريعنا
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal swiper-pagination-bullets-dynamic swiper-pagination-lock"
                    style={{ width: '40px' }}
                >
                    <span className="swiper-pagination-bullet swiper-pagination-bullet-active swiper-pagination-bullet-active-main" tabIndex={0} role="button" aria-label="Go to slide 1" aria-current="true"
                        style={{ right: '0px' }}
                    ></span></div>
                <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
        </section>
    </>)
}
export default HeaderBanner;
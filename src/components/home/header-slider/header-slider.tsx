import { Swiper, SwiperSlide } from "swiper/react"
import  styles from './header-slider.module.scss'
const HeaserSliderComponent=()=>{

    return <>
    <div className={`${styles['slider']}`}>
        <div className={`${styles['slider-item']}`}></div>
        <Swiper 
            grabCursor={true}
            autoplay={
                {
                    delay: 2500,
                }
            }
            className={`${styles['swiper']}`}
        >
            <SwiperSlide>
                <div className={`${styles['slider-item-img1']} ${styles['img']}`}></div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={`${styles['slider-item-img2']} ${styles['img']}`}></div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={`${styles['slider-item-img3']} ${styles['img']}`}></div>
            </SwiperSlide>
        </Swiper>
    </div>
    </>
}
export default HeaserSliderComponent;
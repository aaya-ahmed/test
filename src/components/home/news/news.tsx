import React, { Fragment } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import './news.css'
import { Navigation } from "swiper/modules";
const ar = [1, 2, 3, 4, 5, 6];

const NewsComponent = () => {
    return (<>
        <section className="sec-news">
            <div className="container">
                <div className="sec-title text-center mb-5">
                    <strong className="h1 fw-bold d-block text-title"> الأخبار </strong>
                </div>
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={50}
                    breakpoints={{
                        900: {
                            slidesPerView: 3,
                        },
                        450: {
                            slidesPerView: 2,
                        },
                        0: {
                            slidesPerView: 1,
                        },
                    }}

                    className={'news-item-slider'}
                    navigation
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    {ar.map((item, index) => {
                        return (
                            <>
                                <SwiperSlide>
                                    <div className="newitem">
                                        <div className="newimg">
                                            <a href="#">
                                                <img src="./assets/images/News.jpeg" className="img-fluid" alt="مشاركة أساس المحسني في شركة مساكن الطائف" />
                                                <i className="fas fa-external-link-alt fa-lg"></i>
                                            </a>
                                        </div>
                                        <div className="newinfo">
                                            <a href="/news" className="d-block title__news mb-2 mt-2">
                                                مشاركة أساس المحسني في شركة مساكن الطائف
                                            </a>
                                            <p className="newdesc">
                                                <i className="fa fa-calendar-check"></i>
                                                أقامت شركة أساس مكين جناحا تعريفيا لها في المقر
                                                الرئيسي لشركة ثقة التابعة لصندوق الاستثمارات العامة،
                                                وذلك خلال الفترة: 28-29 مايو، بمشاركة بنك الراجحي،
                                                وبنك ساب. #أساس_مكين أقامت شركة أساس مكين جناحا
                                                تعريفيا لها في المقر الرئيسي لشركة ثقة التابعة لصندوق
                                                الاستثمارات العامة، وذلك خلال الفترة: 28-29 مايو،
                                                بمشاركة بنك الراجحي، وبنك ساب. #أساس_مكين أقامت شركة
                                                أساس مكين جناحا تعريفيا لها في المقر الرئيسي لشركة ثقة
                                                التابعة لصندوق الاستثمارات العامة، وذلك خلال الفترة:
                                                28-29 مايو، بمشاركة بنك الراجحي، وبنك ساب. #أساس_مكين
                                                أقامت شركة أساس مكين جناحا تعريفيا لها في المقر
                                                الرئيسي لشركة ثقة التابعة لصندوق الاستثمارات العامة،
                                                وذلك خلال الفترة: 28-29 مايو، بمشاركة بنك الراجحي،
                                                وبنك ساب. #أساس_مكين

                                            </p>
                                            <a href="/news" className="link-more">  اقرأ المزيد
                                                <i className="fas fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </>
                        );
                    })}
                </Swiper>
            </div>

        </section>

    </>);
}
export default NewsComponent;
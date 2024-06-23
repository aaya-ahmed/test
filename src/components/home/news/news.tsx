import React, { Fragment, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import './news.css'
import { Navigation } from "swiper/modules";
import { useGetPagedData } from "../../../hooks/getpageddata";
import NewService from "../../../services/news.service";
const Service = new NewService();

const NewsComponent = () => {
    const[listData,setListData]=useState<any[]>([]);
    const [filter, setFilter] = useState<{filtring:{type:string,name:string,value:string}[]}>(
        {filtring:[]}
    );
    useGetPagedData(Service, 0, 10,filter,setListData);

    return (<>
        <section className="sec-news sec-news-background">
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
                    {listData?.map((item, index) => {
                        return (
                            <>
                                <SwiperSlide>
                                    <div className="newitem">
                                        <div className="newimg">
                                            <a href="#">
                                            <img className="img-fluid" src={`${process.env.REACT_APP_baseImageUrl}${item.attachments?.filter(p=>p.isMain)[0].attachmentUrl}`} alt={item.title}/>
                                                <i className="fas fa-external-link-alt fa-lg"></i>
                                            </a>
                                        </div>
                                        <div className="newinfo">
                                            <a href={`/news/${item.id}`} className="d-block title__news mb-2 mt-2">
                                                {item.title}
                                            </a>
                                            <p className="newdesc">
                                                <i className="fa fa-calendar-check"></i>
                                                {item.description}

                                            </p>
                                            <a href={`/news/${item.id}`} className="link-more">  اقرأ المزيد
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
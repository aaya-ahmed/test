import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './newItem.module.scss';
import { Autoplay, Grid, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import Breadcrumb from '../../../components/shared/breadcrumb/breadcrumb';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NewService from '../../../services/news.service';
import { Moment } from '@shared/moment';
const NewsItemMain = () => {
    const { id } = useParams();
    const[item,setItem]=useState<any>();
    const[imagesNew,setImagesNew]=useState<any>();
    useEffect(()=>{
        new NewService().GetById(+id).then(
            res=>{
                setItem(res)
                setImagesNew(res.attachments.filter(p=>!p.isMain))
            }
        )
    },[id])
    return (
        <>
            <section className={`${styles['sec-news']}`}>
                <div className={`${styles['sec-title']} text-center`}>
                    <strong className={`h1 fw-bold d-block ${styles['text-title']} `}>
                        الأخبار
                    </strong>
                </div>
                <Breadcrumb path={[{name:'الصفحه الرئيسيه',href:"/"},{name:'الاخبار',href:'/news'}]} />
                <div className="row p-0 justify-content-center container ms-auto">
                    <div className={`col-11 ${styles['blog_post_preview-new']} format-standard-image`}>
                        <div className="item_wrapper">
                            <div className={`${styles['blog_content']}`}>
                                <h2 className={`${styles['post_title']}`}>
                                    {item?.title}
                                    <Moment date={new Date(item?.createdDate)}/>
                                </h2>
                                <div className='row mt-3'>
                                <div className={`col-md-6 col-12  ${styles['post_media']} ${styles['blog_post_media-new']}`}>
                                        <img src={`${import.meta.env.VITE_baseImageUrl}${item?.attachments?.filter(p => p.isMain)[0].attachmentUrl}`} />
                                    </div>
                                    <div className={`col-lg-4 col-md-6 col-12 container ${styles['blog_item_description_new']}`}>
                                        {item?.description}
                                    </div>


                                </div>
                                {imagesNew&& (<div className={`${styles['post_media']} ${styles['blog_post_media-new']} w-100  my-5`}>
                                    <Swiper
                                        slidesPerView={3}
                                        spaceBetween={30}
                                        pagination={{
                                            clickable: true,
                                        }}
                                        autoplay={
                                            { delay: 2500 }
                                        }
                                        modules={[Autoplay, Pagination]}

                                    >
                                        {imagesNew.map((item, i) => {
                                            return (
                                                <SwiperSlide>
                                                    <img src={`${import.meta.env.VITE_baseImageUrl}${item?.attachmentUrl}`} />

                                                </SwiperSlide>
                                                )
                                        })}
                                    </Swiper>
                                </div>)}
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};
export default NewsItemMain;

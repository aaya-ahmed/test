import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './news.module.scss';
import { Autoplay, Grid, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
const NewsItem = ({item,setShow}:{item:any,setShow:(show:boolean)=>void}) => {
    return (
        <>
            <div className="row p-0 justify-content-center container ms-auto">
                <div className={`col-11 ${styles['blog_post_preview-new']} format-standard-image`}>
                    <div className="item_wrapper">
                        <div className={`${styles['blog_content']}`}>
                            <h2 className={`${styles['post_title']}`}>
                                   {item.title}
                                   <span>{item.createdDate}</span>
                            </h2>
                            <div className='d-flex mt-3 mb-5'>
                            <div className={`container ${styles['blog_item_description_new']}`}>
                               {item.description}
                            </div>
                            <div className={`${styles['post_media']} ${styles['blog_post_media-new']}`}>
                                <img src={`${import.meta.env.VITE_baseImageUrl}${item.attachments?.filter(p=>p.isMain)[0].attachmentUrl}`}/>
                            </div>

                            </div>
                            {item?.attachments&&(<div className={`${styles['post_media']} ${styles['blog_post_media-new']} w-100 my-5`}>
                                <Swiper 
                                 slidesPerView={3}
                                 spaceBetween={30}
                                 pagination={{
                                   clickable: true,
                                 }}
                                 autoplay={
                                    { delay:2500}
                                 }
                                 modules={[Autoplay, Pagination]}

                                >
                                   {item.attachments.map((item,i)=>{
                                    return (
                                    <SwiperSlide>
                                    <img src={`${import.meta.env.VITE_baseImageUrl}${item.attachmentUrl}`}/>

                                    </SwiperSlide>)
                                   })}
                                </Swiper>
                            </div>)}
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};
export default NewsItem;

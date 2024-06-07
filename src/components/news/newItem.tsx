import styles from './news.module.scss';
const NewsItem = ({setShow}:{setShow:(show:boolean)=>void}) => {
    return (
        <>
            <div className="row p-0 m-0 justify-content-center">
                <div className={`col-11 ${styles['blog_post_preview-new']} format-standard-image`}>
                    <div className="item_wrapper">
                        <div className="blog_content">
                            <h2 className={`${styles['post_title']}`}>
                                    مشاركة أساس المحسني في شركة مساكن الطائف
                            </h2>
                            <div className={`${styles['post_media']} ${styles['blog_post_media-new']}`}>
                                <img src="./assets/images/News.jpeg" alt="" />
                            </div>
                            <div className="listing_meta_wrap">
                                <div className="listing_meta">
                                    <span className="post_date my-2 text-primary">
                                        September 10, 2023
                                    </span>
                                </div>
                            </div>
                            <div
                                className={`${styles['blog_item_description_new']}my-2`}
                            >
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
                            </div>
                            <div className={`${styles['post_footer']} my-5`}>
                                <div className="module_button_list">
                                <button onClick={()=>{setShow(false)}}>{`رجوع >> `}</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};
export default NewsItem;

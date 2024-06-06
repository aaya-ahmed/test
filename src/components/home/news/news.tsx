import React, { Fragment } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import './news.css'
import { Navigation } from "swiper/modules";
const NewsComponent = () => {
    return (<>
        <section className="sec-news py-5">
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
                    <SwiperSlide>
                        <div className="newitem">
                            <div className="newimg">
                                <a href="#">
                                    <img src="https://www.asasmakeen.com/uploads/pages/D13MdL5mKQnDYjToW1Acg9YqDCnhuF4AqSJAmq1A.webp" className="img-fluid" alt="أساس مكين تحتفل باليوم الوطني 93 للمملكة العربية السعودية" />
                                    <i className="fas fa-external-link-alt fa-lg"></i>
                                </a>
                            </div>
                            <div className="newinfo">
                                <a href="https://www.asasmakeen.com/ar/news/d/28/%D8%A3%D8%B3%D8%A7%D8%B3-%D9%85%D9%83%D9%8A%D9%86-%D8%AA%D8%AD%D8%AA%D9%81%D9%84-%D8%A8%D8%A7%D9%84%D9%8A%D9%88%D9%85-%D8%A7%D9%84%D9%88%D8%B7%D9%86%D9%8A-93-%D9%84%D9%84%D9%85%D9%85%D9%84%D9%83%D8%A9-%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9-%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9" className="d-block title__news mb-2 mt-2">
                                    أساس مكين تحتفل باليوم الوطني 93 للمملكة العربية السعودية
                                </a>
                                <p className="newdesc">
                                    <i className="fa fa-calendar-check"></i>
                                    بحضور رئيس مجلس الإدارة والرئيس التنفيذي .. / بحضور رئيس مجلس الإدارة والرئيس التنفيذي ..

                                    أسرة #أساس_مكين بمشاركة منسوبيها يقيمون فعالية احتفالية بذكرى # عن مشاعرهم تجاه هذا اليوم وما يحمله من معانٍ عظيمة.
                                    #نحلم_ونحقق

                                    # ذكرى وشعار نزهو به فخرًا .. ونتغنى به مجدًا .. لأننا دائمًا # .
                                    #اساس_مكين

                                </p>
                                <a href="#" className="link-more">  اقرأ المزيد 
                                <i className="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="newitem">
                            <div className="newimg">
                                <a href="#">
                                    <img src="https://www.asasmakeen.com/uploads/pages/D13MdL5mKQnDYjToW1Acg9YqDCnhuF4AqSJAmq1A.webp" className="img-fluid" alt="أساس مكين تحتفل باليوم الوطني 93 للمملكة العربية السعودية" />
                                    <i className="fas fa-external-link-alt fa-lg"></i>
                                </a>
                            </div>
                            <div className="newinfo">
                                <a href="https://www.asasmakeen.com/ar/news/d/28/%D8%A3%D8%B3%D8%A7%D8%B3-%D9%85%D9%83%D9%8A%D9%86-%D8%AA%D8%AD%D8%AA%D9%81%D9%84-%D8%A8%D8%A7%D9%84%D9%8A%D9%88%D9%85-%D8%A7%D9%84%D9%88%D8%B7%D9%86%D9%8A-93-%D9%84%D9%84%D9%85%D9%85%D9%84%D9%83%D8%A9-%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9-%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9" className="d-block title__news mb-2 mt-2">
                                    أساس مكين تحتفل باليوم الوطني 93 للمملكة العربية السعودية
                                </a>
                                <p className="newdesc">
                                    <i className="fa fa-calendar-check"></i>
                                    بحضور رئيس مجلس الإدارة والرئيس التنفيذي .. / بحضور رئيس مجلس الإدارة والرئيس التنفيذي ..

                                    أسرة #أساس_مكين بمشاركة منسوبيها يقيمون فعالية احتفالية بذكرى # عن مشاعرهم تجاه هذا اليوم وما يحمله من معانٍ عظيمة.
                                    #نحلم_ونحقق

                                    # ذكرى وشعار نزهو به فخرًا .. ونتغنى به مجدًا .. لأننا دائمًا # .
                                    #اساس_مكين

                                </p>
                                <a href="#" className="link-more">  اقرأ المزيد 
                                <i className="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="newitem">
                            <div className="newimg">
                                <a href="#">
                                    <img src="https://www.asasmakeen.com/uploads/pages/D13MdL5mKQnDYjToW1Acg9YqDCnhuF4AqSJAmq1A.webp" className="img-fluid" alt="أساس مكين تحتفل باليوم الوطني 93 للمملكة العربية السعودية" />
                                    <i className="fas fa-external-link-alt fa-lg"></i>
                                </a>
                            </div>
                            <div className="newinfo">
                                <a href="https://www.asasmakeen.com/ar/news/d/28/%D8%A3%D8%B3%D8%A7%D8%B3-%D9%85%D9%83%D9%8A%D9%86-%D8%AA%D8%AD%D8%AA%D9%81%D9%84-%D8%A8%D8%A7%D9%84%D9%8A%D9%88%D9%85-%D8%A7%D9%84%D9%88%D8%B7%D9%86%D9%8A-93-%D9%84%D9%84%D9%85%D9%85%D9%84%D9%83%D8%A9-%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9-%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9" className="d-block title__news mb-2 mt-2">
                                    أساس مكين تحتفل باليوم الوطني 93 للمملكة العربية السعودية
                                </a>
                                <p className="newdesc">
                                    <i className="fa fa-calendar-check"></i>
                                    بحضور رئيس مجلس الإدارة والرئيس التنفيذي .. / بحضور رئيس مجلس الإدارة والرئيس التنفيذي ..

                                    أسرة #أساس_مكين بمشاركة منسوبيها يقيمون فعالية احتفالية بذكرى # عن مشاعرهم تجاه هذا اليوم وما يحمله من معانٍ عظيمة.
                                    #نحلم_ونحقق

                                    # ذكرى وشعار نزهو به فخرًا .. ونتغنى به مجدًا .. لأننا دائمًا # .
                                    #اساس_مكين

                                </p>
                                <a href="#" className="link-more">  اقرأ المزيد 
                                <i className="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="newitem">
                            <div className="newimg">
                                <a href="#">
                                    <img src="https://www.asasmakeen.com/uploads/pages/D13MdL5mKQnDYjToW1Acg9YqDCnhuF4AqSJAmq1A.webp" className="img-fluid" alt="أساس مكين تحتفل باليوم الوطني 93 للمملكة العربية السعودية" />
                                    <i className="fas fa-external-link-alt fa-lg"></i>
                                </a>
                            </div>
                            <div className="newinfo">
                                <a href="https://www.asasmakeen.com/ar/news/d/28/%D8%A3%D8%B3%D8%A7%D8%B3-%D9%85%D9%83%D9%8A%D9%86-%D8%AA%D8%AD%D8%AA%D9%81%D9%84-%D8%A8%D8%A7%D9%84%D9%8A%D9%88%D9%85-%D8%A7%D9%84%D9%88%D8%B7%D9%86%D9%8A-93-%D9%84%D9%84%D9%85%D9%85%D9%84%D9%83%D8%A9-%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9-%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9" className="d-block title__news mb-2 mt-2">
                                    أساس مكين تحتفل باليوم الوطني 93 للمملكة العربية السعودية
                                </a>
                                <p className="newdesc">
                                    <i className="fa fa-calendar-check"></i>
                                    بحضور رئيس مجلس الإدارة والرئيس التنفيذي .. / بحضور رئيس مجلس الإدارة والرئيس التنفيذي ..

                                    أسرة #أساس_مكين بمشاركة منسوبيها يقيمون فعالية احتفالية بذكرى # عن مشاعرهم تجاه هذا اليوم وما يحمله من معانٍ عظيمة.
                                    #نحلم_ونحقق

                                    # ذكرى وشعار نزهو به فخرًا .. ونتغنى به مجدًا .. لأننا دائمًا # .
                                    #اساس_مكين

                                </p>
                                <a href="#" className="link-more">  اقرأ المزيد 
                                <i className="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="newitem">
                            <div className="newimg">
                                <a href="#">
                                    <img src="https://www.asasmakeen.com/uploads/pages/D13MdL5mKQnDYjToW1Acg9YqDCnhuF4AqSJAmq1A.webp" className="img-fluid" alt="أساس مكين تحتفل باليوم الوطني 93 للمملكة العربية السعودية" />
                                    <i className="fas fa-external-link-alt fa-lg"></i>
                                </a>
                            </div>
                            <div className="newinfo">
                                <a href="https://www.asasmakeen.com/ar/news/d/28/%D8%A3%D8%B3%D8%A7%D8%B3-%D9%85%D9%83%D9%8A%D9%86-%D8%AA%D8%AD%D8%AA%D9%81%D9%84-%D8%A8%D8%A7%D9%84%D9%8A%D9%88%D9%85-%D8%A7%D9%84%D9%88%D8%B7%D9%86%D9%8A-93-%D9%84%D9%84%D9%85%D9%85%D9%84%D9%83%D8%A9-%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9-%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9" className="d-block title__news mb-2 mt-2">
                                    أساس مكين تحتفل باليوم الوطني 93 للمملكة العربية السعودية
                                </a>
                                <p className="newdesc">
                                    <i className="fa fa-calendar-check"></i>
                                    بحضور رئيس مجلس الإدارة والرئيس التنفيذي .. / بحضور رئيس مجلس الإدارة والرئيس التنفيذي ..

                                    أسرة #أساس_مكين بمشاركة منسوبيها يقيمون فعالية احتفالية بذكرى # عن مشاعرهم تجاه هذا اليوم وما يحمله من معانٍ عظيمة.
                                    #نحلم_ونحقق

                                    # ذكرى وشعار نزهو به فخرًا .. ونتغنى به مجدًا .. لأننا دائمًا # .
                                    #اساس_مكين

                                </p>
                                <a href="#" className="link-more">  اقرأ المزيد 
                                <i className="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="newitem">
                            <div className="newimg">
                                <a href="#">
                                    <img src="https://www.asasmakeen.com/uploads/pages/D13MdL5mKQnDYjToW1Acg9YqDCnhuF4AqSJAmq1A.webp" className="img-fluid" alt="أساس مكين تحتفل باليوم الوطني 93 للمملكة العربية السعودية" />
                                    <i className="fas fa-external-link-alt fa-lg"></i>
                                </a>
                            </div>
                            <div className="newinfo">
                                <a href="https://www.asasmakeen.com/ar/news/d/28/%D8%A3%D8%B3%D8%A7%D8%B3-%D9%85%D9%83%D9%8A%D9%86-%D8%AA%D8%AD%D8%AA%D9%81%D9%84-%D8%A8%D8%A7%D9%84%D9%8A%D9%88%D9%85-%D8%A7%D9%84%D9%88%D8%B7%D9%86%D9%8A-93-%D9%84%D9%84%D9%85%D9%85%D9%84%D9%83%D8%A9-%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9-%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9" className="d-block title__news mb-2 mt-2">
                                    أساس مكين تحتفل باليوم الوطني 93 للمملكة العربية السعودية
                                </a>
                                <p className="newdesc">
                                    <i className="fa fa-calendar-check"></i>
                                    بحضور رئيس مجلس الإدارة والرئيس التنفيذي .. / بحضور رئيس مجلس الإدارة والرئيس التنفيذي ..

                                    أسرة #أساس_مكين بمشاركة منسوبيها يقيمون فعالية احتفالية بذكرى # عن مشاعرهم تجاه هذا اليوم وما يحمله من معانٍ عظيمة.
                                    #نحلم_ونحقق

                                    # ذكرى وشعار نزهو به فخرًا .. ونتغنى به مجدًا .. لأننا دائمًا # .
                                    #اساس_مكين

                                </p>
                                <a href="#" className="link-more">  اقرأ المزيد 
                                <i className="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="newitem">
                            <div className="newimg">
                                <a href="#">
                                    <img src="https://www.asasmakeen.com/uploads/pages/D13MdL5mKQnDYjToW1Acg9YqDCnhuF4AqSJAmq1A.webp" className="img-fluid" alt="أساس مكين تحتفل باليوم الوطني 93 للمملكة العربية السعودية" />
                                    <i className="fas fa-external-link-alt fa-lg"></i>
                                </a>
                            </div>
                            <div className="newinfo">
                                <a href="https://www.asasmakeen.com/ar/news/d/28/%D8%A3%D8%B3%D8%A7%D8%B3-%D9%85%D9%83%D9%8A%D9%86-%D8%AA%D8%AD%D8%AA%D9%81%D9%84-%D8%A8%D8%A7%D9%84%D9%8A%D9%88%D9%85-%D8%A7%D9%84%D9%88%D8%B7%D9%86%D9%8A-93-%D9%84%D9%84%D9%85%D9%85%D9%84%D9%83%D8%A9-%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9-%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9" className="d-block title__news mb-2 mt-2">
                                    أساس مكين تحتفل باليوم الوطني 93 للمملكة العربية السعودية
                                </a>
                                <p className="newdesc">
                                    <i className="fa fa-calendar-check"></i>
                                    بحضور رئيس مجلس الإدارة والرئيس التنفيذي .. / بحضور رئيس مجلس الإدارة والرئيس التنفيذي ..

                                    أسرة #أساس_مكين بمشاركة منسوبيها يقيمون فعالية احتفالية بذكرى # عن مشاعرهم تجاه هذا اليوم وما يحمله من معانٍ عظيمة.
                                    #نحلم_ونحقق

                                    # ذكرى وشعار نزهو به فخرًا .. ونتغنى به مجدًا .. لأننا دائمًا # .
                                    #اساس_مكين

                                </p>
                                <a href="#" className="link-more">  اقرأ المزيد 
                                <i className="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="newitem">
                            <div className="newimg">
                                <a href="#">
                                    <img src="https://www.asasmakeen.com/uploads/pages/D13MdL5mKQnDYjToW1Acg9YqDCnhuF4AqSJAmq1A.webp" className="img-fluid" alt="أساس مكين تحتفل باليوم الوطني 93 للمملكة العربية السعودية" />
                                    <i className="fas fa-external-link-alt fa-lg"></i>
                                </a>
                            </div>
                            <div className="newinfo">
                                <a href="https://www.asasmakeen.com/ar/news/d/28/%D8%A3%D8%B3%D8%A7%D8%B3-%D9%85%D9%83%D9%8A%D9%86-%D8%AA%D8%AD%D8%AA%D9%81%D9%84-%D8%A8%D8%A7%D9%84%D9%8A%D9%88%D9%85-%D8%A7%D9%84%D9%88%D8%B7%D9%86%D9%8A-93-%D9%84%D9%84%D9%85%D9%85%D9%84%D9%83%D8%A9-%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9-%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9" className="d-block title__news mb-2 mt-2">
                                    أساس مكين تحتفل باليوم الوطني 93 للمملكة العربية السعودية
                                </a>
                                <p className="newdesc">
                                    <i className="fa fa-calendar-check"></i>
                                    بحضور رئيس مجلس الإدارة والرئيس التنفيذي .. / بحضور رئيس مجلس الإدارة والرئيس التنفيذي ..

                                    أسرة #أساس_مكين بمشاركة منسوبيها يقيمون فعالية احتفالية بذكرى # عن مشاعرهم تجاه هذا اليوم وما يحمله من معانٍ عظيمة.
                                    #نحلم_ونحقق

                                    # ذكرى وشعار نزهو به فخرًا .. ونتغنى به مجدًا .. لأننا دائمًا # .
                                    #اساس_مكين

                                </p>
                                <a href="#" className="link-more">  اقرأ المزيد 
                                <i className="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="newitem">
                            <div className="newimg">
                                <a href="#">
                                    <img src="https://www.asasmakeen.com/uploads/pages/D13MdL5mKQnDYjToW1Acg9YqDCnhuF4AqSJAmq1A.webp" className="img-fluid" alt="أساس مكين تحتفل باليوم الوطني 93 للمملكة العربية السعودية" />
                                    <i className="fas fa-external-link-alt fa-lg"></i>
                                </a>
                            </div>
                            <div className="newinfo">
                                <a href="https://www.asasmakeen.com/ar/news/d/28/%D8%A3%D8%B3%D8%A7%D8%B3-%D9%85%D9%83%D9%8A%D9%86-%D8%AA%D8%AD%D8%AA%D9%81%D9%84-%D8%A8%D8%A7%D9%84%D9%8A%D9%88%D9%85-%D8%A7%D9%84%D9%88%D8%B7%D9%86%D9%8A-93-%D9%84%D9%84%D9%85%D9%85%D9%84%D9%83%D8%A9-%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9-%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9" className="d-block title__news mb-2 mt-2">
                                    أساس مكين تحتفل باليوم الوطني 93 للمملكة العربية السعودية
                                </a>
                                <p className="newdesc">
                                    <i className="fa fa-calendar-check"></i>
                                    بحضور رئيس مجلس الإدارة والرئيس التنفيذي .. / بحضور رئيس مجلس الإدارة والرئيس التنفيذي ..

                                    أسرة #أساس_مكين بمشاركة منسوبيها يقيمون فعالية احتفالية بذكرى # عن مشاعرهم تجاه هذا اليوم وما يحمله من معانٍ عظيمة.
                                    #نحلم_ونحقق

                                    # ذكرى وشعار نزهو به فخرًا .. ونتغنى به مجدًا .. لأننا دائمًا # .
                                    #اساس_مكين

                                </p>
                                <a href="#" className="link-more">  اقرأ المزيد 
                                <i className="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

        </section>

    </>);
}
export default NewsComponent;
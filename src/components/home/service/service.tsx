import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './service.module.css'
import { Autoplay, EffectCards } from "swiper/modules";
import 'swiper/css/effect-cards';
import '../../shared/swiperCard.scss'
import { useEffect, useState } from 'react';
const services: { icon: string, header: string, body: string }[] = [
    {
        icon: "/assets/images/Real-Estate-Development-icon.png",
        header: 'التطوير العقاري',
        body: "تمكنت الشركة من إدراج اسمها في قائمة المطورين العقاريين المصنفين من قبل وزارة التجارة والصناعة من خلال مشروع فندق البدر اكرام 1. وتعتبر الشركة أول مطور عقاري بمكمة المكرمة"
    },
    {
        icon: "/assets/images/Establishment-of-real-estate-companies-icon.png",
        header: 'تأسيس الشركات العقارية',
        body: "قمنا بتاسيس العديد من الشريكات العقاريه بتخطيطا جيدًا و التزامنا بالإجراءات القانونية والتراخيص المطلوبة "
    },
    {
        icon: "/assets/images/Real-Estate-Investment-icon.png",
        header: 'الاستثمار العقاري',
        body: "نحن نكون حريصين علي تحديد المواقع المناسبة التي تساهم في تحقيق النجاح والاستدامة و التي تكون معتمده على دراسات متعمقة للسوق العقاري"
    },

    {
        icon: "/assets/images/Establishment-of-Owners'-Associations-icon.png",
        header: 'تأسيس جمعيات الملاك',
        body: "التفرد في المنتجات العقارية من خلال العناية بأدق التفاصيل والابتكار في التصاميم، والاستثمار الأمثل"
    },
    {
        icon: "/assets/images/Real-Estate-Marketing.png",
        header: 'التسويق العقاري',
        body: "شركة المحيسني توفر حلاً كاملاً في مجال العقارات، مُصممًا وفقًا لاحتياجاتك. تعمل الشركة على تسويق وتطوير مشاريعك العقارية"
    },
    {
        icon: "/assets/images/After-sales-project-management-icon.png",
        header: 'إدارة المشاريع لما بعد البيع',
        body: "نقدم خدمه لما بعد البيع لاننا حريصين علي رضا عملائنا و بناء الثقه بيننا و نقدم ارشادات حول صيانه الممتلكات و المعلومات الاساسيه الاخري"
    },

]
const ServiceComponent = () => {
    return (<>

        <section id="services" className={`pb-5`}>
            <div className="container">
                <div className={`text-center mb-5`}>
                    <strong className={`h1 fw-bold d-block ${styles['text-title']}`}> خدماتنا </strong>
                </div>
                <div className='swiperCard'>
                    <Swiper
                        modules={[EffectCards, Autoplay]}
                        effect={'cards'}
                        grabCursor={true}
                        autoplay={
                            {
                                delay: 2500,
                            }
                        }
                        initialSlide={3}
                        className={`${styles['swiper_container']} item-slider `}
                    >
                        {services.map((item) => {
                            return <>
                                <SwiperSlide>
                                    <div className={`${styles['services']}`}>
                                        <div className={`${styles['icon']}`}>
                                            <img src={item.icon} /></div>
                                        <div className={`${styles['text']}`}>
                                            <h4>{item.header}</h4>
                                            <p className="mb-0">{item.body}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </>
                        })}
                    </Swiper>
                </div>
            </div>
        </section>
    </>);
}
export default ServiceComponent;
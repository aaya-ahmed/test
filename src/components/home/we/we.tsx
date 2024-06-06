import React, { Fragment } from 'react';
import styles from './weComponent.module.scss';
const WeComponent = () => {
  return (
    <>
      <section className={`${styles['about']}`}>
        <div className="container">
          <div className={`row ${styles['row']} align-items-center justify-content-center`}>
            <div className={`col-lg-5 ${styles['col-lg-5']} ${styles['about-img']}`}>
            </div>
            <div className={`col-lg-6 ${styles['col-lg-6']}`}>
              <strong className={`${styles['title']} h2 d-block fw-bold mb-4`}> من نحن ؟ </strong>
              <p>
                نحن متخصصون في توفير المنتجات العقارية المتوافقة مع مبادئ
                الشريعة الإسلامية
              </p>
              <p>
                أنشطة الشركة تشمل إدارة مشاريع التطوير العقاري، إدارة الممتلكات،
                المقاولات المعمارية، التسويق العقاري، والاستشارات العقارية.
              </p>
              <div className={`${styles['aboutinfo']} mt-5`}>
                <div className={`${styles['item']} ps-3`}>
                  <strong className="d-block h4 ps-3"> رؤيتنا...</strong>
                  <p>
                    نحن نسعى إلى ترك بصمة واضحة على خارطة النمو والتطور العمراني
                    في المملكة العربية السعودية.
                  </p>
                </div>
                <div className={`${styles['item']} ps-3`}>
                  <strong className="d-block h4 ps-3"> رسالتنا...</strong>
                  <p>
                    بناء الثقة وتعزيز المصداقية من خلال التميز في تصميم وبناء
                    الوحدات السكنية بأعلى المواصفات وتقديم الضمانات
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default WeComponent;
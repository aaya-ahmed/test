import { useState } from 'react';
import NewsItem from './newItem';
import styles from './news.module.scss';
import NewsList from './newsList';
import Breadcrumb from '../shared/breadcrumb/breadcrumb';
const news = () => {
    const [showNew,SetShowNew]=useState<boolean>(false)
    const [New,SetNew]=useState<any>()
    const GoToNew=(newItem:any)=>{
        SetShowNew(true);
        SetNew(newItem);
    };
  return (
    <>
      <section className="sec-news">
        <div className={`${styles['sec-title']} text-center`}>
          <strong className={`h1 fw-bold d-block ${styles['text-title']} `}>
            الأخبار
          </strong>
        </div>
        <Breadcrumb path={[{name:'الصفحه الرئيسيه',href:"/"},{name:'الاخبار',href:'/news'}]}/>
        {showNew&&<NewsItem setShow={SetShowNew}/>}
        {!showNew&&<NewsList GoToNew={GoToNew}/>}
      </section>
    </>
  );
};
export default news;

import { useState } from 'react';
import NewsItem from './newItem';
import styles from './news.module.scss';
import NewsList from './newsList';
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
        <div className={`${styles['sec-title']} text-center mb-5`}>
          <strong className={`h1 fw-bold d-block ${styles['text-title']} `}>
            الأخبار
          </strong>
        </div>
        {showNew&&<NewsItem setShow={SetShowNew}/>}
        {!showNew&&<NewsList GoToNew={GoToNew}/>}
      </section>
    </>
  );
};
export default news;

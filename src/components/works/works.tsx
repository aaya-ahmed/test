import { useState } from 'react';
import styles from './works.module.scss'
import Breadcrumb from '../shared/breadcrumb/breadcrumb';
import WorkItem from './workItem';
import WorksList from './worksList';
const works = () => {
  const [showWork,setShowWork]=useState<boolean>(false)
  const [Work,SetWork]=useState<any>()
  const goToWork=(newItem:any)=>{
      setShowWork(true);
      SetWork(newItem);
  };
  return (
    <>
          <section>
        <div className={`${styles['sec-title']} text-center`}>
          <strong className={`h1 fw-bold d-block ${styles['text-title']} `}>
            مشاريعنا
          </strong>
        </div>
        <Breadcrumb path={[{name:'الصفحه الرئيسيه',href:"/"},{name:'اعمالنا',href:'/works'}]}/>
        <WorksList goToWork={goToWork} setShow={setShowWork}/>
      </section>
    </>
  );
};
export default works;

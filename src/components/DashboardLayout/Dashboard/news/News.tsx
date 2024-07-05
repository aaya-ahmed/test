import Breadcrumb from '../../../shared/breadcrumb/breadcrumb';
import { useState } from 'react';
import styles from './News.module.scss'
import NewsListComponent from './NewsList';
import NewService from '../../../../services/news.service';
import NewsFormComponent from './NewsForm';
const Service = new NewService();
const NewsComponent = () => {
    const [ShowForm, SetShowForm] = useState<boolean>(false)
    const [data, SetData] = useState<any>(null)
    const confirmDelete = () => {
        Service.Delete(data.id).then(res => SetData(null))
    }
    return (
        <>

            <section >
                <div className={`${styles['sec-new']}`}>
                    {!ShowForm && <div className={`${styles['btn-group']}`}>
                        <button className={`btn btn-success`}  onClick={() => {SetData(null);SetShowForm(true)}}>إضافه</button>
                        <button className={`btn btn-warning`} disabled={!data} onClick={() => SetShowForm(true)}>تعديل</button>
                        <button className={`btn btn-danger`} disabled={!data} onClick={confirmDelete}>حذف</button>
                    </div>}

                    {ShowForm && <NewsFormComponent setData={SetData} setShowForm={SetShowForm} data={data} />}
                    {!ShowForm && <NewsListComponent setData={SetData} data={data}/>}
                </div>
            </section>
        </>
    );
};
export default NewsComponent;

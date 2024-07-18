import { useState } from 'react';
import NewsListComponent from './NewsList';
import NewService from '../../../../services/news.service';
import NewsFormComponent from './NewsForm';
import { Notification } from '@shared/notification';
const Service = new NewService();
const NewsComponent = () => {
    const [ShowForm, SetShowForm] = useState<boolean>(false)
    const [data, SetData] = useState<any>(null);
    const [refetch, SetRefetch] = useState<boolean>(false);
    const confirmDelete = () => {
        Service.Delete(data.id).then(res => {
            SetRefetch(true);
            SetData(null);
            setTimeout(() => {
                SetRefetch(false);
            }, 100);
        }).catch(err=>{
            Notification({
                title:'فشل الحذف',
                type:'error'
            })
        });
    }
    return (
        <>
            <section >
                <div className={`m-5 position-relative`}>
                    {!ShowForm && <div className={`btn-group`}>
                        <button className={`btn btn-success`}  onClick={() => {SetData(null);SetShowForm(true)}}>إضافه</button>
                        <button className={`btn btn-warning`} disabled={!data} onClick={() => SetShowForm(true)}>تعديل</button>
                        <button className={`btn btn-danger`} disabled={!data} onClick={confirmDelete}>حذف</button>
                    </div>}

                    {ShowForm && <NewsFormComponent setData={SetData} setShowForm={SetShowForm} data={data} />}
                    {!ShowForm && <NewsListComponent setData={SetData} refetch={refetch}/>}
                </div>
            </section>
        </>
    );
};
export default NewsComponent;

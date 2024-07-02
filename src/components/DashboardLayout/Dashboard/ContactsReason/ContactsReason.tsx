import Breadcrumb from '../../../shared/breadcrumb/breadcrumb';
import { useEffect, useState } from 'react';
import styles from './ContactsReason.module.scss'
import ContactsReasonFormComponent from './ContactsReasonForm';
import ContactsReasonListComponent from './ContactsReasonList';
import ContactReasonService from '../../../../services/contact-reason.service';
const Service = new ContactReasonService();
const ContactsReasonComponent = () => {
    const [ShowForm, SetShowForm] = useState<boolean>(false)
    const [data, SetData] = useState<any>(null)
    const confirmDelete = () => {
        Service.Delete(data.id).then(res => SetData(null))
    }
    return (
        <>
            <div className="page-heading">
                <div className="page-title">
                    <div className="row">
                        <div className="col-12">
                            <Breadcrumb path={[{ name: 'الصفحه الرئيسيه', href: "/" }, { name: 'اسباب التواصل', href: '' }]} />
                        </div>
                    </div>
                </div>
            </div>
            <section >
                <div className={`${styles['sec-ContactReason']}`}>
                    {!ShowForm && <div className={`${styles['btn-group']}`}>
                        <button className={`btn btn-success`} disabled={data} onClick={() => {SetData(null);SetShowForm(true)}}>إضافه</button>
                        <button className={`btn btn-warning`} disabled={!data} onClick={() => SetShowForm(true)}>تعديل</button>
                        <button className={`btn btn-danger`} disabled={!data} onClick={confirmDelete}>حذف</button>
                    </div>}

                    {ShowForm && <ContactsReasonFormComponent setShowForm={SetShowForm} data={data} setData={SetData}/>}
                    {!ShowForm&& <ContactsReasonListComponent setData={SetData} />}
                </div>
            </section>
        </>
    );
};
export default ContactsReasonComponent;

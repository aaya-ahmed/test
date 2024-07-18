import { useState } from 'react';
import ContactsReasonFormComponent from './ContactsReasonForm';
import ContactsReasonListComponent from './ContactsReasonList';
import ContactReasonService from '../../../../services/contact-reason.service';
import { Notification } from '@shared/notification';
import { contactreason } from './ContactsReason.types';
const Service = new ContactReasonService();
const ContactsReasonComponent = () => {
    const [ShowForm, SetShowForm] = useState<boolean>(false)
    const [data, SetData] = useState<contactreason>(null)
    const [refetch, SetRefetch] = useState<boolean>(false)
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
                        <button className={`btn btn-success`} onClick={() => { SetData(null); SetShowForm(true) }}>إضافه</button>
                        <button className={`btn btn-warning`} disabled={!data} onClick={() => SetShowForm(true)}>تعديل</button>
                        <button className={`btn btn-danger`} disabled={!data} onClick={confirmDelete}>حذف</button>
                    </div>}

                    {ShowForm && <ContactsReasonFormComponent setShowForm={SetShowForm} data={data} setData={SetData} />}
                    {!ShowForm && <ContactsReasonListComponent setData={SetData} refetch={refetch} />}
                </div>
            </section>
        </>
    );
};
export default ContactsReasonComponent;

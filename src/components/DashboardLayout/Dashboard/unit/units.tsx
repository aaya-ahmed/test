import { useState } from 'react';
import UnitService from '../../../../services/units.service';
import UnitsFormComponent from './unit-form';
import UnitsListComponent from './unit-list';
import { Notification } from '@shared/notification';
const Service = new UnitService();
const UnitsComponent = () => {
    const [ShowForm, SetShowForm] = useState<boolean>()
    const [data, SetData] = useState<any>(null)
    const [refetch, SetRefetch] = useState<boolean>()
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
                <div className={`mx-5 my-2 position-relative`}>
                    {!ShowForm && <div className={`btn-group`}>
                        <button className={`btn btn-success`}  onClick={() => {SetData(null);SetShowForm(true)}}>إضافه</button>
                        <button className={`btn btn-warning`} disabled={!data} onClick={() => SetShowForm(true)}>تعديل</button>
                        <button className={`btn btn-danger`} disabled={!data} onClick={confirmDelete}>حذف</button>
                    </div>}

                    {ShowForm && <UnitsFormComponent
                     setData={SetData} setShowForm={SetShowForm} data={data} 
                    />}
                    {!ShowForm && <UnitsListComponent refetch={refetch}
                    setData={SetData} data={data}
                  />}
                </div>
            </section>
        </>
    );
};
export default UnitsComponent;

import { useState } from 'react';
import ProjectService from '../../../../services/projects.service';
import ProjectsFormComponent from './project-form';
import ProjectsListComponent from './project-list';
import { Notification } from '@shared/notification';
const Service = new ProjectService();
const ProjectsComponent = () => {
    const [ShowForm, SetShowForm] = useState<boolean>(false)
    const [data, SetData] = useState<any>(null)
    const [refetch, SetRefetch] = useState<any>(null)
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

                    {ShowForm && <ProjectsFormComponent
                     setData={SetData} setShowForm={SetShowForm} data={data} 
                    />}
                    {!ShowForm && <ProjectsListComponent 
                    setData={SetData} data={data} refetch={refetch}
                    />}
                </div>
            </section>
        </>
    );
};
export default ProjectsComponent;

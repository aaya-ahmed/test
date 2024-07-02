import Breadcrumb from '../../../shared/breadcrumb/breadcrumb';
import { useState } from 'react';
import styles from '../news/News.module.scss'
import ProjectService from '../../../../services/projects.service';
import projectsFormComponent from './project-form';
import ProjectsFormComponent from './project-form';
import ProjectsListComponent from './project-list';
const Service = new ProjectService();
const ProjectsComponent = () => {
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
                            <Breadcrumb path={[{ name: 'الصفحه الرئيسيه', href: '/' }, { name: 'المشاريع', href: '' }]} />
                        </div>
                    </div>
                </div>
            </div>
            <section >
                <div className={`${styles['sec-new']}`}>
                    {!ShowForm && <div className={`${styles['btn-group']}`}>
                        <button className={`btn btn-success`}  onClick={() => {SetData(null);SetShowForm(true)}}>إضافه</button>
                        <button className={`btn btn-warning`} disabled={!data} onClick={() => SetShowForm(true)}>تعديل</button>
                        <button className={`btn btn-danger`} disabled={!data} onClick={confirmDelete}>حذف</button>
                    </div>}

                    {ShowForm && <ProjectsFormComponent
                     setData={SetData} setShowForm={SetShowForm} data={data} 
                    />}
                    {!ShowForm && <ProjectsListComponent 
                    setData={SetData} data={data}
                    />}
                </div>
            </section>
        </>
    );
};
export default ProjectsComponent;

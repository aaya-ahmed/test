import { useEffect, useState } from "react";
import ProjectFeatureForm from "./project-feature-form";
import ProjectFeatureList from "./project-feature-list";
import FeatureProjectService from "../../../../services/feature-project.service";
import { Notification } from "@shared/notification";
const Service=new FeatureProjectService();
export default function ProjectFeaturesComponent(){
    const [ShowForm, SetShowForm] = useState<boolean>()
    const [data, SetData] = useState<any>(null)
    const [refetch, SetRefetch] = useState<boolean>()
    const [filter, setFilter] = useState<{filtring:{type:string,name:string,value:string}[]}>(
        {filtring:[]}
    );
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
                        <button className={`btn btn-success`} onClick={() => {SetData(null);SetShowForm(true)}}>إضافه</button>
                        <button className={`btn btn-warning`} disabled={!data} onClick={() => SetShowForm(true)}>تعديل</button>
                        <button className={`btn btn-danger`} disabled={!data} 
                        onClick={confirmDelete}
                        >حذف</button>
                    </div>}

                    {ShowForm && <ProjectFeatureForm setShowForm={SetShowForm} data={data} setData={SetData}/>}
                    {!ShowForm&& <ProjectFeatureList setData={SetData} filter={filter} refetch={refetch}/>}
                </div>
            </section>
        </>
    );
}
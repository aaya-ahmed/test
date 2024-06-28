import { useEffect, useState } from "react";
import ProjectFeatureForm from "./project-feature-form";
import ProjectFeatureList from "./project-feature-list";
import FeatureProjectService from "../../../../services/feature-project.service";
import  styles  from "../ContactsReason/ContactsReason.module.scss";
import Breadcrumb from "../../../shared/breadcrumb/breadcrumb";
const Service=new FeatureProjectService();
export default function ProjectFeaturesComponent(){
    const [ShowForm, SetShowForm] = useState<boolean>(false)
    const [data, SetData] = useState<any>(null)
    useEffect(()=>{

        document.onclick= function(event:any) {
            var target= 'target' in event? event.target : event.srcElement;
            if(!target.classList.contains('data-table')){
                SetData(null)
            }
        };
    },[])
    const [filter, setFilter] = useState<{filtring:{type:string,name:string,value:string}[]}>(
        {filtring:[]}
    );
    const confirmDelete = () => {
        Service.Delete(data.id).then(res => {SetData(null);setFilter({filtring:[]})})
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
                        <button className={`btn btn-success`} disabled={data} onClick={() => {SetData(null);SetShowForm(true)}}>Add</button>
                        <button className={`btn btn-warning`} disabled={!data} onClick={() => SetShowForm(true)}>Edit</button>
                        <button className={`btn btn-danger`} disabled={!data} 
                        onClick={confirmDelete}
                        >Delete</button>
                    </div>}

                    {ShowForm && <ProjectFeatureForm setShowForm={SetShowForm} data={data} setData={SetData}/>}
                    {!ShowForm&& <ProjectFeatureList setData={SetData} filter={filter}/>}
                </div>
            </section>
        </>
    );
}
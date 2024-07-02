import { useGetPagedData } from "../../../../hooks/getpageddata";
import { Fragment, useState } from "react";
import FeatureProjectService from "../../../../services/feature-project.service";
import  styles  from "../ContactsReason/ContactsReason.module.scss";
import FeaturesComponent from "./project-feature-viewer";

const Service = new FeatureProjectService();
type ProjectFeatureListProp = {
    setData: (data: any) => void,
    filter:{filtring:{type:string,name:string,value:string}[]},
}

export default function ProjectFeatureList({setData,filter}:ProjectFeatureListProp){
    const[listData,setListData]=useState<any[]>([]);
    const {
        page,
        itemPerPage,
        goToNextPage,
        goToPrevPage,
    } = useGetPagedData(Service, 0, 10,filter,setListData);
    const[project,setProject]=useState<any>()
    const showFeatures=(item)=>{
        setProject(item)
    }
    return<>
        <div className="row w-100">
            {listData?.map((item, i) => {
                return <Fragment key={i}>
                        <div className={`col-12 my-3 ${styles['ContactsReason-item']} data-table`} onClick={()=>setData(item)}>
                            <div className={`d-flex justify-content-between data-table`}>
                                <p>{item?.name}</p>
                                <button className="bg-transberent border-0" onClick={()=>showFeatures(item)}><i className="fa-solid fa-display"></i></button>
                            </div>
                        </div>
                </Fragment>
            })}

        </div>
        {project&&<FeaturesComponent project={project} setProject={setProject}/>}
        <div className={`${styles['ContactsReason_footer']}`}>
            <button id={"next"} className={`btn ${styles['next-btn']}`} onClick={goToNextPage} disabled={listData&&listData?.length < itemPerPage}>التالي</button>
            <button id={"prev"} className={`btn ${styles['prev-btn']}`} onClick={goToPrevPage} disabled={page == 0}>السابق</button>
        </div>
    </>
}
import { Pagination } from "react-bootstrap";
import styles from './works.module.scss'
import ProjectStyle from '../home/projects/project.module.scss'
import { Fragment } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import GetProjectService from "../../services/get-projects.service copy";
import { useGetPagedData } from "../../hooks/getpageddata";
import { salestatus } from "../shared/const/saleStatus";
const Service=new GetProjectService();

const WorksList = ({ goToWork }: { goToWork: (item: any) => void, setShow: (show: boolean) => void }) => {
  const[data,setData]=useState<any[]>([]);
  const[status,setStatus]=useState<number>(-1);

  const [filter, setFilter] = useState<{filtring:{type:string,name:string,value:string}[]}>(
      {filtring:[{
        name: "status",
        type: 'Number',
        value: '1'
    }]}
  );
  useGetPagedData(Service, 0, 10,filter,false,setData);
  useEffect(()=>{
    if(status!=-1)
    {filter.filtring[0].value=`${status}`;
  setFilter({...filter})}
  },[status])
  return <>

    <div className={`${styles['sec-projects']} container`}>
      <ul className={`${styles['filter-projects']} d-flex align-items-center justify-content-center`}>
        <li>
          <button
            className=""
            style={{ backgroundColor: '#003f3f', color: '#fff;' }}
            onClick={()=>{setStatus(1)}}
          >
            <i className="fa-solid fa-building-circle-exclamation"></i> تحت
            الإنشاء
          </button>
        </li>
        <li>
          <button
            className=""
            style={{ backgroundColor: '#003f3f', color: '#fff' }}
            onClick={()=>{setStatus(2)}}
          >
            <i className="fa-solid fa-building-circle-check"></i> متاح للبيع
          </button>
        </li>
        <li className={`${styles['slash']}`}>/</li>
        <li>
          <button
            className=""
            style={{ backgroundColor: '#003f3f', color: '#fff;' }}
            onClick={()=>{setStatus(3)}}
          >
            <i className="fa-solid fa-building-circle-xmark"></i> مباع
            بالكامل
          </button>
        </li>
        <li className={`${styles['slash']}`}>/</li>
        <li>
          <button
            className=""
            style={{ backgroundColor: '#003f3f', color: '#fff;' }}
            onClick={()=>{setStatus(4)}}
          >
            <i className="fa-solid fa-building-circle-check"></i> 
            متاح للايجار
          </button>
        </li>
      </ul>
    </div>
    <div className="row container m-auto">
      {data?.map((item, i) => <Fragment key={i}>
        <div className={`${ProjectStyle['col-lg-4']} col-lg-4 col-md-6 col-12 mb-4`}>
          <div className={`${ProjectStyle['project-item']}`}>
            <div className={`${ProjectStyle['project-body']}`}>
              <div className={`${ProjectStyle['project-img']}`}>
                <a href={`/work/${item.id}/${item.name}/${item.status}`}>
                  <img src={`${import.meta.env.VITE_baseImageUrl}${item.mainImage}`} className="img-fluid" alt="مكين 34" />
                </a>
                <div className={`${ProjectStyle['project-badge']} w-100 d-flex align-items-center justify-content-start`}>
                  <span className={`${ProjectStyle['project-place']}`}>
                    <i className="fas fa-map-pin"></i> {item.address} </span>
                  <span className={`${item?.status == 0 ? ProjectStyle['sale-badge'] : ProjectStyle['construction-badge']}`}> {salestatus[item.status]} </span>
                </div>
              </div>
              <div className={`${ProjectStyle['project-info']}`}>
              <a href={`/work/${item.id}/${item.name}/${item.status}`} className={`${styles['project-title']}`}> وحده 1 </a>
                <div className={`${ProjectStyle['project-description']}`}>
                  <p>
                    {item.description}
                  </p>
                </div>
              </div>
            </div>

            <div className={`${ProjectStyle['project-footer']}`}>
              <ul className={`${ProjectStyle['list-units-item']} d-flex align-items-center justify-content-evenly pt-3']}`}>
                <li> <i className="fas  fa-home" title=""></i>
                  {item.numberOfUnits}
                  وحدة
                </li>
                <li> <i className="fas fa-map-pin" title=""></i>
                  {item.address}
                </li>

                <li> <i className="fas  fa-percentage" title=""></i>
                  {item.salePrecentage}

                  مباع
                </li>


              </ul>
            </div>
          </div>
        </div>
      </Fragment>)}
    </div>
  </>
}
export default WorksList;
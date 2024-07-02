import styles from '../news/News.module.scss'
import { Fragment, useEffect, useState } from "react";
import { useGetPagedData } from '../../../../hooks/getpageddata';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import UnitService from '../../../../services/units.service';
import ProjectService from '@services/projects.service';

const Service = new UnitService();

const UnitsListComponent = (
    { setData,data }: {setData: (data: any) => void,data:any}
) => {
    const[listData,setListData]=useState<any[]>([]);

    const [filter, setFilter] = useState<{filtring:{type:string,name:string,value:string}[]}>(
        {filtring:[{
            name:"Name",
            type:'String',
            value:null
        }]}
    );
    const {
        page,
        itemPerPage,
        goToNextPage,
        goToPrevPage,
    } = useGetPagedData(Service, 0, 10,filter,setListData);
    const [projects, setProjects] = useState<any[]>([]);
    useEffect(() => {
        new ProjectService().Get().then(
            res => {
                setProjects(res)
            }
        )
    }, []);
    // // const [message, setMessage] = useState<any>();
    // // const [reasons, setReasons] = useState<any[]>()
    // // useEffect(() => {
    // //     new ContactReasonService().Get().then(
    // //         res => {
    // //             setReasons(res)
    // //         }
    // //     )
    // // }, [])
    useEffect(()=>{
        if(data==null){
            filter.filtring[0].value=null;
            setFilter({...filter})
        }
    },[data])
    const getData = (e) => {
        filter.filtring[0].value=e.target.value==-1?null:e.target.value;
        setFilter({...filter})
    }
    return <>
        <div className="d-flex justify-content-end align-items-baseline my-4 col-3">

            <label className="mx-2 form-label ">
                <FontAwesomeIcon icon={faFilter} color='hsla(177, 18%, 26%)' /></label>
                <select className={`form-control`} name="projectId" onChange={getData}>
                        {projects?.map(item => {
                            return <option value={item.id}>{item.name}</option>
                        })}
                    </select>
        </div>
        <div className="row justifiy-content-center my-2">
            {listData?.map((item, i) => {
                return <Fragment key={i}>
                    <div className={`col-12 my-3 ${styles['new']}`} 
                    onClick={() => setData(item)}
                    >
                        <div className={`${styles['new-item']}`}>
                            <div>
                                <img src={`${import.meta.env.VITE_baseImageUrl}${item.imageUrl}`}/>
                            </div>
                            <div className={`${styles['new-body']}`}>
                                <p className={"d-flex justify-content-between m-0"}>
                                    <strong>{item?.name}</strong>
                                    <i>{item?.price}</i>
                                </p>
                                <p className='m-0 text-'>{item?.insurance}</p>
                                <p>{item?.description}</p>
                            </div>
                        </div>
                    </div>
                </Fragment>
            })}
            <div className={`${styles['new_footer']}`}>
                <button id={"next"} className={`btn ${styles['next-btn']}`} onClick={goToNextPage} disabled={listData && listData?.length < itemPerPage}>التالي</button>
                <button id={"prev"} className={`btn ${styles['prev-btn']}`} onClick={goToPrevPage} disabled={page == 0}>السابق</button>
            </div>
        </div>

        {/* {message && <ResponceComponent message={message} setMessage={setMessage} />} */}
    </>
}
export default UnitsListComponent;
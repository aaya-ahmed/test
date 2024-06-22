import styles from './News.module.scss'
import { Fragment, useEffect, useState } from "react";
import NewService from '../../../../services/news.service';
import { useGetPagedData } from '../../../../hooks/getpageddata';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

const Service = new NewService();

const NewsListComponent = ({ setData,data }: {setData: (data: any) => void,data:any}) => {
    const [filter, setFilter] = useState<{type:string,name:string,value:string}[]>(
        [{
            name:"Title",
            type:'String',
            value:null
        }]
    );
    const {
        page,
        itemPerPage,
        listData,
        goToNextPage,
        goToPrevPage,
    } = useGetPagedData(Service, 0, 10,filter);
    // const [message, setMessage] = useState<any>();
    // const [reasons, setReasons] = useState<any[]>()
    // useEffect(() => {
    //     new ContactReasonService().Get().then(
    //         res => {
    //             setReasons(res)
    //         }
    //     )
    // }, [])
    useEffect(()=>{
        if(data==null){
            filter[0].value=null;
            setFilter([...filter])
        }
    },[data])
    const getData = (e) => {
        console.log(e.target.value)
        filter[0].value=e.target.value==-1?null:e.target.value;
        setFilter([...filter])
    }
    return <>
        <div className="d-flex justify-content-end align-items-baseline my-4 col-3">

            <label className="mx-2 form-label ">
                <FontAwesomeIcon icon={faFilter} color='hsla(177, 18%, 26%)' /></label>
                <input type="text" className='form-control' onBlur={getData} placeholder='العنوان'/>
        </div>
        <div className="row justifiy-content-center my-2">
            {listData?.map((item, i) => {
                return <Fragment key={i}>
                    <div className={`col-12 my-3 ${styles['new']}`} 
                    onClick={() => setData(item)}
                    >
                        <div className={`${styles['new-item']}`}>
                            <div>
                                <img src={`${process.env.REACT_APP_baseImageUrl}${item.attachments?.filter(p=>p.isMain)[0].attachmentUrl}`}/>
                            </div>
                            <div className={`${styles['new-body']}`}>
                                <p className={"d-flex justify-content-between"}>
                                    <strong>{item?.title}</strong>
                                    <i>{item?.createdDate}</i>
                                </p>
                                <p>{item?.description}</p>
                            </div>
                        </div>
                    </div>
                </Fragment>
            })}
            <div className={`${styles['new_footer']}`}>
                <button id={"next"} className={`btn ${styles['next-btn']}`} onClick={goToNextPage} disabled={listData && listData?.length < itemPerPage}>next</button>
                <button id={"prev"} className={`btn ${styles['prev-btn']}`} onClick={goToPrevPage} disabled={page == 0}>prev</button>
            </div>
        </div>

        {/* {message && <ResponceComponent message={message} setMessage={setMessage} />} */}
    </>
}
export default NewsListComponent;
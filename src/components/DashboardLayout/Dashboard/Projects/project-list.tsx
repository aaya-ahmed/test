import { Fragment, useEffect, useState } from "react";
import { useGetPagedData } from '../../../../hooks/getpageddata';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import ProjectService from '../../../../services/projects.service';
import PageContainerComponent from "@shared/PageContainer/pageContainer";
import '../../items-list.scss';
import { Moment } from "@shared/moment";

const Service = new ProjectService();

const ProjectsListComponent = (
    { setData, data, refetch }: { setData: (data: any) => void, data: any, refetch: boolean }
) => {
    const [listData, setListData] = useState<any[]>([]);

    const [filter, setFilter] = useState<{ filtring: { type: string, name: string, value: string }[] }>(
        {
            filtring: [{
                name: "Name",
                type: 'String',
                value: null
            }]
        }
    );
    const {
        page,
        itemPerPage,
        goToNextPage,
        goToPrevPage,
        isLoading
    } = useGetPagedData(Service, 0, 10, filter, refetch, setListData);
    useEffect(() => {
        if (data == null) {
            filter.filtring[0].value = null;
            setFilter({ ...filter })
        }
    }, [data])
    const getData = (e) => {
        filter.filtring[0].value = e.target.value == -1 ? null : e.target.value;
        setFilter({ ...filter })
    }
    return <>
        <div className="d-flex justify-content-end align-items-baseline my-4 col-12 col-md-6">

            <label className="mx-2 form-label ">
                <FontAwesomeIcon icon={faFilter} color='hsla(177, 18%, 26%)' /></label>
            <input type="text" className='form-control' onBlur={getData} placeholder='الاسم' />
        </div>
        <PageContainerComponent
            isLoading={isLoading}
            lengthData={listData.length}
            goToNextPage={goToNextPage}
            goToPrevPage={goToPrevPage}
            currentPage={page}
            itemPerPage={itemPerPage}
            Children={listData?.map((item, i) => {
                return <Fragment key={i}>
                    <div className={`my-3 p-2 bg-white box-shadow items w-100`}
                        onClick={() => setData(item)}
                    >
                        <div className={`d-flex bg-white px-1 py-2 justify-cintent-between item-container`}>
                            <div className='w-25'>
                                <img style={{ height: '10rem' }} src={`${import.meta.env.VITE_baseImageUrl}${item.attachments?.filter(p => p.isMain)[0].attachmentUrl}`} />
                            </div>
                            <div className='w-75 mx-1'>
                                <p className={"d-flex justify-content-between item-title"}>
                                    <strong>{item?.name}</strong>
                                    <Moment date={new Date(item?.startDate)}/>

                                </p>
                                <p className='m-0'>
                                    <i className="fa fa-location-dot ms-1"></i>
                                    {item?.address}
                                    
                                </p>
                                <p className='m-0'>
                                {item?.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </Fragment>
            })} />
    </>
}
export default ProjectsListComponent;
import { Fragment, useEffect, useState } from "react";
import { useGetPagedData } from '../../../../hooks/getpageddata';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import UnitService from '../../../../services/units.service';
import ProjectService from '@services/projects.service';
import PageContainerComponent from "@shared/PageContainer/pageContainer";

const Service = new UnitService();

const UnitsListComponent = (
    { setData ,refetch}: { setData: (data: any) => void,refetch:boolean }
) => {
    const [listData, setListData] = useState<any[]>([]);

    const [filter, setFilter] = useState<{ filtring: { type: string, name: string, value: string }[] }>(
        {
            filtring: [{ "name": "ProjectId", "type": "Number", "value": null } ]
        }
    );
    const {
        page,
        itemPerPage,
        goToNextPage,
        goToPrevPage,
        isLoading
    } = useGetPagedData(Service, 0, 10, filter, refetch, setListData);
    const [projects, setProjects] = useState<any[]>([]);
    useEffect(() => {
        new ProjectService().Get().then(
            res => {
                setProjects(res)
                filter.filtring[0].value=res[0].id;
                setFilter({...filter})
            }
        )
    }, []);
    const getData = (e) => {
        filter.filtring[0].value = e.target.value == -1 ? null : `${e.target.value}`;
        setFilter({ ...filter })
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
                                <img style={{ height: '10rem' }}src={`${import.meta.env.VITE_baseImageUrl}${item.imageUrl}`} />
                            </div>
                            <div className='w-75 mx-1'>
                            <p className={"d-flex justify-content-between item-title"}>
                                    <strong>{item?.name}</strong>
                                    <i><strong> السعر</strong>{item?.price}</i>
                                </p>
                                <p className='m-0'><strong>التامين </strong> {item?.insurance}</p>
                                <p className='m-0'>{item?.description}</p>
                            </div>
                        </div>
                    </div>
                </Fragment>
            })} />
    </>
}
export default UnitsListComponent;
import { Fragment, useEffect, useState } from "react";
import { useGetPagedData } from '../../../../hooks/getpageddata';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import InterestedService from '../../../../services/interested.service';
import InterestedResponceComponent from './InterestedResponce';
import ProjectService from "@services/projects.service";
import PageContainerComponent from "../../../shared/PageContainer/pageContainer";
const Service = new InterestedService();

const InterestedsListComponent = () => {

    const [filter, setFilter] = useState<{ filtring: { type: string, name: string, value: string }[] }>(
        {
            filtring: [{
                name: "ProjectId",
                type: 'Number',
                value: null
            }]
        }
    );
    const [listData, setListData] = useState<any[]>([]);
    const {
        page,
        itemPerPage,
        goToNextPage,
        goToPrevPage,
        isLoading
    } = useGetPagedData(Service, 0, 10, filter, false, setListData);
    const [message, setMessage] = useState<any>();
    const [project, setProjects] = useState<any[]>()
    useEffect(() => {
        new ProjectService().GetNames().then(
            res => {
                setProjects(res)
            }
        )
    }, [])
    const getData = (e) => {
        filter.filtring[0].value = e.target.value == -1 ? null : e.target.value;
        setFilter({ ...filter })
    }
    return <>
        <div className="d-flex justify-content-start align-items-baseline mt-4 mx-5">

            <label className="mx-2 form-label">
                <FontAwesomeIcon icon={faFilter} color='hsla(177, 18%, 26%)' /></label>
            <select className="form-select d-inline-block w-25" onChange={getData}>
                <option value={-1}>اختر المشروع</option>
                {project?.map((item, i) => {
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
            Children={
                <>
                    {listData?.map((item, i) => {
                        return <Fragment key={i}>
                            <div className={`m-3 px-2 py-2 bg-white  box-shadow`} role="button" onClick={() => setMessage(item)}>
                                <p className={"d-flex justify-content-between m-0"}>
                                    <strong>{item?.name}</strong>
                                    <i style={{ fontSize: '0.8em', color: '#0000008a' }}>{item?.phone}</i>
                                </p>
                                <p className="m-0">{item?.description}</p>
                            </div>
                        </Fragment>
                    })}
                    {message && <InterestedResponceComponent message={message} setMessage={setMessage} />}
                </>}/>
    </>
}
export default InterestedsListComponent;
import { useGetPagedData } from "../../../../hooks/getpageddata";
import { Fragment, useState } from "react";
import FeatureProjectService from "../../../../services/feature-project.service";
import FeaturesComponent from "./project-feature-viewer";
import PageContainerComponent from "@shared/PageContainer/pageContainer";

const Service = new FeatureProjectService();
type ProjectFeatureListProp = {
    setData: (data: any) => void,
    filter: { filtring: { type: string, name: string, value: string }[] },
    refetch:boolean
}

export default function ProjectFeatureList({ setData, filter,refetch }: ProjectFeatureListProp) {
    const [listData, setListData] = useState<any[]>([]);
    const {
        page,
        itemPerPage,
        goToNextPage,
        goToPrevPage,
        isLoading
    } = useGetPagedData(Service, 0, 10, filter, refetch, setListData);
    const [feature, setFeature] = useState<any>()
    const showFeatures = (item) => {
        setFeature(item)
    }
    return <>
        <PageContainerComponent
            isLoading={isLoading}
            lengthData={listData.length}
            goToNextPage={goToNextPage}
            goToPrevPage={goToPrevPage}
            currentPage={page}
            itemPerPage={itemPerPage}
            Children=
            {
                <>
                    {listData?.map((item, i) => {
                        return <Fragment key={i}>
                            <div className={`my-3 p-2 bg-white  box-shadow w-100`}
                                role={'button'}
                                onClick={() => setData(item)}
                            >
                                <div className={`d-flex justify-content-between data-table`}>
                                    <p className='align-middle m-0 p-1'>{item?.name}</p>
                                    <button className="bg-transberent border-0" onClick={() => showFeatures(item)}><i className="fa-solid fa-display"></i></button>
                                </div>
                            </div>
                        </Fragment>
                    })}
                    {feature && <FeaturesComponent feature={feature} setFeature={setFeature} />}
                </>
            } />
    </>
}
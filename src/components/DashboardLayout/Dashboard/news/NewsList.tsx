import { Fragment, useState } from "react";
import NewService from '../../../../services/news.service';
import { useGetPagedData } from '../../../../hooks/getpageddata';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import PageContainerComponent from '../../../shared/PageContainer/pageContainer';
import { news } from './News.type';
import '../../items-list.scss';
import { Moment } from "@shared/moment";
const Service = new NewService();

const NewsListComponent = ({ setData,refetch }: { setData: (data: any) => void,refetch:boolean }) => {
    const [listData, setListData] = useState<news[]>([]);
    const [filter, setFilter] = useState<{ filtring: { type: string, name: string, value: string }[] }>(
        {
            filtring: [{
                name: "Title",
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
    } = useGetPagedData(Service, 0, 10, filter,refetch, setListData);
    const getData = (e) => {
        filter.filtring[0].value = e.target.value == -1 ? null : e.target.value;
        setFilter({ ...filter })
    }
    return <>
        <div className="d-flex justify-content-end align-items-baseline my-4 col-lg-3 col-12">

            <label className="mx-2 form-label ">
                <FontAwesomeIcon icon={faFilter} color='hsla(177, 18%, 26%)' /></label>
            <input type="text" className='form-control' onBlur={getData} placeholder='العنوان' />
        </div>
        <PageContainerComponent
            isLoading={isLoading}
            lengthData={listData.length}
            goToNextPage={goToNextPage}
            goToPrevPage={goToPrevPage}
            currentPage={page}
            itemPerPage={itemPerPage}
            Children={
                listData?.map((item, i) => {
                    return <Fragment key={i}>
                        <div className={`my-3 p-2 bg-white box-shadow items`}
                        role='button'
                            onClick={() => setData(item)}
                        >
                            <div className={`d-flex bg-white px-1 py-2 justify-cintent-between item-container`}>
                                <div className='w-25'>
                                    <img style={{height:'10rem'}} src={`${import.meta.env.VITE_baseImageUrl}${item.attachments?.filter(p => p.isMain)[0].attachmentUrl}`} />
                                </div>
                                <div className='w-75 p-3' >
                                    <p className={"d-flex justify-content-between item-title"}>
                                        <strong>{item?.title}</strong>
                                        <Moment date={new Date(item?.createdDate)}/>
                                    </p>
                                    <p className='hidden-p'>{item?.description}</p>
                                </div>
                            </div>
                        </div>
                    </Fragment>
                })
             } />
    </>
}
export default NewsListComponent;
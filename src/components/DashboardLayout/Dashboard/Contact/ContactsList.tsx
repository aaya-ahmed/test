import styles from './Contact.module.scss'
import { Fragment, useEffect, useState } from "react";
import ContactUsService from '../../../../services/contact.service';
import { useGetPagedData } from '../../../../hooks/getpageddata';
import Breadcrumb from '../../../../components/shared/breadcrumb/breadcrumb';
import ResponceComponent from './contactResponce';
import ContactReasonService from '../../../../services/contact-reason.service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import PageContainerComponent from '../../../shared/PageContainer/pageContainer';
const Service = new ContactUsService();

const ContactsListComponent = () => {
    const [filter, setFilter] = useState<{ filtring: { type: string, name: string, value: string }[] }>(
        {
            filtring: [{
                name: "ContactReasonId",
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
    const [reasons, setReasons] = useState<any[]>()
    useEffect(() => {
        new ContactUsService().Get().then(
            res => {
                setReasons(res)
            }
        )
    }, [])
    const getData = (e) => {
        console.log(e.target.value)
        filter.filtring[0].value = e.target.value == -1 ? null : e.target.value;
        setFilter({ ...filter })
    }
    return <>
        <div className="d-flex justify-content-start align-items-baseline mt-4 mx-5">

            <label className="mx-2 form-label">
                <FontAwesomeIcon icon={faFilter} color='hsla(177, 18%, 26%)' /></label>
            <select className="form-select d-inline-block w-25" onChange={getData}>
                <option value={-1}>الكل</option>
                {reasons?.map((item, i) => {
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
                            <div className={`m-3 p-2 bg-white box-shadow w-100`} role={'button'} onClick={() => setMessage(item)}>
                                    <div className={`"d-flex justify-content-between m-0"`}>
                                        <p className={"d-flex justify-content-between m-0"}>
                                            <strong>{item?.name}</strong>
                                            <i style={{ fontSize: '0.8em', color: '#0000008a' }}>{item?.contactReasonName}</i>
                                        </p>
                                        <p className="m-0">{item?.description}</p>
                                    </div>
                            </div>
                        </Fragment>
                    })}
                    {message && <ResponceComponent message={message} setMessage={setMessage} />}
                </>
            }
        />
    </>
}
export default ContactsListComponent;
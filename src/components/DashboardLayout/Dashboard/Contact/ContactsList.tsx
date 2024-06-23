import styles from './Contact.module.scss'
import { Fragment, useEffect, useState } from "react";
import ContactUsService from '../../../../services/contact.service';
import { useGetPagedData } from '../../../../hooks/getpageddata';
import Breadcrumb from '../../../../components/shared/breadcrumb/breadcrumb';
import ResponceComponent from './contactResponce';
import ContactReasonService from '../../../../services/contact-reason.service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
const Service = new ContactUsService();

const ContactsListComponent = () => {
    const [filter, setFilter] = useState<{ type: string, name: string, value: string }[]>(
        [{
            name: "ContactReasonId",
            type: 'Number',
            value: null
        }]
    );
    const[listData,setListData]=useState<any[]>([]);
    const {
        page,
        itemPerPage,
        goToNextPage,
        goToPrevPage,
    } = useGetPagedData(Service, 0, 10, {filtring:filter},setListData);
    const [message, setMessage] = useState<any>();
    const [reasons, setReasons] = useState<any[]>()
    useEffect(() => {
        new ContactReasonService().Get().then(
            res => {
                setReasons(res)
            }
        )
    }, [])
    const getData = (e) => {
        console.log(e.target.value)
        filter[0].value = e.target.value == -1 ? null : e.target.value;
        setFilter([...filter])
    }
    return <>
        <div className="page-heading">
            <div className="page-title">
                <div className="row">
                    <div className="col-12">
                        <Breadcrumb path={[{ name: 'الصفحه الرئيسيه', href: '/' }, { name: 'الرسائل', href: '' }]} />
                    </div>
                </div>
            </div>
        </div>
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
        <div className="row justifiy-content-center my-4 mx-5">
            {listData?.map((item, i) => {
                return <Fragment key={i}>
                    <div className={`col-12 my-3 ${styles['content']}`} onClick={() => setMessage(item)}>
                        <div className={`${styles['contact-item']}`}>
                            <div className={`${styles['contact-body']}`}>
                                <p className={"d-flex justify-content-between"}>
                                    <strong>{item?.name}</strong>
                                    <i>{item?.contactReasonName}</i>
                                </p>
                                <p>{item?.description}</p>
                            </div>
                        </div>
                    </div>
                </Fragment>
            })}
            <div className={`${styles['ContactsReason_footer']}`}>
                <button id={"next"} className={`btn ${styles['next-btn']}`} onClick={goToNextPage} disabled={listData && listData?.length < itemPerPage}>next</button>
                <button id={"prev"} className={`btn ${styles['prev-btn']}`} onClick={goToPrevPage} disabled={page == 0}>prev</button>
            </div>
        </div>

        {message && <ResponceComponent message={message} setMessage={setMessage} />}
    </>
}
export default ContactsListComponent;
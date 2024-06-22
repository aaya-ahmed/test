import styles from './ContactsReason.module.scss'
import { Fragment, useEffect, useState } from "react";
import ContactReasonService from "../../../../services/contact-reason.service";
import { useGetPagedData } from '../../../../hooks/getpageddata';
const Service = new ContactReasonService();
type ContactsReasonListProp = {
    setData: (data: any) => void,
}
const ContactsReasonListComponent = ({ setData }: ContactsReasonListProp) => {


    const {
        page,
        itemPerPage,
        listData,
        goToNextPage,
        goToPrevPage,
    } = useGetPagedData(Service, 0, 10);
    return <>
        <div className="row w-100">
            {listData?.map((item, i) => {
                return <Fragment key={i}>
                        <div className={`col-12 my-3 ${styles['ContactsReason-item']}`} onClick={()=>setData(item)}>
                            <div className={`${styles['ContactsReason-body']}`}>
                                <p>{item?.name}</p>
                            </div>
                        </div>
                </Fragment>
            })}

        </div>
        <div className={`${styles['ContactsReason_footer']}`}>
            <button id={"next"} className={`btn ${styles['next-btn']}`} onClick={goToNextPage} disabled={listData&&listData?.length < itemPerPage}>next</button>
            <button id={"prev"} className={`btn ${styles['prev-btn']}`} onClick={goToPrevPage} disabled={page == 0}>prev</button>
        </div>
    </>
}
export default ContactsReasonListComponent;
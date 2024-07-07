import styles from './ContactsReason.module.scss';
import { Fragment, useEffect, useState } from 'react';
import ContactReasonService from '../../../../services/contact-reason.service';
import { useGetPagedData } from '../../../../hooks/getpageddata';
const Service = new ContactReasonService();
type ContactsReasonListProp = {
  setData: (data: any) => void;
};
const ContactsReasonListComponent = ({ setData }: ContactsReasonListProp) => {
  const [listData, setListData] = useState<any[]>([]);
  const [filter, setFilter] = useState<{
    filtring: { type: string; name: string; value: string }[];
  }>({ filtring: [] });
  const { page, itemPerPage, goToNextPage, goToPrevPage, isLoading } =
    useGetPagedData(Service, 0, 10, filter, setListData);
  return (
    <>
      {!isLoading && (
        <>
          <div className="row w-100">
            {listData?.map((item, i) => {
              return (
                <Fragment key={i}>
                  <div
                    className={`col-12 my-3 ${styles['ContactsReason-item']}`}
                    onClick={() => setData(item)}
                  >
                    <div className={`${styles['ContactsReason-body']}`}>
                      <p>{item?.name}</p>
                    </div>
                  </div>
                </Fragment>
              );
            })}
          </div>
          <div className={`${styles['ContactsReason_footer']}`}>
            <button
              id={'next'}
              className={`btn ${styles['next-btn']}`}
              onClick={goToNextPage}
              disabled={listData && listData?.length < itemPerPage}
            >
              التالي
            </button>
            <button
              id={'prev'}
              className={`btn ${styles['prev-btn']}`}
              onClick={goToPrevPage}
              disabled={page == 0}
            >
              السابق
            </button>
          </div>
        </>
      )}
      {isLoading && (
        <>
          <div className="d-flex justify-content-center align-items-center">
            <img
              src={'./public/assets/images/loader.svg'}
              width={'100px'}
              height={'100px'}
            />
          </div>
        </>
      )}
    </>
  );
};
export default ContactsReasonListComponent;

import { Fragment, useState } from 'react';
import ContactReasonService from '../../../../services/contact-reason.service';
import { useGetPagedData } from '../../../../hooks/getpageddata';
import { contactreason } from './ContactsReason.types';
import PageContainerComponent from '../../../shared/PageContainer/pageContainer';
const Service = new ContactReasonService();
type ContactsReasonListProp = {
  setData: (data: any) => void;
  refetch: boolean
};
const ContactsReasonListComponent = ({ setData, refetch }: ContactsReasonListProp) => {
  const [listData, setListData] = useState<contactreason[]>([]);
  const [filter, setFilter] = useState<{
    filtring: { type: string; name: string; value: string }[];
  }>({ filtring: [] });
  const { page, itemPerPage, goToNextPage, goToPrevPage, isLoading } =
    useGetPagedData(Service, 0, 10, filter, refetch, setListData);

  return (
    <>
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
              return (
                <Fragment key={i}>
                  <div
                    className={`my-3 px-2 py-2 bg-white  box-shadow`}
                    role={'button'}
                    onClick={() => setData(item)}
                  >
                    <p className='align-middle m-0 p-1'>{item?.name}</p>
                  </div>
                </Fragment>
              );
            })}
          </>} />
    </>
  );
};
export default ContactsReasonListComponent;

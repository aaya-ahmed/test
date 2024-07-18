import React, { useState, useEffect } from 'react';
import { Notification } from '../components/shared/notification';

export const useGetPagedData = (service,initialPage = 0, initialItemsPerPage = 10,filter={filtring:[]},refetch=false,setListData) => {
  const [page, setPage] = useState(initialPage);
  const [itemPerPage, setItemPerPage] = useState(initialItemsPerPage);
  const [isLoading,setIsLoading]=useState<boolean>(true);

  useEffect(() => {
      getData();
  }, [page,initialItemsPerPage,filter]);
  useEffect(()=>{
    if(refetch)getData();
  },[refetch])
  const getData=async ()=>{
      try {
        setIsLoading(true);
        const result=await service.GetPaged(page, itemPerPage,filter.filtring);
        setListData(result);
        setIsLoading(false)
      } catch (error) {
        // Handle error
        setIsLoading(false)
        Notification({title:'حدث خطا',type:'error'});
      }
  }
  const goToNextPage = () => {
      setPage(page + 1);
  };

  const goToPrevPage = () => {
    if (page !== 0) {
      setPage(page - 1);
    }
  };

  return {
    page,
    itemPerPage,
    goToNextPage,
    goToPrevPage,
    isLoading
  };
};
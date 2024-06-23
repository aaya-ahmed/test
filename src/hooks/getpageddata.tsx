import React, { useState, useEffect } from 'react';

export const useGetPagedData = (service,initialPage = 0, initialItemsPerPage = 10,filter=[],setListData) => {
  const [page, setPage] = useState(initialPage);
  const [itemPerPage, setItemPerPage] = useState(initialItemsPerPage);

  useEffect(() => {
    (async function get(){
      try {
        console.log(filter)
        const result=await service.GetPaged(page, itemPerPage,filter);
        setListData(result);console.log(result)
      } catch (error) {
        // Handle error
      }
    })();
      
  }, [page,itemPerPage,filter]);


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
  };
};
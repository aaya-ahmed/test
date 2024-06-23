import React, { useState, useEffect } from 'react';

export const useGetPagedData = (service,initialPage = 0, initialItemsPerPage = 10,filter=[]) => {
  const [page, setPage] = useState(initialPage);
  const [itemPerPage, setItemPerPage] = useState(initialItemsPerPage);
  const [listData, setListData] = useState([]);

  useEffect(() => {
    console.log(filter)
      try {
        service.GetPaged(page, itemPerPage,filter).then(
          res=>{setListData(res);console.log(res)}
        );
      
        
        
      } catch (error) {
        // Handle error
      }
  }, [page, itemPerPage,filter]);
  

  const goToNextPage = () => {
    if (listData.length === itemPerPage) {
      setPage(page + 1);
    }
  };

  const goToPrevPage = () => {
    if (page !== 0) {
      setPage(page - 1);
    }
  };

  return {
    page,
    itemPerPage,
    listData,
    goToNextPage,
    goToPrevPage,
  };
};
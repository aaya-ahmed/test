import React, { useState, useEffect } from 'react';

export const useGetPagedData = (service,initialPage = 0, initialItemsPerPage = 10,filter={filtring:[]},setListData) => {
  const [page, setPage] = useState(initialPage);
  const [itemPerPage, setItemPerPage] = useState(initialItemsPerPage);
  const [isLoading,setIsLoading]=useState<boolean>(true);

  useEffect(() => {
    (async function get(){
      try {
        setIsLoading(true)
        console.log(filter)
        const result=await service.GetPaged(page, itemPerPage,filter.filtring);
        setListData(result);console.log(result)
        setIsLoading(false)
      } catch (error) {
        // Handle error
        setIsLoading(false)

      }
    })();
      
  }, [page,initialItemsPerPage,filter]);


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

type PageContainerProp = {
    isLoading: boolean,
    lengthData: number,
    goToNextPage: () => void,
    goToPrevPage: () => void,
    currentPage: number,
    itemPerPage: number,
    Children: React.ReactNode,
}
const PageContainerComponent = ({ isLoading, lengthData, goToNextPage, goToPrevPage, currentPage, itemPerPage, Children }: PageContainerProp) => {
    return <>
        {!isLoading && <>
            {lengthData > 0 && <>
                <div className="my-2" style={{ display: 'flex', gridGap: '10px',flexWrap:'wrap' , justifyContent:'center' }}>
                    {Children}
                </div>
                <div className={`d-flex justify-content-center py-1 px-5`}>
                    <button id={"next"} className={`btn next-btn`} onClick={goToNextPage} disabled={lengthData < itemPerPage}>التالي</button>
                    <button id={"prev"} className={`btn prev-btn`} onClick={goToPrevPage} disabled={currentPage == 0}>السابق</button>
                </div>
            </>
            }
            {
                lengthData == 0 &&
                <>
                    <div className='text-danger text-center mt-3'> لا يوجد بيانات </div>
                </>
            }
        </>}
        {isLoading && <>
            <div className='d-flex justify-content-center align-items-center'>
                <img src={'/assets/images/loader.svg'} width={'100px'} height={'100px'} />
            </div>
        </>}
    </>
}
export default PageContainerComponent;
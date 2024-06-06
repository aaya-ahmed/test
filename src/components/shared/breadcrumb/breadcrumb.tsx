import styles from './breadCrumb.module.scss'
const Breadcrumb=({path}:{path:{name:string,href:string}[]})=>{
    return <>
    <div className={`${styles['breadcrumb_area']}`}>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className={`${styles['breadcrumb-inner']}`}>
                        <div className={`${styles['breadcrumb_list']}`}>
                            <ul className="d-flex m-0">
                                {
                                    path?.map((item,index)=>{
                                        return<>
                                         {(index!=path.length-1 )?
                                        (<li><a href={item.href}><span className="secondary-color"></span> {item.name} </a></li>)
:
                                        (<li> {item.name}</li>)}
                                        </>
                                    })
                                }
                                
                                
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</>
}
export default Breadcrumb;
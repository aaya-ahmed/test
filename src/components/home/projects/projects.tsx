import React, { Fragment, useState } from "react";
import styles from './project.module.scss'
import ProjectService from "@services/projects.service";
import { useQuery } from "@tanstack/react-query";
import { salestatus } from "../../shared/const/saleStatus";

const ProjectComponent = () => {
    const [project, setProject] = useState<any[]>();
    const { isLoading, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: () => new ProjectService().GetPaged(0, 20, []).then(
            res => res
        )
    })
    return (<>
        <section className={`${styles['projects']} py-5`}>
            <div className="container">
                <div className={`${styles['title']} text-center mb-5`}>
                    <strong className="h1 fw-bold d-block"> مشاريعنا </strong>
                </div>

                <div className="row">
                    {data?.map((item, i) => <Fragment key={i}>
                        <div className={`${styles['col-lg-4']} col-lg-4 col-md-6 col-12 mb-4`}>
                            <div className={`${styles['project-item']}`}>
                                <div className={`${styles['project-body']}`}>
                                    <div className={`${styles['project-img']}`}>
                                    <a href={`/work/${item.id}/${item.name}`}>
                                            <img src={`${import.meta.env.VITE_baseImageUrl}${item.attachments?.filter(p=>p.isMain)[0]?.attachmentUrl}`} className="img-fluid" alt="مكين 34" />
                                        </a>
                                        <div className={`${styles['project-badge']} w-100 d-flex align-items-center justify-content-start`}>
                                            <span className={`${styles['project-place']}`}>
                                                <i className="fas fa-map-pin"></i> {item.address} </span>
                                            <span className={`${item?.status==0? styles['sale-badge']:styles['construction-badge']}`}> {salestatus[item.status]} </span>
                                        </div>
                                    </div>
                                    <div className={`${styles['project-info']}`}>
                                    <a href={`/work/${item.id}/${item.name}`} className={`${styles['project-title']}`}> وحده 1 </a>
                                        <div className={`${styles['project-description']}`}>
                                            <p>
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className={`${styles['project-footer']}`}>
                                    <ul className={`${styles['list-units-item']} d-flex align-items-center justify-content-evenly pt-3']}`}>
                                        <li> <i className="fas  fa-home" title=""></i>
                                            {item.numberOfUnits}
                                            وحدة
                                        </li>
                                        <li> <i className="fas fa-map-pin" title=""></i>
                                            {item.address}
                                        </li>

                                        <li> <i className="fas  fa-percentage" title=""></i>
                                            {item.salePrecentage}

                                            مباع
                                        </li>


                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Fragment>)}
                </div>
                <div className="title text-center mb-5">

                    <a href="/works" className="btn btn-dark    ">
                        <i className="fa fa-plus"></i>
                        شاهد جميع المشاريع
                    </a>
                </div>
            </div>
        </section >
    </>);
}
export default ProjectComponent;
import { useEffect, useState } from 'react';
import ProjectService from '../../services/projects.service';
import styles from './works.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { useParams } from 'react-router-dom';
import { ProjectStatus } from 'const/projectStatus';
import UnitService from '@services/units.service';
import { useGetPagedData } from '@hooks/getpageddata';
import WorkViewComponent from './workView';
const projectService = new ProjectService();
const unitService = new UnitService();

const WorkItem = () => {
    const { id, status } = useParams();
    const [project, setProject] = useState<any>();
    const [units, setUnits] = useState<any[]>();
    const [unit, setUnit] = useState<any>();
    const [filter, setFilter] = useState<{ filtring: { type: string, name: string, value: string, op: string }[] }>(
        {
            filtring: [{
                name: "ProjectId",
                type: 'Number',
                value: `${id}`,
                op: '=='
            },
            {
                name: "Status",
                type: 'Number',
                value: `${+status == 2 || +status == 4 ? status : -1}`,
                op: '=='
            },

            ]
        }
    );
    const {
        page,
        itemPerPage,
        goToNextPage,
        goToPrevPage,
        isLoading
    } = useGetPagedData(unitService, 0, 10, filter, false, setUnits);
    useEffect(() => {

        projectService.GetById(+id).then(
            res => {
                setProject(res);

                document.getElementById('circular-progress').style.background = `conic-gradient(#213131 ${res.salePrecentage * 3.6}deg , #9c783d8c ${res.salePrecentage * 3.6}deg)`
            }
        )
    }, []);
    const showFeature = (index) => {
        for (let i = 0; i < project?.features?.length; i++) {
            if (index == i) {
                if (document.getElementById(`tab-content${index}`).style.display == 'block')
                    document.getElementById(`tab-content${index}`).style.display = 'none'
                else
                    document.getElementById(`tab-content${index}`).style.display = 'block'
            }
            else
                document.getElementById(`tab-content${i}`).style.display = 'none'
        }
    }
    return (
        <>
            <div className={`${styles['main-work-image']}`}>
                <img src={`${import.meta.env.VITE_baseImageUrl}${project?.attachments?.filter(p => p.isMain)[0].attachmentUrl}`} />

            </div>
            <div className={`row ${styles['title_inf']}`}>
                {project && (<div>
                    <h1> {project?.name} </h1>
                    <p>
                        <i className={`fas fa-map-marked-alt ${styles['fa-map-marked-alt']}`}></i>
                        {project?.address}
                    </p>
                </div>)}
            </div>
            <section className="page-project-details">
                <div className="container pt-5">
                    {project?.attachments && (
                        <div className={`w-100  my-5`}>
                            <Swiper
                                slidesPerView={3}
                                spaceBetween={30}
                                pagination={{
                                    clickable: true,
                                }}
                                autoplay={
                                    { delay: 2500 }
                                }
                                modules={[Autoplay, Pagination]}
                                breakpoints={{
                                    900: {
                                        slidesPerView: 3,
                                    },
                                    450: {
                                        slidesPerView: 2,
                                    },
                                    0: {
                                        slidesPerView: 1,
                                    },
                                }}
                            >
                                {project?.attachments?.map((item, i) => {
                                    return (
                                        <SwiperSlide>
                                            <img className={`${styles['img-project']}`} src={`${import.meta.env.VITE_baseImageUrl}${item?.attachmentUrl}`} />
                                        </SwiperSlide>
                                    )
                                })}
                            </Swiper>
                        </div>
                    )}
                    <div className='row align-items-center'>
                        <div className={`${styles['rating']} col-md-3 col-12`}>
                            <div className={`${styles['circular-progress']}`} id="circular-progress">
                                <div className={`${styles['progress-value']}`}>{project?.salePrecentage}</div>
                            </div>
                            <h5 className="text-center my-2">تم البيع</h5>
                        </div>
                        <div className="project-info  col-md-9 col-12">
                            <strong className="h4 d-block fw-bold my-2">المميزات</strong>
                            <div className={`${styles['nav-pills']}`}>
                                {project?.features?.map((item, i) => <>
                                    <div className={`${styles['nav']}`}>
                                        <div id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                            <button onClick={() => showFeature(i)} className={`${styles['nav-link']} active`} id={`${item.name}`} type="button" role="tab">
                                                <p>{item?.name}</p>
                                            </button>
                                        </div>
                                        <div className={`tab-content ${styles['tab-content']}`} id={`tab-content${i}`}>
                                            <div className={`${styles['tab-pane']}`}>
                                                <ul className={`${styles['features-list']}`}>
                                                    {item?.features?.map(p => <li>
                                                        <i className="me-2">
                                                            <img src={`${import.meta.env.VITE_baseImageUrl}${p?.icon?.attachmentUrl}`} />
                                                        </i>
                                                        {p.name}
                                                    </li>
                                                    )}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </>
                                )}

                            </div>
                        </div>
                    </div>
                    {project?.numberOfUnits>0&&(<>
                    <div className=" my-5">
                        <strong className="h5 d-block fw-bold m-0">  الوحدات </strong>
                        <hr />
                    </div>
                    <div className={`${styles['container-unit']}`}>
                        {
                            units && (
                                units?.map(item => <>
                                    <div className={`${styles['unit-item']} `} role="button" onClick={()=>setUnit(item)}>
                                        <div>
                                            <img src={`${import.meta.env.VITE_baseImageUrl}${item?.imageUrl}`} />
                                        </div>
                                        <div>
                                            <h3>{item.name} - وحدة{item.buildingNumber} - الدور{item.buildingLevel}</h3>
                                            <strong>{item.price} ريال -
                                                {item.status == ProjectStatus.UnderConstruction ? 'تحت الانشاء' :
                                                    item.status == ProjectStatus.Rental ? 'تم الايجار' :
                                                        item.status == ProjectStatus.SoldOut ? 'تم البيع' :
                                                            item.status == ProjectStatus.AvailableForRental ? 'متاح للايجار' : 'متاح البيع'
                                                }</strong>
                                            <div className={`${styles['unit-details']}`}>
                                                <p><strong className='px-2'>المساحه</strong>{item.area}م2</p>
                                                <p><strong className='px-2'>التامين</strong>{item.insurance}</p>
                                                <p><strong className='px-2'>عدد الغرف</strong>{item.roomCount}</p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                                )
                            )
                        }
                    </div>
                    <div className={`d-flex justify-content-center py-1 px-5`}>
                        <button id={"next"} className={`btn next-btn`} onClick={goToNextPage} disabled={units?.length < itemPerPage}>التالي</button>
                        <button id={"prev"} className={`btn prev-btn`} onClick={goToPrevPage} disabled={page == 0}>السابق</button>
                    </div>
                    </>)}
                </div>
            </section>
            {unit&&<WorkViewComponent setUnit={setUnit} unit={unit}/>}
        </>
    );
};
export default WorkItem;

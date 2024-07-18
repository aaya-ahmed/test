import { useEffect } from "react";
import styles from './works.module.scss';
import UnitService from "@services/units.service";
const unitService = new UnitService();
const WorkViewComponent = ({ unit, setUnit }: { unit: any, setUnit: (data: any) => void }) => {
    useEffect(() => {
        (async () => {
            const temp = await unitService.GetById(unit.id);
            setUnit(temp)
        })()

    }, [])
    return <>
        <div className="modal d-block" style={{ 'backgroundColor': '#00000080' }} id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{unit?.name} - وحدة{unit?.buildingNumber} - الدور{unit?.buildingLevel}</h5>
                    </div>
                    <div className="modal-body">
                        <img src={`${import.meta.env.VITE_baseImageUrl}${unit?.imageUrl}`} />
                        <div className={`${styles['unit-details']} p-2`}>
                            <p className="m-0"><strong className='px-2'>المساحه</strong>{unit?.area}م2</p>
                            <p className="m-0"><strong className='px-2'>التامين</strong>{unit?.insurance}</p>
                            <p className="m-0"><strong className='px-2'>عدد الغرف</strong>{unit?.roomCount}</p>
                        </div>
                        <strong className="h4 d-block fw-bold my-2">المميزات</strong>
                        <hr/>
                        <ul className={`${styles['features-list']}`}>
                            {unit?.featuresUnit?.map(p => <li>
                                <i className="me-2">
                                    <img src={`${import.meta.env.VITE_baseImageUrl}${p?.imageUrl}`} />
                                </i>
                                {p.name}
                            </li>
                            )}
                        </ul>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => setUnit(null)}>اغلاق</button>
                    </div>
                </div>
            </div>
        </div>

    </>
}
export default WorkViewComponent;
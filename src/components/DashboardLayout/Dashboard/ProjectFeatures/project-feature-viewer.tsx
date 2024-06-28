import { useEffect, useState } from "react";
import FeatureService from "../../../../services/feature.service";

const FeaturesComponent = ({ project,setProject }: { project:{id: number,name:string},setProject:(data:any)=>void }) => {
    const [features, setFeatures] = useState<any[]>([]);
    useEffect(() => {
        if (project) {
            new FeatureService().Get([{ type: 'Number', name: 'featureProjectCategoryId', value: `${project.id}` }]).then(
                res => {
                    setFeatures(res)
                    console.log(res)
                }
            )
        }
    }, [])
    return <>
        <div className="modal d-block mh-75 overflow-auto" style={{ 'backgroundColor': '#00000080' }} id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{project?.name}</h5>
                    </div>
                    <div className="modal-body">
                        {features?.map((item) => {
                            return <>
                                <div className="d-flex my-2 align-items-center justify-content-start">
                                    <img src={`${import.meta.env.VITE_baseImageUrl}${item?.icon?.attachmentUrl}`} width={'50px'} height={'50px'}/>
                                    <p className="mx-2 my-0">{item.name}</p>
                                </div>
                                <hr/>
                            </>
                        })}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => setProject(null)}>اغلاق</button>
                    </div>
                </div>
            </div>
        </div>

    </>
}
export default FeaturesComponent;
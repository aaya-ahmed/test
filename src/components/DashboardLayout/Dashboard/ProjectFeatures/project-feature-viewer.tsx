import { useEffect, useState } from "react";
import FeatureService from "../../../../services/feature.service";

const FeaturesComponent = ({ feature,setFeature }: { feature:{id: number,name:string},setFeature:(data:any)=>void }) => {
    const [features, setFeatures] = useState<any[]>([]);
    useEffect(() => {
        if (feature) {
            new FeatureService().Get([{ type: 'Number', name: 'featureProjectCategoryId', value: `${feature.id}` }]).then(
                res => {
                    setFeatures(res)
                }
            )
        }
    }, [])
    return <>
        <div className="modal d-block mh-75 overflow-auto" style={{ 'backgroundColor': '#00000080' }} id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{feature?.name}</h5>
                    </div>
                    <div className="modal-body">
                        {features?.map((item) => {
                            return <>
                                <div className="d-flex my-2 align-items-center justify-content-start">
                                    <img src={`${import.meta.env.VITE_baseImageUrl}${item?.icon?.attachmentUrl}`} style={{width:'50px',height:'50px'}}/>
                                    <p className="mx-2 my-0">{item.name}</p>
                                </div>
                                <hr/>
                            </>
                        })}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => setFeature(null)}>اغلاق</button>
                    </div>
                </div>
            </div>
        </div>

    </>
}
export default FeaturesComponent;
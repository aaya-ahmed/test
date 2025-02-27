import { useForm } from "react-hook-form";
import { useEffect, useRef, useState } from "react";
import { status } from "../../../../const/status";
import ProjectService from "../../../../services/projects.service";
import { ImageFormComponent } from "../../../shared/image/imageForm";
import { ProjectStatus } from "../../../../const/projectStatus";
import FeatureProjectService from "@services/feature-project.service";
import { Notification } from "@shared/notification";

const  ProjectsFormComponent=(
    { data,setData, setShowForm }: { data: any,setData:(data:any)=>void, setShowForm: (data: any) => void }
) =>{
    const [isLoading,setIsLoading]=useState<boolean>();
    const initial=useRef(true);
    const {
        handleSubmit,
        formState: { errors, isValid },
        register,
        setValue
    } = useForm({ mode: 'onBlur' ,defaultValues:{
        id:data?.id,
        name:data?.name,
        address:data?.address,
        startDate:data?.startDate?.substring(0,10),
        endDate:data?.endDate?.substring(0,10),
        status:data?.status,
        description:data?.description
    }});
    const [images, setImages] = useState<{
        file: File,
        id: number,
        name: string,
        attachmentUrl: string,
        isMain: boolean,
        status?:number,
        projectId:number
    }[]>([]);
    const [IsValid,setIsValid]=useState<boolean>();
    const [features,setFeatures]=useState<any[]>([]);
    const [projectFeatures,setProjectFeatures]=useState<any[]>([]);

    useEffect(()=>{
        new FeatureProjectService().GetAllWithFeatures().then(
            res=>{
                res.forEach(ele => {
                    if(data)
                    ele.features.forEach(e=>{if(data?.featuresProject?.findIndex(p=>p.featureId==e.id)!=-1)e.check=true;})
                    });
                setFeatures(res)
            }
        )
    },[]);
    useEffect(() => {
        if (data&&initial.current) {
            if (data.attachments?.length > 0) {
                for (let i = 0; i < data.attachments.length; i++) {
                    images.push({
                        id: data.attachments[i].id,
                        file: null,
                        name: data.attachments[i].name,
                        attachmentUrl: data.attachments[i].attachmentUrl,
                        isMain: data.attachments[i].isMain,
                        projectId: data.attachments[i].projectId

                    })
                    console.log(data)
                }
                setImages(data.attachments)
            }
            if(data.featuresProject.length>0&&projectFeatures.length==0){
                for (let i = 0; i < data.featuresProject.length; i++) {
                    projectFeatures.push({featureId:data.featuresProject[i].featureId,id:data.featuresProject[i].id,projectId:data.featuresProject[i].projectId})
                }
                setProjectFeatures([...projectFeatures])
            }
            initial.current=false;
        }
    }, [])
    useEffect(()=>{
        setIsValid(images.length-images.filter(p=>p.status==status.Delete).length>0);
    },[images])

    const submit = (e) => {
        setIsLoading(true);
        const formData = new FormData();
        const newImages=images.filter(p=>p.status>=0&&(p.status==2&&p.id!=null));
        console.log(newImages)
        for (let i = 0; i < newImages.length; i++) {
            formData.append(`attachments[${i}].id`, `${newImages[i].id}`);
            if(newImages[i].file){
                formData.append(`attachments[${i}].attachmentFile`, newImages[i].file);
            }
            formData.append(`attachments[${i}].name`, newImages[i].file?.name??newImages[i].name)
            newImages[i].status>=0&&formData.append(`attachments[${i}].status`, `${newImages[i].status}`)
            i == 0 && formData.append(`attachments[${i}].isMain`, `${true}`)

        }
        for (let i = 0; i < projectFeatures.length; i++) {
            formData.append(`featuresProject[${i}].id`, `${projectFeatures[i].id??0}`);
            formData.append(`featuresProject[${i}].featureId`, `${projectFeatures[i].featureId}`)
            formData.append(`featuresProject[${i}].projectId`, `${projectFeatures[i].projectId??0}`)
        }
        delete e.attachments;
        for (const key in e) {
            if(e[key])
            formData.append(key, e[key].toString())
        }
        if(data){
            new ProjectService().PutWithFile(formData).then(
                res => {
                    setData(null)
                    setShowForm(false)
                    Notification({
                        title: "تمت العمليه بنجاح",
                        type: 'success'
                    })
                }
            ).catch(
                err=>{
                    setIsLoading(false)
                    Notification({
                        title: "حدث خطأ",
                        type: 'error'
                    })
                }
            )
        }else{
            new ProjectService().PostWithFile(formData).then(
                res => {
                    setData(null)
                    setIsLoading(false)
                    Notification({
                        title: "تمت العمليه بنجاح",
                        type: 'success'
                    })
                }
            ).catch(
                err=>{
                    setIsLoading(false)
                    Notification({
                        title: "حدث خطأ",
                        type: 'error'
                    })
                }
            )
        }

    }
    const setFeature=(e)=>{
        if(e.target.checked){
            setProjectFeatures([...projectFeatures,{featureId:e.target.value}])
        }
        else{
            setProjectFeatures(projectFeatures.filter(p=>p.featureId!=e.target.value));
        }
    }
    return <>
        <form method='post' onSubmit={handleSubmit(submit)} className={`mb-5 bg-white p-3 rounded-3`}>
            <div className="container row mb-3 ms-auto my-4">
                <div className="row col-sm-12 col-md-6 my-2">
                    <label htmlFor="inputEmail3" className="col-lg-3 col-sm-12 col-md-3 col-form-label">الاسم</label>
                    <div className="col-sm-12 col-md-6">
                        <input
                            className={`form-control ${errors?.name ? 'is-invalid' : ''}`}
                            type="text"
                            name="name"
                            {...register('name', {
                                required: true,
                                maxLength: {
                                    value: 50,
                                    message: "This input exceed maxLength(50).",
                                },

                            })}
                        />
                        {errors?.name && (<p className='invalid-feedback'>{errors?.name?.message.toString()}</p>)}
                    </div>
                </div>
                <div className="row col-sm-12 col-md-6 my-2">
                    <label htmlFor="inputEmail3" className="col-lg-3 col-sm-12 col-md-3 col-form-label">العنوان</label>
                    <div className="col-sm-12 col-md-6">
                        <input
                            className={`form-control ${errors?.address ? 'is-invalid' : ''}`}
                            type="text"
                            name="address"
                            {...register('address', {
                                required: true,
                                maxLength: {
                                    value: 150,
                                    message: "This input exceed maxLength(150).",
                                },

                            })}
                        />
                        {errors?.address && (<p className='invalid-feedback'>{errors?.address?.message.toString()}</p>)}
                    </div>
                </div>
                <div className="row col-sm-12 col-md-6 my-2">
                    <label htmlFor="inputEmail3" className="col-lg-3 col-sm-12 col-md-3 col-form-label"> تاريخ البدايه</label>
                    <div className="col-sm-12 col-md-6">
                        <input
                            className={`form-control ${errors?.startDate ? 'is-invalid' : ''}`}
                            type="date"
                            name="startDate"
                            {...register('startDate', {
                                required: true,
                            })}
                        />
                        {errors?.startDate && (<p className='invalid-feedback'>{errors?.startDate?.message.toString()}</p>)}
                    </div>
                </div>
                <div className="row col-sm-12 col-md-6 my-2">
                    <label htmlFor="inputEmail3" className="col-lg-3 col-sm-12 col-md-3 col-form-label">تاريخ النهايه</label>
                    <div className="col-sm-12 col-md-6">
                        <input
                            className={`form-control ${errors?.endDate ? 'is-invalid' : ''}`}
                            type="date"
                            name="endDate"
                            {...register('endDate', {
                                required: true,
                            })}
                        />
                        {errors?.endDate && (<p className='invalid-feedback'>{errors?.endDate?.message.toString()}</p>)}
                    </div>
                </div>
                <div className="row col-sm-12 col-md-6 my-2">
                    <label htmlFor="inputEmail3" className="col-lg-3 col-sm-12 col-md-3 col-form-label">الحاله</label>
                    <div className="col-sm-12 col-md-6">
                        <select className="form-control" {...register('status', {
                                required: true,
                            })}
                            >
                                <option value={ProjectStatus.UnderConstruction}>تحت الانشاء</option>
                                <option value={ProjectStatus.AvailableForRental}>متاح للتاجير</option>
                                <option value={ProjectStatus.AvailableForSale}>متاح للبيع</option>
                        </select>
                        {errors?.status && (<p className='invalid-feedback'>{errors?.status?.message.toString()}</p>)}
                    </div>
                </div>
                <label htmlFor="inputEmail3" className="col-sm-12 col-form-label">التفاصيل</label>
                <div className="col-sm-12">
                    <textarea
                        rows={10}
                        className={`form-control ${errors?.description ? 'is-invalid' : ''}`}
                        name="description"
                        {...register('description', {
                            required: true,
                        })}
                    />
                    {errors?.description && (<p className='invalid-feedback'>{errors?.description?.message.toString()}</p>)}
                </div>
                <label htmlFor="inputEmail3" className="col-sm-12 col-form-label">الصور</label>
                <ImageFormComponent images={images} setImage={setImages} />
                <label htmlFor="inputEmail3" className="col-sm-12 col-form-label">المميزات</label>
                {
                    features?.map((item)=>{
                        return <>
                           <label htmlFor="inputEmail3" className="col-sm-12 col-form-label p-2 bg-light">{item.name}</label>
                           <div className="row">
                            {
                                item?.features?.map((featureItem,i)=>{return <>
                                <div className="col-12 col-md-4 position-relative">
                                    
                                    <input type="checkbox"
                                    
                                     id={`${featureItem.name}${i}`}
                                     defaultChecked={featureItem.check??false} 
                                      value={featureItem.id} className="position-absolute" style={{top:'0.5rem'}} onChange={setFeature}/>
                                    <label htmlFor={`${featureItem.name}${i}`} className="d-flex align-items-center my-2">
                                        <img src={`${import.meta.env.VITE_baseImageUrl}${featureItem.icon.attachmentUrl}`} style={{width:'40px',height:'40px'}}/>
                                        <p className="m-0 mx-2">{featureItem.name}</p>
                                    </label>
                                </div>
                                </>})
                            }

                           </div>
                        </>
                        
                    })
                }
                {isLoading && <>
                            <div className='d-flex justify-content-center align-items-center'>
                                <img src={'/assets/images/loader.svg'} width={'100px'} height={'100px'} />
                            </div>
                        </>}
                        {!isLoading &&<>
                <div className="col-sm-12 d-flex justify-content-center my-2">
                    <button type='submit' disabled={!(IsValid&&isValid)} className={`btn rounded-0 ${data ? 'btn-success' : 'btn-submit'} text-white`}>{data ? 'تعديل' : 'اضافه'} المشروع</button>
                    <button type='button' className={`btn rounded-0 btn-dark`} onClick={() => { setShowForm(false) }}>تراجع</button>
                </div></>}
            </div>
        </form>
    </>
}
export default ProjectsFormComponent;
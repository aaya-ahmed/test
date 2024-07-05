import NewService from "../../../../services/news.service";
import { useForm } from "react-hook-form";
import { ImageFormComponent } from "../../../../components/shared/image/imageForm";
import { useEffect, useState } from "react";
import { status } from "const/status";

const NewsFormComponent = ({ data,setData, setShowForm }: { data: any,setData:(data:any)=>void, setShowForm: (data: any) => void }) => {
    const {
        handleSubmit,
        formState: { errors, isValid },
        register,
        setValue
    } = useForm({ mode: 'onBlur' });
    const [images, setImage] = useState<{
        file: File,
        id: number,
        name: string,
        attachmentUrl: string,
        isMain: boolean,
        status?:number
    }[]>([]);
    const [IsValid,setIsValid]=useState<boolean>()
    useEffect(() => {
        if (data) {
            if (data.attachments?.length > 0) {
                for (let i = 0; i < data.attachments.length; i++) {
                    images.push({
                        id: data.attachments[i].id,
                        file: null,
                        name: data.attachments[i].name,
                        attachmentUrl: data.attachments[i].attachmentUrl,
                        isMain: data.attachments[i].isMain
                    })
                }
                setImage(data.attachments)
            }
            for (const key in data) {
                setValue(key, data[key])
            }
        }
    }, [data])
    useEffect(()=>{
        setIsValid(images.length-images.filter(p=>p.status==status.Delete).length>0);
    },[images])

    const submit = (e) => {
        const formData = new FormData();
        const newImages=images.filter(p=>p.status>=0)
        for (let i = 0; i < newImages.length; i++) {
            formData.append(`attachments[${i}].id`, `${newImages[i].id}`);
            if(newImages[i].file){
                formData.append(`attachments[${i}].attachmentFile`, newImages[i].file);
            }
            formData.append(`attachments[${i}].name`, newImages[i].file?.name??newImages[i].name)
            newImages[i].status&&formData.append(`attachments[${i}].status`, `${newImages[i].status}`)
            i == 0 && formData.append(`attachments[${i}].isMain`, `${true}`)

        }
        delete e.attachments;
        for (const key in e) {
            formData.append(key, e[key].toString())
        }
        if(data){
            new NewService().PutWithFile(formData).then(
                res => {
                    setData(null)
                    setShowForm(false)
                }
            )
        }else{
            new NewService().PostWithFile(formData).then(
                res => {
                    setData(null)
                    setShowForm(false)
                
                }
            )
        }

    }
    return <>
        <form method='post' onSubmit={handleSubmit(submit)} className={`mb-5 bg-white p-3 rounded-3`}>
            <div className="container row mb-3 ms-auto my-4">
                <div className="row col-sm-12 col-md-6">
                    <label htmlFor="inputEmail3" className="col-lg-2 col-sm-12 col-md-3 col-form-label">العنوان</label>
                    <div className="col-sm-12 col-md-6">
                        <input
                            className={`form-control ${errors?.title ? 'is-invalid' : ''}`}
                            type="text"
                            name="title"
                            {...register('title', {
                                required: true,
                                maxLength: {
                                    value: 50,
                                    message: "This input exceed maxLength(50).",
                                },

                            })}
                        />
                        {errors?.title && (<p className='invalid-feedback'>{errors?.title?.message.toString()}</p>)}
                    </div>
                </div>
                <div className="row col-sm-12 col-md-6">
                    <label htmlFor="inputEmail3" className="col-lg-2 col-sm-12 col-md-3 col-form-label">التاريخ</label>
                    <div className="col-sm-12 col-md-6">
                        <input
                            className={`form-control ${errors?.createdDate ? 'is-invalid' : ''}`}
                            type="date"
                            name="createdDate"
                            {...register('createdDate', {
                                required: true,
                            })}
                        />
                        {errors?.createdDate && (<p className='invalid-feedback'>{errors?.createdDate?.message.toString()}</p>)}
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

                <ImageFormComponent images={images} setImage={setImage} />
                <div className="col-sm-12 d-flex justify-content-center my-2">
                    <button type='submit' disabled={!(IsValid&&isValid)} className={`btn rounded-0 ${data ? 'btn-edit' : 'btn-submit'}`}>{data ? 'تعديل' : 'اضافه'} الخبر</button>
                    <button type='button' className={`btn rounded-0 btn-dark`} onClick={() => { setShowForm(false) }}>تراجع</button>
                </div>
            </div>
        </form>
    </>
}
export default NewsFormComponent;
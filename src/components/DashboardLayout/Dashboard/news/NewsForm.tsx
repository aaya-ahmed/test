import NewService from "../../../../services/news.service";
import { useForm } from "react-hook-form";
import { ImageFormComponent } from "../../../../components/shared/image/imageForm";
import { useEffect, useState } from "react";
import { status } from "const/status";
import { Notification } from "@shared/notification";

const NewsFormComponent = ({ data, setData, setShowForm }: { data: any, setData: (data: any) => void, setShowForm: (data: any) => void }) => {
    const [isLoading,setIsLoading]=useState<boolean>();
    const {
        handleSubmit,
        formState: { errors, isValid },
        register,
    } = useForm({
        mode: 'all', defaultValues: {
            id: data?.id ?? 0,
            createdDate: data?.createdDate.substring(0, 10) ?? '',
            title: data?.title ?? '',
            description: data?.description ?? ''
        }
    });
    const [images, setImage] = useState<{
        file: File,
        id: number,
        name: string,
        attachmentUrl: string,
        isMain: boolean,
        status?: number
    }[]>([]);
    const [IsValid, setIsValid] = useState<boolean>()
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
        }
    }, [data])
    useEffect(() => {
        setIsValid(images.length - images.filter(p => p.status == status.Delete).length > 0);
    }, [images])

    const submit = (e) => {
        setIsLoading(true)
        const formData = new FormData();
        const newImages = images.filter(p => p.status >= 0)
        for (let i = 0; i < newImages.length; i++) {
            formData.append(`attachments[${i}].id`, `${newImages[i].id}`);
            if (newImages[i].file) {
                formData.append(`attachments[${i}].attachmentFile`, newImages[i].file);
            }
            formData.append(`attachments[${i}].name`, newImages[i].file?.name ?? newImages[i].name)
            newImages[i].status && formData.append(`attachments[${i}].status`, `${newImages[i].status}`)
            i == 0 && formData.append(`attachments[${i}].isMain`, `${true}`)

        }
        delete e.attachments;
        for (const key in e) {
            formData.append(key, e[key].toString())
        }
        if (data) {
            new NewService().PutWithFile(formData).then(
                res => {
                    setData(null)
                    setShowForm(false)
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
        } else {
            new NewService().PostWithFile(formData).then(
                res => {
                    setData(null)
                    setShowForm(false)
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
    return <>
        <form method='post' onSubmit={handleSubmit(submit)} className={`mb-5 bg-white p-3 rounded-3`}>
            <div className="container ms-auto">
                <div className="form-group">
                    <label htmlFor="news-title" className="form-label">العنوان *</label>
                    <input
                        id="news-title"
                        className={`form-control ${errors?.title ? 'is-invalid' : ''}`}
                        type="text"
                        name="title"
                        {...register('title', {
                            required:true,
                            maxLength: {
                                value: 100,
                                message: "يجب ان يكون اقل من 100 حرف",
                            },

                        })}
                    />
                    {errors?.title && (<p className='invalid-feedback'>{errors?.title?.message.toString()}</p>)}
                </div>
                <div className="form-group my-1">
                    <label htmlFor="news-date" className="form-label">التاريخ *</label>
                    <input
                        id="news-date"
                        className={`form-control ${errors?.createdDate ? 'is-invalid' : ''}`}
                        type="date"
                        name="createdDate"
                        {...register('createdDate', {
                            required: true,

                        })}
                    />
                </div>
                <div className="form-group my-1">
                    <label htmlFor="news-details" className="form-label">التفاصيل *</label>
                    <textarea
                        id="news-details"
                        rows={10}
                        className={`form-control ${errors?.description ? 'is-invalid' : ''}`}
                        name="description"
                        {...register('description', {
                            required: true,
                        })}
                    />
                </div>
                <div className="form-group my-1">
                    <label htmlFor="images" className="form-label">الصور *</label>
                    <ImageFormComponent images={images} setImage={setImage} />
                </div>
                {isLoading && <>
                            <div className='d-flex justify-content-center align-items-center'>
                                <img src={'/assets/images/loader.svg'} width={'100px'} height={'100px'} />
                            </div>
                        </>}
                        {!isLoading &&<><div className="col-sm-12 d-flex justify-content-center my-2">
                    <button type='submit' disabled={!(IsValid && isValid)} className={`btn rounded-0 ${data ? 'btn-success' : 'btn-submit'}`}>{data ? 'تعديل' : 'اضافه'} الخبر</button>
                    <button type='button' className={`btn rounded-0 btn-dark`} onClick={() => { setShowForm(false);setData(null) }}>تراجع</button>
                </div></>}
            </div>
        </form >
    </>
}
export default NewsFormComponent;
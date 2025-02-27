import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import FeatureProjectService from "../../../../services/feature-project.service";
import uploadimage from "./upload.jpg";
import { status } from "../../../../const/status";
import FeatureService from "../../../../services/feature.service";
import { Notification } from "@shared/notification";
type ProjectFeatureFormProp = {
    setShowForm: (data: boolean) => void,
    data: any,
    setData: (data: any) => void
};
const Service = new FeatureProjectService();
export default function ProjectFeatureForm({ setShowForm, data, setData }: ProjectFeatureFormProp) {
    const [features, setFeatures] = useState<any[]>([]);
    const [file, setFile] = useState<File>(null);
    const [selecteditem, setSelecteditem] = useState<any>();
    const [valueIcon, setValueIcon] = useState<any>();
    const [featureName, setFeatureName] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>();
    useEffect(() => {
        if (data) {
            new FeatureService().Get([{ type: 'Number', name: 'featureProjectCategoryId', value: `${data.id}` }]).then(
                res => {
                    setFeatures(res)
                }
            )
        }
    }, [])
    const {
        setValue,
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({ mode: 'onBlur' });
    useEffect(() => {
        if (data) {
            for (const key in data) {
                setValue(key, data[key])
            }
        }
    }, [data])
    const Submit = (e) => {
        if (features.length > 0) {
            setIsLoading(true);
            const formData = new FormData();
            e.id && formData.append('id', `${e.id}`)
            formData.append('name', e.name)
            const filteringFeatures = features.filter(p => p.icon.status > -1)
            console.log(filteringFeatures)
            for (let i = 0; i < filteringFeatures.length; i++) {
                filteringFeatures[i].featureProjectCategoryId && formData.append(`features[${i}].featureProjectCategoryId`, `${filteringFeatures[i].featureProjectCategoryId}`);
                filteringFeatures[i].id && formData.append(`features[${i}].id`, `${filteringFeatures[i].id}`);
                formData.append(`features[${i}].name`, filteringFeatures[i].name);
                //icon
                filteringFeatures[i]?.icon?.id && formData.append(`features[${i}].icon.id`, `${filteringFeatures[i].icon.id}`);
                formData.append(`features[${i}].icon.name`, filteringFeatures[i].icon.name);
                filteringFeatures[i].icon?.attachmentFile && formData.append(`features[${i}].icon.attachmentFile`, filteringFeatures[i].icon.attachmentFile);
                filteringFeatures[i].icon?.attachmentUrl && formData.append(`features[${i}].icon.attachmentUrl`, filteringFeatures[i].icon.attachmentUrl);
                formData.append(`features[${i}].icon.isMain`, `${filteringFeatures[i].icon.isMain}`);
                filteringFeatures[i].icon?.status > -1
                    && formData.append(`features[${i}].icon.status`, `${filteringFeatures[i].icon?.status}`);

            }
            if (data) {
                Service.PutWithFile(formData).then(
                    res => {
                        setShowForm(false)
                        setData(null)
                    setIsLoading(false)
                        Notification({
                            title: "تمت العمليه بنجاح",
                            type: 'success'
                        })
                    }
                ).catch(err => {
                    setIsLoading(false)
                    Notification({
                        title: "حدث خطأ",
                        type: 'error'
                    })
                })
            }
            else {
                Service.PostWithFile(formData).then(
                    res => {
                        setData(null)
                    setIsLoading(false)
                        Notification({
                            title: "تمت العمليه بنجاح",
                            type: 'success'
                        })
                    }
                ).catch(err => {
                    setIsLoading(false)
                    Notification({
                        title: "حدث خطأ",
                        type: 'error'
                    })
                })
            }
        }
    }
    const addFeature = () => {
        if (featureName && file) {
            features.push(
                {
                    index: (Math.random() * 100).toFixed(0),
                    name: featureName,
                    icon: {
                        name: file.name.substring(0, 5),
                        attachmentFile: file,
                        isMain: true,
                        status: status.Add
                    }
                }
            )
            setFeatures([...features]);
            restFields();
        }
    }
    const updateFeature = () => {
        console.log((featureName && data))
        console.log((featureName && file && !data))
        if ((featureName && data) || (featureName && file && !data)) {
            const index = features.findIndex(p => (p?.index == selecteditem?.index || (selecteditem?.id && (p?.id == selecteditem?.id))))
            console.log(index)
            console.log(file)
            features[index] = {
                ...features[index],
                name: featureName,
                icon: {
                    id: features[index].id,
                    featureId: features[index].featureId,
                    name: file?.name.substring(0, 5) ?? features[index].icon.name,
                    attachmentFile: file ?? features[index]?.icon?.attachmentFile,
                    attachmentUrl: file ? '' : features[index]?.icon?.attachmentUrl,
                    isMain: true,
                    status: features[index].index ? status.Add : status.Update
                }
            }
            setFeatures([...features])
            restFields()
        }
    }
    const deleteFeature = (index) => {
        setFeatures(features.filter((p, i) => i != index))
    }
    const setImage = (e) => {
        setFile(e.target.files[0])
    }
    const setFields = (item) => {
        setSelecteditem(item)
        setFeatureName(item.name)
        console.log(item?.icon?.attachmentFile)
        setFile(item?.icon?.attachmentFile);
        (document.getElementById('featureName') as any).value = item.name;
    }
    const restFields = () => {
        setFile(null);
        setFeatureName(null);
        setSelecteditem(null);
        (document.getElementById('featureName') as any).value = '';
        (document.getElementById('icon') as any).value = null;
    }
    useEffect(() => { console.log(valueIcon) }, [valueIcon])
    return (
        <>
            <form method='post' onSubmit={handleSubmit(Submit)}>
                <div className="ms-auto">
                    <div className="form-group">
                        <label htmlFor="feature-title" className="form-label">الاسم *</label>
                        <input
                            id="feature-title"
                            className={`form-control ${errors?.name ? 'is-invalid' : ''}`}
                            type="text"
                            name="name"
                            {...register('name', {
                                required: true,
                                maxLength: {
                                    value: 50,
                                    message: "لا يجب ان يكون اكبر من 50",
                                },

                            })}
                        />
                        {errors?.name && (<p className='invalid-feedback'>{errors?.name?.message.toString()}</p>)}
                    </div>
                    <div className="col-12 bg-dark text-white my-2 p-2">
                        <h5 className="m-0">المميزات</h5>
                    </div>
                    <div className="row align-items-end  mb-2">
                        <div className="col-1 ">
                            <label htmlFor="icon">
                                <img src={file ? URL.createObjectURL(file) : selecteditem ? `${import.meta.env.VITE_baseImageUrl}${selecteditem.icon.attachmentUrl}` : uploadimage} style={{ width: '50px', height: '50px' }} />
                            </label>
                            <input type="file" name="icon" accept="image/*" id="icon" hidden onChange={setImage} />
                        </div>
                        <div className="col-8">
                            <label htmlFor="featureName">
                                الاسم
                            </label>
                            <input type="text" maxLength={50} className="form-control" name="featureName" id="featureName" onBlur={e => setFeatureName(e.target.value)} />
                        </div>
                        <div className="col-2">
                            {(selecteditem == null) && <button className="btn btn-success" type="button" onClick={() => { addFeature() }}>اضافه</button>}
                            {(selecteditem != null) && <button className="btn btn-success mr-2" type="button" onClick={() => updateFeature()}>حفظ</button>}

                        </div>
                    </div>
                </div>

                {isLoading && <>
                    <div className='d-flex justify-content-center align-items-center'>
                        <img src={'/assets/images/loader.svg'} width={'100px'} height={'100px'} />
                    </div>
                </>}
                {!isLoading && <>
                    <div className=" col-12 d-flex justify-content-center my-2">
                        <button type='submit' disabled={isValid && features?.length == 0} className={`btn rounded-0 ${data ? 'btn-edit' : 'btn-submit'} text-white`}>{data ? 'تعديل' : 'اضافه'} المميزات</button>
                        <button type='button' className={`btn rounded-0 btn-dark `} onClick={() => { setData(null); setShowForm(false) }}>تراجع</button>
                    </div></>}
            </form>
            {features?.map((item, i) => {
                return <>
                    <div className="row align-items-end my-1">
                        <div className="col-1">
                            <label>
                                <img src={item?.icon?.attachmentUrl ? `${import.meta.env.VITE_baseImageUrl}${item?.icon?.attachmentUrl}` : URL.createObjectURL(item?.icon?.attachmentFile)} style={{ width: '50px', height: '50px' }} />
                            </label>
                        </div>
                        <div className="col-8">
                            <label className="form-control">
                                {item.name}
                            </label>
                        </div>
                        {(!selecteditem?.index || (selecteditem?.index != item.index)) && <div className="col-2">
                            <button className="btn mr-2 text-success p-0" type="button" onClick={() => setFields(item)}>
                                <i className="fa fa-edit"></i>
                            </button>
                            <button className="btn text-danger mx-2" type="button" onClick={() => deleteFeature(i)}>
                                <i className="fa fa-trash"></i>
                            </button>
                        </div>}
                    </div>
                </>
            })}
        </>);
}
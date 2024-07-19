import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { status } from "../../../../const/status";
import ProjectService from "../../../../services/projects.service";
import { ProjectStatus } from "../../../../const/projectStatus";
import uploadimage from "./upload.jpg";
import UnitService from "@services/units.service";
import { Notification } from "@shared/notification";

const UnitsFormComponent = (
    { data, setData, setShowForm }: { data: any, setData: (data: any) => void, setShowForm: (data: any) => void }
) => {
    const [isLoading,setIsLoading]=useState<boolean>();
    const [featureName, setFeatureName] = useState<string>('');
    const [file, setFile] = useState<File>(null);
    const [selecteditem, setSelecteditem] = useState<any>();
    const [features, setFeatures] = useState<any[]>([]);
    const [mainImage, setMainImage] = useState<File>(null);
    ///////////////////////////////////////////////////Data///////////////////////////////////////////////////////////////////////
    useEffect(() => {
        console.log(data)
        if (data) {
            if (data.features?.length > 0) {
                for (let i = 0; i < data.features.length; i++) {
                    features.push({
                        id: data.features[i].id,
                        file: null,
                        name: data.features[i].name,
                        imageUrl: data.features[i].imageUrl,
                    })
                }
                setFeatures([...features])
            }
            delete data.features;
            for (const key in data) {
                setValue(key, data[key])
            }
        }
    }, [data])
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    const [projects, setProjects] = useState<any[]>([]);
    useEffect(() => {
        new ProjectService().Get().then(
            res => {
                setProjects(res)
            }
        )
    }, []);
    const {
        handleSubmit,
        formState: { errors, isValid },
        register,
        setValue
    } = useForm({ mode: 'onBlur' });

    ///////////////////////////////////////////////////////////features////////////////////////////////////////////////////////////////
    useEffect(() => {
        if (!featureName) (document.getElementById('featureName') as any).value = '';
    }, [featureName])
    const setFields = (item) => {
        setSelecteditem(item)
        setFeatureName(item.name)
        setFile(item?.image);
        (document.getElementById('featureName') as any).value = item.name;
    }
    const restFields = () => {
        setFile(null);
        setFeatureName(null);
        setSelecteditem(null);
        (document.getElementById('featureName') as any).value = '';
    }
    const addFeature = () => {
        if (featureName && file) {
            features.push(
                {
                    index: (Math.random() * 100).toFixed(0),
                    name: featureName,
                    image: file,
                    status: status.Add
                }
            )
            setFeatures([...features]);
            restFields();
        }
    }
    const updateFeature = () => {
        if ((featureName && data) || (featureName && file && !data)) {
            const index = features.findIndex(p => (p?.index == selecteditem?.index || (selecteditem?.id && (p?.id == selecteditem?.id))))
            features[index] = {
                ...features[index],
                name: featureName,
                image: file ?? features[index]?.image,
                imageUrl: file ? '' : features[index]?.imageUrl,
                status: features[index].index ? status.Add : status.Update
            }
            setFeatures([...features])
            restFields()
        }
    }
    const deleteFeature = (index) => {
        setFeatures(features.map((p, i) => i == index ? { ...p, status: status.Delete } : p))
    }
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    const setImage = (e) => {
        setFile(e.target.files[0])
    }
    const setUnitImage = (e) => {
        setMainImage(e.target.files[0])
    }
    const submit = (e) => {
        setIsLoading(true);
        const formData = new FormData();
        const newFeatures = features.filter(p => p.status >= 0)
        console.log(newFeatures)
        for (let i = 0; i < newFeatures.length; i++) {
            formData.append(`featuresUnit[${i}].id`, `${newFeatures[i].id ?? 0}`);
            formData.append(`featuresUnit[${i}].name`, `${newFeatures[i].name}`)
            newFeatures[i].image && formData.append(`featuresUnit[${i}].mainImage`, newFeatures[i].image)
            newFeatures[i].imageUrl && formData.append(`featuresUnit[${i}].imageUrl`, `${newFeatures[i].imageUrl}`)
            newFeatures[i].status >= 0 && formData.append(`featuresUnit[${i}].status`, `${newFeatures[i].status}`)
        };
        mainImage && formData.append(`mainImage`, mainImage)
        delete e.features;
        for (const key in e) {
            formData.append(key, e[key].toString())
        }
        if (data) {
            new UnitService().PutWithFile(formData).then(
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
        } else {
            new UnitService().PostWithFile(formData).then(
                res => {
                    setData(null)
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
        <form method='post' onSubmit={handleSubmit(submit)} className={`mb-5 bg-white p-5 rounded-3`}>
            <div className="my-2">
                <label htmlFor="inputEmail3" className="col-lg-3 col-sm-12 col-md-3 col-form-label">المشروع</label>
                <div>
                    <select className={`form-control ${errors?.projectId ? 'is-invalid' : ''}`} name="projectId"
                        {...register('projectId', {
                            required: true,
                        })}
                    >
                        {projects?.map(item => {
                            return <option value={item.id}>{item.name}</option>
                        })}
                    </select>
                    {errors?.projectId && (<p className='invalid-feedback'>{errors?.projectId?.message.toString()}</p>)}
                </div>
            </div>
            <div className="row align-items-center">
                <div className="container mb-3 ms-auto my-4 col-12 col-md-6">
                    <div className="my-2">
                        <label htmlFor="inputEmail3" className="col-lg-3 col-sm-12 col-md-3 col-form-label">الاسم</label>
                        <div>
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
                    {data && (<div className="row col-sm-12 col-md-6 my-2">
                        <label htmlFor="inputEmail3" className="col-lg-3 col-sm-12 col-md-3 col-form-label">الحاله</label>
                        <div className="col-sm-12 col-md-6">
                            <select className="form-control" {...register('status', {
                                required: true,
                            })}>
                                <option value={ProjectStatus.AvailableForSale}>متاح للبيع</option>
                                <option value={ProjectStatus.SoldOut}>تم البيع</option>
                                <option value={ProjectStatus.AvailableForRental}>متاح للايجار</option>
                                <option value={ProjectStatus.Rental}>تم الايجار</option>
                            </select>
                            {errors?.status && (<p className='invalid-feedback'>{errors?.status?.message.toString()}</p>)}
                        </div>
                    </div>)}
                    <div className="my-2">
                        <label htmlFor="inputEmail3" className="col-lg-3 col-sm-12 col-md-3 col-form-label">المساحه</label>
                        <div>
                            <input
                                className={`form-control ${errors?.name ? 'is-invalid' : ''}`}
                                type="number"
                                name="area"
                                {...register('area', {
                                    required: true,
                                    min: {
                                        value: 1,
                                        message: "This input exceed min(1).",
                                    },

                                })}
                            />
                            {errors?.area && (<p className='invalid-feedback'>{errors?.area?.message.toString()}</p>)}
                        </div>
                    </div>
                    <div className="my-2">
                        <label htmlFor="inputEmail3" className="col-lg-3 col-sm-12 col-md-3 col-form-label">رقم المبني</label>
                        <div>
                            <input
                                className={`form-control ${errors?.name ? 'is-invalid' : ''}`}
                                type="number"
                                name="buildingNumber"
                                {...register('buildingNumber', {
                                    required: true,
                                    min: {
                                        value: 1,
                                        message: "This input exceed min(1).",
                                    },

                                })}
                            />
                            {errors?.buildingNumber && (<p className='invalid-feedback'>{errors?.buildingNumber?.message.toString()}</p>)}
                        </div>
                    </div>
                    <div className="my-2">
                        <label htmlFor="inputEmail3" className="col-lg-3 col-sm-12 col-md-3 col-form-label">مستوي المبني</label>
                        <div>
                            <input
                                className={`form-control ${errors?.name ? 'is-invalid' : ''}`}
                                type="number"
                                name="buildingLevel"
                                {...register('buildingLevel', {
                                    required: true,
                                    min: {
                                        value: 1,
                                        message: "This input exceed min(1).",
                                    },

                                })}
                            />
                            {errors?.buildingLevel && (<p className='invalid-feedback'>{errors?.buildingLevel?.message.toString()}</p>)}
                        </div>
                    </div>
                    <div className="my-2">
                        <label htmlFor="inputEmail3" className="col-lg-3 col-sm-12 col-md-3 col-form-label">عدد الغرف</label>
                        <div>
                            <input
                                className={`form-control ${errors?.name ? 'is-invalid' : ''}`}
                                type="number"
                                name="roomCount"
                                {...register('roomCount', {
                                    required: true,
                                    min: {
                                        value: 1,
                                        message: "This input exceed min(1).",
                                    },

                                })}
                            />
                            {errors?.roomCount && (<p className='invalid-feedback'>{errors?.roomCount?.message.toString()}</p>)}
                        </div>
                    </div>
                    <div className="my-2">
                        <label htmlFor="inputEmail3" className="col-lg-3 col-sm-12 col-md-3 col-form-label">السعر</label>
                        <div>
                            <input
                                className={`form-control ${errors?.name ? 'is-invalid' : ''}`}
                                type="number"
                                name="price"
                                {...register('price', {
                                    required: true,
                                    min: {
                                        value: 1,
                                        message: "This input exceed min(1).",
                                    },

                                })}
                            />
                            {errors?.price && (<p className='invalid-feedback'>{errors?.price?.message.toString()}</p>)}
                        </div>
                    </div>
                    <div className="my-2">
                        <label htmlFor="inputEmail3" className="col-lg-3 col-sm-12 col-md-3 col-form-label">التامين</label>
                        <div>
                            <input
                                className={`form-control ${errors?.name ? 'is-invalid' : ''}`}
                                type="number"
                                name="insurance"
                                {...register('insurance', {
                                    required: true,
                                    min: {
                                        value: 1,
                                        message: "This input exceed min(1).",
                                    },

                                })}
                            />
                            {errors?.insurance && (<p className='invalid-feedback'>{errors?.insurance?.message.toString()}</p>)}
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <label htmlFor="unitImage" className="d-block">
                        <img src={mainImage ? URL.createObjectURL(mainImage) : data?.imageUrl ? `${import.meta.env.VITE_baseImageUrl}${data?.imageUrl}` : uploadimage} width={'100%'} height={'100%'} />
                    </label>
                    <input type="file" name="image" accept="image/*" onChange={setUnitImage} hidden id="unitImage" />
                </div>
            </div>

            <label htmlFor="inputEmail3" className="col-sm-12 col-form-label">التفاصيل</label>
            <div className="col-sm-12">
                <textarea
                    rows={1}
                    className={`form-control ${errors?.description ? 'is-invalid' : ''}`}
                    name="description"
                    {...register('description', {
                        required: true,
                    })}
                />
                {errors?.description && (<p className='invalid-feedback'>{errors?.description?.message.toString()}</p>)}
            </div>

            <label htmlFor="inputEmail3" className="col-sm-12 col-form-label">المميزات</label>
            <div className="row align-items-end">
                <div className="col-1">
                    <label htmlFor="icon">
                        <img src={file ? URL.createObjectURL(file) : selecteditem ? `${import.meta.env.VITE_baseImageUrl}${selecteditem?.imageUrl}` : uploadimage} width={'50px'} height={'50px'} />
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
            {features?.map((item, i) => {
                return <>
                    {item.status != status.Delete && (<div className="row align-items-end">
                        <div className="col-1">
                            <label>
                                <img src={item?.imageUrl ? `${import.meta.env.VITE_baseImageUrl}${item?.imageUrl}` : URL.createObjectURL(item?.image)} width={'50px'} height={'50px'} />
                            </label>
                        </div>
                        <div className="col-8">
                            <label className="form-control">
                                {item.name}
                            </label>
                        </div>
                        {(!selecteditem?.index || (selecteditem?.index != item.index)) && <div className="col-2">
                            <button className="btn p-0 mr-2 text-success" type="button" onClick={() => setFields(item)}>
                                <i className="fa fa-edit"></i>
                            </button>
                            <button className="btn p-0 mx-2 text-danger" type="button" onClick={() => deleteFeature(i)}>
                                <i className="fa fa-trash"></i>
                            </button>
                        </div>}
                    </div>)}
                </>
            })}
            {isLoading && <>
                <div className='d-flex justify-content-center align-items-center'>
                    <img src={'/assets/images/loader.svg'} width={'100px'} height={'100px'} />
                </div>
            </>}
            {!isLoading && <>
                <div className="col-sm-12 d-flex justify-content-center mt-5">
                    <button type='submit' disabled={!isValid} className={`btn rounded-0 ${data ? 'btn-edit' : 'btn-submit'}`}>{data ? 'تعديل' : 'اضافه'} الوحده</button>
                    <button type='button' className={`btn rounded-0 btn-dark`} onClick={() => { setData(null); setShowForm(false) }}>تراجع</button>
                </div></>}
        </form >
    </>
}
export default UnitsFormComponent;
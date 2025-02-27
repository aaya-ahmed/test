import { useForm } from 'react-hook-form';
import ContactReasonService from '../../../../services/contact-reason.service';
import { useEffect, useState } from 'react';
import { Notification } from '@shared/notification';
import { contactreason } from './ContactsReason.types';
type ContactsReasonFormProp = {
    setShowForm: (show: boolean) => void,
    data?: contactreason,
    setData: (data: any) => void
}
const Service = new ContactReasonService();
const ContactsReasonFormComponent = ({ setShowForm, data, setData }: ContactsReasonFormProp) => {
    const [isLoading,setIsLoading]=useState<boolean>()
    const {
        setValue,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: 'onBlur' });
    useEffect(() => {
        if (data) {
            for (const key in data) {
                setValue(key, data[key])
            }
        }
    }, [data]);
    const Submit = (e) => {
        setIsLoading(true)
        if (data) {
            Service.Put(e).then(
                res => {
                    setShowForm(false)
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
        else {
            Service.Post(e).then(
                res => {
                    Notification({
                        title: "تمت العمليه بنجاح",
                        type: 'success'
                    })
                    setIsLoading(false)
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
    return (
        <>
            <form method='post' onSubmit={handleSubmit(Submit)} className={`mb-5 p-4 bg-white rounded-3`}>
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="form-label">سبب التواصل</label>
                    <div className="form-group">
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
                    <div className="my-2 ms-auto" style={{ width: 'fit-content' }}>
                        {isLoading && <>
                            <div className='d-flex justify-content-center align-items-center'>
                                <img src={'/assets/images/loader.svg'} width={'100px'} height={'100px'} />
                            </div>
                        </>}
                        {!isLoading &&<><button type='submit' className={`btn rounded-0 ${data ? 'btn-success' : 'btn-submit'}`}>{data ? 'تعديل' : 'اضافه'} السبب</button>
                        <button type='button' className={`btn rounded-0 btn-dark`} onClick={() => { setData(null); setShowForm(false) }}>تراجع</button>
                        </>}
                    </div>
                </div>
            </form>
        </>
    );
};
export default ContactsReasonFormComponent;

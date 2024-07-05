import { useForm } from 'react-hook-form';
import styles from './ContactsReason.module.scss';
import ContactReasonService from '../../../../services/contact-reason.service';
import { useEffect } from 'react';
type ContactsReasonFormProp = {
    setShowForm: (show: boolean) => void,
    data?: any,
    setData:(data:any)=>void
}
const Service = new ContactReasonService();
const ContactsReasonFormComponent = ({ setShowForm, data,setData }: ContactsReasonFormProp) => {
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
    }, [data])
    const Submit = (e) => {
        if (data) {
            Service.Put(e).then(
                res => {
                    setShowForm(false)
                    setData(null)
                }
            )
        }
        else {
            Service.Post(e).then(
                res => {
                    setShowForm(false)
                    setData(null)
                }
            )
        }
    }
    return (
        <>
            <form method='post' onSubmit={handleSubmit(Submit)} className={`mb-5 p-4 bg-white rounded-3`}>
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-lg-2 col-sm-12 col-md-3 col-form-label">سبب التواصل</label>
                    <div className="col-sm-8 col-md-6">
                        <input
                            className={`form-control ${errors?.name?'is-invalid':''}`}
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
                        {errors?.name&&(<p className='invalid-feedback'>{errors?.name?.message.toString()}</p>)}
                    </div>
                    <div className=" col-lg-4 col-sm-12 col-md-3">
                    <button type='submit' className={`btn rounded-0 ${data ? 'btn-success' : styles['btn-submit']}`}>{data ? 'تعديل' : 'اضافه'} السبب</button>
                    <button type='button' className={`btn rounded-0 btn-dark`} onClick={()=>{setData(null);setShowForm(false)}}>تراجع</button>
                    </div>
                </div>
            </form>
        </>
    );
};
export default ContactsReasonFormComponent;

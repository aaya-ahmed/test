import React, { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import './inquiry.scss'
import Breadcrumb from "../shared/breadcrumb/breadcrumb";
import InterestedService from "../../services/interested.service";
import ProjectService from "../../services/projects.service";
const Inquiry = () => {
    const [projects, setProjects] = useState<any[]>([]);
    useEffect(() => {
        new ProjectService().Get().then(
            res => {
                setProjects(res)
            }
        )
    }, []);
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({mode:'onBlur'});
    const submit=(e)=>{
        new InterestedService().Post(e).then(
            res=>{
                reset();
                
            }
        )
    }
    return (<>
        <div className={`${'sec-title'} text-center`}>
          <strong className={`h1 fw-bold d-block ${'text-title'} `}>
            سجل اهتمامك
          </strong>
        </div>
    <Breadcrumb path={[{name:'الصفحه الرئيسيه',href:'/home'},{name:'سجل اهتمامك',href:'/inquiry'}]} />
        <div className="contact-page py-5">

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-11">
                        <div className="text-center mb-5">
                            <strong className="h4 d-block"> سجل اهتمامك  </strong>
                        </div>
                        <form onSubmit={handleSubmit(submit)} className="mt-4" style={{ border: "1px solid #ddd", padding: "20px", boxShadow: "#ddd" }}>
                            <div className="row">
                                <div className="col-12 mb-4">
                                    <input type="text"
                                        className="form-control"
                                        placeholder="الاسم"
                                        {...register('name', { required: true, maxLength: 50, pattern: /^[a-z A-Z]{1,50}$/ })}
                                    />
                                    {errors?.name?.type=='required'&&<p>this field is required</p>}
                                    {errors?.name?.type=='pattern'&&<p>this field must be alphbetic</p>}
                                    {errors?.name?.type=='maxLength'&&<p>this field max length is 50 character</p>}
                                </div>
                                <div className="col-12 mb-4">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="الهاتف"
                                        {...register('phone', { required: true, maxLength: 11, pattern: /^[0-9]{1,11}$/ })}
                                    />
                                </div>
                                {errors?.phone?.type=='required'&&<p>this field is required</p>}
                                {errors?.phone?.type=='pattern'&&<p>this field must be number</p>}
                                {errors?.phone?.type=='maxLength'&&<p>this field max length is 11 digit</p>}

                                <div className="col-12 mb-4">
                                    <select
                                        {...register('projectId', { required: true })}
                                        className="form-control">
                                        {
                                            projects.map((item,i)=>{
                                                return <>
                                                <option value={item.id}>{item.name}</option>
                                                </>
                                            })
                                        }
                                    </select>
                                    {errors?.project_id?.type=='required'&&<p>this field is required</p>}
                                </div>

                                <div className="col-12 mb-4">
                                    <textarea
                                        className="form-control"
                                        placeholder="اكتب ملاحظاتك ..."
                                        {...register('description', { required: true, maxLength: 500 })}
                                    ></textarea>
                                    {errors?.message?.type=='required'&&<p>this field is required</p>}
                                    {errors?.message?.type=='maxLength'&&<p>this field max length is 50 character</p>}
                                </div>
                                <div className="col-12 mb-4">
                                    <button type="submit" className="btn btn-dark d-block py-3 w-100 h-100 fw-bold">
                                        <i className="far fa-paper-plane"></i> ارسال
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>);
}
export default Inquiry;
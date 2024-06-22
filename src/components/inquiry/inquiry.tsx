import React from "react";
import { useForm } from 'react-hook-form';
import './inquiry.scss'
import Breadcrumb from "../shared/breadcrumb/breadcrumb";
const Inquiry = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        
    } = useForm({mode:'onBlur'});
    const Submit=(data)=>{console.log(data)}
    return (<>
        <div className={`${'sec-title'} text-center`}>
          <strong className={`h1 fw-bold d-block ${'text-title'} `}>
            الأخبار
          </strong>
        </div>
    <Breadcrumb path={[{name:'home',href:'/home'},{name:'inquiry',href:'/inquiry'}]} />
        <div className="contact-page py-5">

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-11">
                        <div className="text-center mb-5">
                            <strong className="h4 d-block"> سجل اهتمامك  </strong>
                        </div>
                        <form onSubmit={handleSubmit(Submit)} className="mt-4" style={{ border: "1px solid #ddd", padding: "20px", boxShadow: "#ddd" }}>
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
                                        {...register('project_id', { required: true })}
                                        className="form-control">
                                        <option value="">اختر المشروع </option>

                                        <option value="4">مكين 34 - حي العارض  </option>

                                        <option value="5">مكين 30 - حي قرطبة  </option>

                                        <option value="6">مكين 31 - حي اليرموك  </option>

                                        <option value="7">مكين 32 - حي اليرموك  </option>

                                        <option value="8">مكين 35 - حي العارض  </option>

                                        <option value="9">مكين 36 - حي العارض  </option>

                                        <option value="10">مكين 37 - حي العارض  </option>

                                        <option value="11">مكين 38 - حي الياسمين  </option>

                                        <option value="12">مكين 39 - حي الرمال  </option>

                                        <option value="13">مكين 50 - حي العارض  </option>

                                        <option value="14">مكين 42 - حي الرمال  </option>

                                        <option value="15">مكين 46 - حي النرجس  </option>

                                        <option value="16">مكين 47 - حي العارض  </option>

                                        <option value="17">مكين 48 - حي جرير  </option>

                                        <option value="21">مكين 28 - حي الملقا  </option>

                                        <option value="22">مكين 27 - حي الياسمين  </option>

                                        <option value="23">مكين 26 - حي الازدهار  </option>

                                        <option value="24">مكين 25 - حي الملقا  </option>

                                        <option value="25">مكين 24 - حي العقيق  </option>

                                        <option value="26">مكين 19 - حي الملقا  </option>

                                        <option value="27">مكين 18 - حي القيروان  </option>

                                        <option value="28">مكين 17 - حي الملقا  </option>

                                        <option value="29">مكين 15 - حي حطين  </option>

                                        <option value="30">مكين 13 - حي الملقا  </option>

                                        <option value="31">مكين 12 - حي الملقا  </option>

                                        <option value="33">مكين 52 - حي العارض  </option>

                                        <option value="34">مكين 53 - حي الياسمين  </option>

                                        <option value="35">مكين 54 - حي الياسمين  </option>

                                        <option value="36">مكين 56 - حي العارض  </option>

                                        <option value="38">مكين 51 - حي الحمراء  </option>
                                    </select>
                                    {errors?.project_id?.type=='required'&&<p>this field is required</p>}
                                </div>

                                <div className="col-12 mb-4">
                                    <textarea
                                        className="form-control"
                                        placeholder="اكتب ملاحظاتك ..."
                                        {...register('message', { required: true, maxLength: 500 })}
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
import React from "react";
import styles from './communication.module.scss'
import { useForm } from "react-hook-form";
import Breadcrumb from "../../components/shared/breadcrumb/breadcrumb";
const Communication = () => {
    const {
        register,
        handleSubmit,
        formState:{errors}
    }=useForm({mode:'onBlur'})
    const submit=()=>{}
    return (<>
    <section className={`${styles['sec-communication']}`}>
    <div className={`${styles['sec-title']} text-center`}>
          <strong className={`h1 fw-bold d-block ${styles['text-title']} `}>
            تواصل معانا
          </strong>
        </div>
    <Breadcrumb path={[{name:'home',href:'/home'},{name:'communication',href:'/communication'}]} />
        <div className={`${styles['contact-page']} py-5 `}>
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <div className="text-center mb-5">
                            <strong className="h4 d-block"> للاستفسارات والملاحظات </strong>
                        </div>
                        <form onSubmit={handleSubmit(submit)} className="shadow pb-5 pt-4 px-4 rounded-2">

                            <div className="row">
                                <div className="col-md-6 mb-4">
                                    <div className="form-floating">
                                        <select className="form-select" id="floatingSelect"
                                        {...register('floatingSelect',{required:true})}>
                                            <option> اختر </option>
                                            <option value="شكاوى  أو مقترحات"> شكاوى  أو مقترحات </option>
                                            <option value="المبيعات"> المبيعات </option>
                                            <option value="استفسارات أخرى "> استفسارات أخرى  </option>
                                        </select>
                                        <label htmlFor="floatingSelect"> سبب التواصل </label>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="form-floating">
                                        <input type="text" className="form-control" placeholder=" الاسم " 
                                        {...register('name',{required:true})}/>
                                        <label htmlFor="floatingInput"> الاسم </label>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="form-floating">
                                        <input type="number" className="form-control"
                                        {...register('phone',{required:true})}
                                        placeholder=" الهاتف " />
                                        <label htmlFor="floatingInput"> الهاتف </label>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="form-floating">
                                        <input type="email" className="form-control" placeholder=" البريد الاكتروني " 
                                        {...register('email',{required:true})}
                                        />
                                        <label htmlFor="floatingInput"> البريد الاكتروني </label>
                                    </div>
                                </div>
                                <div className="col-md-12 mb-4">
                                    <div className="form-floating">
                                        <textarea className="form-control" id="floatingInput" placeholder=" الرسالة  "
                                        {...register('message',{required:true})}
                                        ></textarea>
                                        <label htmlFor="floatingInput"> الرسالة  </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 text-center">
                                <button type="submit" className="btn btn-dark d-block py-3 w-100 h-100 fw-bold" aria-label="search"> إرسال
                                    الأن
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className={`col-md-5 ${styles['info-contact']} mb-4 py-4 px-5`}>
                        <strong className="h4 mb-5 d-block"> كن على اتصال </strong>
                        <ul>
                            <li> <a href="mailto:info@almouhaysni.com"><i className="far fa-envelope me-2"></i> info@almouhaysni.com </a> </li>
                            <li> <a href="tel:966920027028+"><i className="fas fa-phone-volume me-2"></i> <bdi> 966920027028+ </bdi> </a>
                            </li>
                        </ul>
                        <strong className="h4 mt-5 mb-3 d-block"> ساعات العمل </strong>
                        <ul>
                            <li>  من الأحد إلى الخميس من الساعة 8:00 صباحًا وحتى 5:00 مساء</li>
                        </ul>
                        <strong className="h4 mt-5 mb-3 d-block"> العنوان </strong>
                        <ul>
                            <li> 4112 النرجس - طريق انس بن مالك - المنطقة الوسطى - الرياض 13327 </li>
                        </ul>
                        <ul className="social-media mt-5">
                            <li>
                                <a href="https://twitter.com/asas_maken" aria-label="twitter">
                                    <i className="fa-brands fa-x-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/company/asasmakeen/" aria-label="linkedin">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/@AsasMakeen" aria-label="youtube">
                                    <i className="fab fa-youtube"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/asas_maken/" aria-label="instagram">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>)
}
export default Communication;
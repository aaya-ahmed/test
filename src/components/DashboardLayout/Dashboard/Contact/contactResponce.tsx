import ContactUsService from "../../../../services/contact.service";
import { useForm } from "react-hook-form";

const ResponceComponent = ({ message,setMessage }: { message: any,setMessage:(data:any)=>void }) => {
    const{
        handleSubmit,
        formState:{errors,isValid},
        register
    }=useForm({mode:'onBlur'});
    const submit=(e)=>{
        new ContactUsService().Post(e).then(
            res=>{

            }
        )
    }
    return <>
        <div className="modal d-block" style={{ 'backgroundColor': '#00000080' }} id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{message.contactReasonName}</h5>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-md-1"><i className="fa-regular fa-user"></i></div>
                            <div className="col-md-11">{message.name}</div>
                        </div>
                        <div className="row">
                            <div className="col-md-1"><i className="fa-solid fa-mobile"></i></div>
                            <div className="col-md-11">{message.phoneNumber}</div>
                        </div>
                        <div className="row">
                            <div className="col-md-1"><i className="fa-regular fa-envelope"></i></div>
                            <div className="col-md-11">{message.email}</div>
                        </div>
                        <div className="row">
                            <div className="col-md-12"
                                style={{
                                    'fontSize': ' 0.9em',
                                    'fontWeight': '700',
                                    'margin': '1rem 0',
                                    'textAlign': 'justify'
                                }}
                            >{message.description}</div>
                        </div>
                        <form method="post" onSubmit={handleSubmit(submit)}>
                            <div className="mb-3">
                                <label htmlFor="message-text" className="col-form-label">الرد:</label>
                                <textarea className="form-control" id="message-text" name="responce"
                                {...register('responce',{required:true})}></textarea>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={()=>setMessage(null)}>اغلاق</button>
                        <button type="button" className="btn btn-primary" disabled={!isValid}>ارسال الرد</button>
                    </div>
                </div>
            </div>
        </div>

    </>
}
export default ResponceComponent;
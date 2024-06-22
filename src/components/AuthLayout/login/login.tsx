import { useState } from 'react'
import './login.scss'
import { useForm } from 'react-hook-form';
import LoginService from '../../../services/login.service';
import logo from './login.png'
import { useNavigate } from 'react-router-dom';
const LoginCompponent = () => {
    const [typeInputPass,setTypeInputPass]=useState<string>('password');
    const navigation = useNavigate();
    const showPassword=()=>{
        (typeInputPass==='password')?
        setTypeInputPass('text'):
        setTypeInputPass('password');
    }
    const OnChaneInput=(e)=>{
        if(!e.target.className.includes('has-val')&&e.target.value)
        e.target.className+=' has-val';
    else
    e.target.className='input';
    }
    const{
        register,
        getValues,
        handleSubmit
    }=useForm({mode:'onBlur'})
    const onhandleSubmit=(e)=>{
        new LoginService().login(e).then(
            res=>{
                localStorage.setItem('token',res.token)
                navigation('/dashboard');
            }
        )
    }
    return <>
        <div className="limiter">
            <div className="container-login">
                <div className="wrap-login">
                    <form className="login-form" method='post' onSubmit={handleSubmit(onhandleSubmit)}>
                        <span className="login-form-title p-b-26">
                            مرحبا بعودتك
                        </span>
                        <span className="login-form-title p-b-48">
                            <img src={logo}/>
                        </span>
                        <div className="wrap-input validate-input" data-validate="Valid email is: a@b.c">
                            <input 
                            className="input" 
                            type="email" 
                            placeholder='' 
                            name="email" 
                            {...register('email',{required:true})}
                            onChange={OnChaneInput}/>
                            <span className="focus-input" data-placeholder="الايميل"></span>
                        </div>
                        <div className="wrap-input validate-input" data-validate="Enter password">
                            <button className="btn-show-pass"  onClick={showPassword} type="button">
                                <i className="fas fa-eye"></i>
                            </button>
                            <input 
                            className="input" 
                            placeholder='' 
                            type={typeInputPass} 
                            name="pass" 
                            {...register('password',{required:true})}
                            onChange={OnChaneInput} />
                            <span className="focus-input" data-placeholder="كلمه السر"></span>
                        </div>
                        <div className="container-login-form-btn">
                            <div className="wrap-login-form-btn">
                                <button className="login-form-btn">
                                    تسجبل الدخول
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
}
export default LoginCompponent;
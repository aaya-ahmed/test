import {baseUrl} from './base.service';
import axios from 'axios';
export default class LoginService{
    login=async (data)=>{
        const responce=await axios.post(baseUrl+'Account/Login',data);
        return responce.data;
    }
}
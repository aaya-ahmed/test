import axios from 'axios';
export default class LoginService{
    login=async (data)=>{
        const responce=await axios.post(import.meta.env.VITE_baseUrl+'Account/Login',data);
        return responce.data;
    }
}
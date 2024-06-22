import {baseUrl} from './base.service';
import axios from 'axios';
export default class ContactUsService{
    GetPaged=async (page:number,itemPerPage:number,filters:any[]=[])=>{
        const responce=await axios.post(baseUrl+`ContactUs/GetPaged?page=${page}&itemPerPage=${itemPerPage}`,filters);
        return responce.data;
    }
    Get=async ()=>{
        const responce=await axios.get(baseUrl+`ContactUs/GetAll`);
        return responce.data;
    }
    Post=async (data)=>{
        const responce=await axios.post(baseUrl+'ContactUs',data);
        return responce.data;
    }
}
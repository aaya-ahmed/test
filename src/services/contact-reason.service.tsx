import axios from 'axios';
import { baseUrl } from './base.service';
export default class ContactReasonService{
    GetPaged=async (page:number,itemPerPage:number,filters:any[]=[])=>{
        const responce=await axios.post(baseUrl+`ContactReason/GetPaged?page=${page}&itemPerPage=${itemPerPage}`,filters);
        return responce.data;
    }
    Get=async ()=>{
        const responce=await axios.get(baseUrl+`ContactReason/GetAll`);
        return responce.data;
    }
    Post=async (data)=>{
        const responce=await axios.post(baseUrl+'ContactReason',data);
        return responce.data;
    }
    Put=async (data)=>{
        const responce=await axios.put(baseUrl+'ContactReason',data);
        return responce.data;
    }
    Delete=async (id:number)=>{
        const responce=await axios.delete(baseUrl+`ContactReason?id=${id}`);
        return responce.data;
    }
}
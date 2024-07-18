import BaseService from './base.service';
import axios from 'axios';

export default class GetAttachmentService{
    baseUrl  = import.meta.env.VITE_baseUrl;
    constructor(){
        this.baseUrl=`${this.baseUrl}Attachment`;
    }
    Get=async (filters:any[]=[])=>{
        const responce=await axios.post(this.baseUrl+`/GetAll`,filters);
        return responce.data;
    }
}
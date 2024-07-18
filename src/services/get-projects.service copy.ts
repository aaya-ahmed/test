import BaseService from './base.service';
import axios from 'axios';

export default class GetProjectService{
    baseUrl  = import.meta.env.VITE_baseUrl;
    constructor(){
        this.baseUrl=`${this.baseUrl}Project`;
    }
    GetPaged=async (page:number,itemPerPage:number,filters:any[]=[])=>{
        const responce=await axios.post(this.baseUrl+`/GetProjectsPaged?page=${page}&itemPerPage=${itemPerPage}`,filters);
        return responce.data;
    }
}

import axios from 'axios';
export default class BaseService{
    baseUrl  = import.meta.env.VITE_baseUrl;
    constructor(url:string){
        this.baseUrl=`${this.baseUrl}${url}`;
        console.log(this.baseUrl)
    }
    GetPaged=async (page:number,itemPerPage:number,filters:any[]=[])=>{
        const responce=await axios.post(this.baseUrl+`/GetPaged?page=${page}&itemPerPage=${itemPerPage}`,filters);
        return responce.data;
    }
    Get=async (filters:any[]=[])=>{
        const responce=await axios.post(this.baseUrl+`/GetAll`,filters);
        return responce.data;
    }
    Post=async (data)=>{
        const responce=await axios.post(this.baseUrl,data);
        return responce.data;
    }
    Put=async (data)=>{
        const responce=await axios.put(this.baseUrl,data);
        return responce.data;
    }
    PostWithFile=async (data)=>{
        const responce=await axios.post(this.baseUrl+'/PostWithFile',data, {
            headers: {
                'Content-Type': 'multipart/form-data', // Set the content type header
            }});
        return responce.data;
    }
    PutWithFile=async (data)=>{
        const responce=await axios.put(this.baseUrl+'/PutWithFile',data, {
            headers: {
                'Content-Type': 'multipart/form-data', 
            }});
        return responce.data;
    }
    Delete=async (id:number)=>{
        const responce=await axios.delete(this.baseUrl+`?id=${id}`);
        return responce.data;
    }
    GetById=async (id:number)=>{
        const responce=await axios.get(this.baseUrl+`?id=${id}`);
        return responce.data;
    }
}
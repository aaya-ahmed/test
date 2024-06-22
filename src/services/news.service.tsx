import {baseUrl} from './base.service';
import axios from 'axios';
export default class NewService{
    GetPaged=async (page:number,itemPerPage:number,filters:any[]=[])=>{
        console.log(baseUrl)

        const responce=await axios.post(baseUrl+`New/GetPaged?page=${page}&itemPerPage=${itemPerPage}`,filters);
        return responce.data;
    }
    Get=async ()=>{
        const responce=await axios.get(baseUrl+`New/GetAll`);
        return responce.data;
    }
    Post=async (data)=>{
        const responce=await axios.post(baseUrl+'New',data);
        return responce.data;
    }
    PostWithFile=async (data)=>{
        const responce=await axios.post(baseUrl+'New/PostWithFile',data, {
            headers: {
                'Content-Type': 'multipart/form-data', // Set the content type header
            }});
        return responce.data;
    }
    PutWithFile=async (data)=>{
        const responce=await axios.put(baseUrl+'New/PutWithFile',data, {
            headers: {
                'Content-Type': 'multipart/form-data', 
            }});
        return responce.data;
    }
    Delete=async (id:number)=>{
        const responce=await axios.delete(baseUrl+`New?id=${id}`);
        return responce.data;
    }
    GetById=async (id:number)=>{
        const responce=await axios.get(baseUrl+`New?id=${id}`);
        return responce.data;
    }
}
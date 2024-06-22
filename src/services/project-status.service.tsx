import {baseUrl} from './base.service';
import axios from 'axios';
export default class ProjectStatusService{
    Get=async ()=>{
        const responce=await axios.get(baseUrl+'ProjectStatus');
        return responce.data;
    }
}
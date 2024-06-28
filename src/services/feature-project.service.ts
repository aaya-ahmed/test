import BaseService from './base.service';
import axios from 'axios';

export default class FeatureProjectService extends BaseService{
    constructor(){
        super('FeatureCategory');
    }
    GetAllWithFeatures=async ()=>{
        const responce=await axios.get(this.baseUrl+`/GetAllWithFeatures`);
        return responce.data;
    }
}
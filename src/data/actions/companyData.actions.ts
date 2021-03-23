import {
  SET_DEFAULT_VALUES,
  GET_VALUES_FROM_DB,
  UPDATE_VALUES_IN_DB,
} from "../constants";

import {getCompanyData,setCompanyData} from '../fetching';

export const fetchCompanyData = ()=>{
    try {
        const data = getCompanyData();
        return {
          type: GET_VALUES_FROM_DB,
          payload: data
        };
    } catch (error) {
        //cannot fetch data i notyfikacja
        return{
            type: SET_DEFAULT_VALUES,
        }
    }
}

export const updateCompanyData=(data)=>{
    try{
        setCompanyData(data);
        return {
          type: UPDATE_VALUES_IN_DB,
          payload: data,
        };
    }catch(error){
      //cannot update data i notyfikacja
      //nic bo zostaje ten stan co byl
    }
}
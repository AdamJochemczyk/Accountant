import {getCookie} from '../../constants'
import { toast } from "react-toastify";
export const getCompanyData=async ()=>{
  try{
    const response = await fetch(`${process.env.REACT_APP_URL}/companyData`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getCookie("token")}`,
      },
    });
    const data = await response.json();
    return data;
  }catch(error){
    toast.error("There is no connection with DB")
  }
};

export const setCompanyData=async(data)=>{
    try{
      const response = await fetch(`${process.env.REACT_APP_URL}/companyData`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${getCookie("token")}`,
      },
      body: JSON.stringify(data),
    });
    const responseData=await response.json();
    toast.success("You set new company data")
    return responseData;
  }
  catch(error){
    toast.error("Something went wrong")
  }
}
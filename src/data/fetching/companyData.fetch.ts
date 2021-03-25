import {getCookie} from '../../constants'
export const getCompanyData=async ()=>{
    const response = await fetch(`${process.env.REACT_APP_URL}/companyData`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getCookie("token")}`,
      },
    });
    const data = await response.json();
    return data;
};

export const setCompanyData=async(data)=>{
    const response = await fetch(`${process.env.REACT_APP_URL}/companyData`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${getCookie("token")}`,
      },
      body: JSON.stringify(data),
    });
    const responseData=await response.json();
    return responseData;
}
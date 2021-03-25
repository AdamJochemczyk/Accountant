import { useState,useCallback } from "react";
import { getCookie } from "../../../constants";

export const useDocuments = () => {
  const [company, setCompany] = useState();
  const [searchResult, setSearchResult] = useState([]);

  const onSubmit=useCallback(
      async (fields) => {
       setCompany(fields.companyName);
       const response=await fetch(
         `${process.env.REACT_APP_URL}/prepaymentInvoices?buyer.name=${fields.companyName}`,
         {
           method: "GET",
           headers: {
             "Content-Type": "application/json",
             Authorization: `Bearer ${getCookie("token")}`,
           },
         }
       );
       const data=await response.json();
       setSearchResult(data);
      },
      [],
  )
  return { company, searchResult, onSubmit };
};

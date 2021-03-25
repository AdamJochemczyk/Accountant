import { useState, useEffect,useCallback } from "react";
import {getCookie} from '../../../constants/cookies';
import { toast } from "react-toastify";

export const useNewBill = ({ fetchCompanyData,initialBill }) => {
  
  const [companyData, setCompanyData] = useState(initialBill);
    useEffect(() => {
      (async () => {
        const response = await fetchCompanyData();
        response.payload
          .then((responseData) => {
            return responseData;
          })
          .then((data) => {
            setCompanyData(data);
          });
      })();
    }, [fetchCompanyData, initialBill]);

  const onSubmit = useCallback(
      async (fields) => {
        delete fields.companyInitialData
        try{
            await fetch(`${process.env.REACT_APP_URL}/bills`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${getCookie("token")}`,
              },
              body: JSON.stringify(fields),
            });
            toast.success("Success please wait for generate a document",{
                position: "top-right",
                autoClose: 3000,
                closeOnClick: true,
            })
        }catch(error){
            toast.error("Something went wrong");
        }
    },
      [],
  );

  return {
    onSubmit,
    companyData
  };
};
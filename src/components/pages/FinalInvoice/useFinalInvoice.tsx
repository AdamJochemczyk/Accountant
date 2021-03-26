import {useMemo} from "react";
import {toast} from "react-toastify";
import {useHistory} from "react-router-dom";
import {getCookie} from "../../../constants";

export const useFinalInvoice = (data) => {

  const history=useHistory();
  const totalPrepaymentAmount=useMemo(
    () =>
      data.reduce((prev, cur) => {
        prev += parseFloat(cur.prepayment);
        return prev;
      }, 0),
    [data]
  );

  const initialValues={ 
        seller: data[0].seller,
        buyer: data[0].buyer,
        prepayment: totalPrepaymentAmount,
        accountNumber: data[0].accountNumber,
        paymentMethod: "transfer",
        rest: 0,
  }

  const sendNewInvoice=async (fields)=>{
    const {seller,buyer,accountNumber,paymentMethod,rest}=fields;
    const dataToDb = {
      seller: seller,
      buyer: buyer,
      accountNumber: accountNumber,
      paymentMethod: paymentMethod,
      numberOfProducts: "1",
      products: [
        {
          name: "Total rest to pay",
          amount: "1",
          tax: "23",
          price: rest,
        },
      ],
    };
    
    try{
      await fetch(`${process.env.REACT_APP_URL}/invoices`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getCookie("token")}`,
        },
        body: JSON.stringify(dataToDb),
      });
      toast.success("Wait for server to generate final invoice")
      history.push('/documents');
    }catch(error){
      toast.error("Something went wrong")
    }
  }

  const deletePaidPrepaymentInvoices=async()=>{
    try {
      data.forEach(({id})=>{
        fetch(`${process.env.REACT_APP_URL}/prepaymentInvoices/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getCookie("token")}`,
          },
        });
      })
    } catch (error) {
      toast.error("Something went wrong");
    }
  }

    const onSubmit =(fields)=>{
      sendNewInvoice(fields)
      deletePaidPrepaymentInvoices();
    }

    return {
      initialValues,
      onSubmit,
    };
};

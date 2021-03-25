import React from "react";
import { useFinalInvoice } from "./useFinalInvoice";
import { useHistory, useLocation } from "react-router-dom";

interface LocationState {
  from: {
    pathname: string;
    state: {
      data: Object;
    };
  };
}

const FinalInvoice = () => {
  const location = useLocation<LocationState>();
  const { state } = location;
  const history=useHistory()
  if(state===undefined){
    history.push('/login')
  }
  const {a} = useFinalInvoice(state);
  
  return <div>"FINAL INVOICE"</div>;
};

export default FinalInvoice;

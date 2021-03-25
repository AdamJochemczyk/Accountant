import React, { useState,useCallback} from "react";
import {InvoiceForm,PrepaymentInvoice} from '../../index';
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";

const NewInvoice = () => {

  const [type,setType] = useState("normal");

  const onChange=useCallback(
    (e)=>{
    setType(e.target.value);
  },
    [setType],
  )

  return (
    <Box display="flex" justifyContent="center" m={3}>
      <Paper elevation={3}>
          <p>Choose type of invoice: </p>
          <select onChange={onChange}>
            <option value="normal">Normal</option>
            <option value="prepayment">Prepayment</option>
          </select>
        <Box p={1}>
          {type === "normal" ? (
            <InvoiceForm/>
          ) : (
            <PrepaymentInvoice/>
          )}
        </Box>
      </Paper>
    </Box>
  );
};
export default NewInvoice;

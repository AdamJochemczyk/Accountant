import React, { useState,useEffect} from "react";
import {InvoiceForm,PrepaymentInvoice} from '../../index';
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";

const NewInvoice = () => {

  const [type,setType] = useState("normal");

  useEffect(() => {
    setType("normal");
    //get from store
  }, [type])

  function onSubmit(fields) {
    // display form field values on success
    console.log("Submitted")
    alert("SUCCESS!! :-)\n\n" + JSON.stringify(fields, null, 4));
  }

  return (
    <Box display="flex" justifyContent="center" m={3}>
      <Paper elevation={3}>
        <Box p={1}>
          {type === "normal" ? (
            <InvoiceForm onSubmit={onSubmit} />
          ) : (
            <PrepaymentInvoice onSubmit={onSubmit} />
          )}
        </Box>
      </Paper>
    </Box>
  );
};
export default NewInvoice;

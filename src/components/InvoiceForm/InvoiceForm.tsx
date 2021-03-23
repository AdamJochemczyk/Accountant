import React from "react";
import { Formik, Form } from "formik";
import {
  Button,
  SellerInputForm,
  BuyerInputForm,
  DynamicProductInputs,
} from "../index";
import Box from "@material-ui/core/Box";
import { initialInvoice, validationInvoice } from "../../constants";

const InvoiceForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialInvoice}
      validationSchema={validationInvoice}
      onSubmit={onSubmit}
    >
      {({ errors, values, touched, setValues }) => (
        <Form>
          <h2>Generate invoice</h2>
          <div>
            <h3>Seller</h3>
            <SellerInputForm errors={errors} touched={touched} />
            <h3>Buyer</h3>
            <BuyerInputForm errors={errors} touched={touched} />
            <Box>
              <p>Payment method:</p>
              <p>Bank account number:</p>
            </Box>
            <Box>
              <DynamicProductInputs
                values={values}
                setValues={setValues}
                errors={errors}
                touched={touched}
              />
            </Box>
          </div>
          <div>
            <p>TOTAL AMOUNT:</p>
          </div>
          <Box display="flex" justifyContent="space-between">
            <Button type="submit">Generate Invoice</Button>
            <Button type="reset">Reset</Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default InvoiceForm;

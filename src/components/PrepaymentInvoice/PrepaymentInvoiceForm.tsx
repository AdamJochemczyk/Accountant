import React from 'react'
import Box from "@material-ui/core/Box";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button, SellerInputForm,BuyerInputForm } from "../index";
import {validationPrepaymentInvoice,initialPrepaymentInvoice} from '../../constants'
import { fetchCompanyData } from "../../data/actions/companyData.actions";
import {connect} from 'react-redux';
import {usePrepaymentInvoiceForm} from './usePrepaymentInvoiceForm';

const PrepaymentInvoice = ({ fetchCompanyData }) => {
  
  const { onSubmit, companyData } = usePrepaymentInvoiceForm({
    fetchCompanyData,
    initialPrepaymentInvoice,
  });

  return (
    <Formik
      initialValues={{ ...initialPrepaymentInvoice, ...companyData }}
      enableReinitialize
      validationSchema={validationPrepaymentInvoice}
      onSubmit={onSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          <h2>Generate prepayment invoice</h2>
          <div>
            <h3>Seller</h3>
            <SellerInputForm errors={errors} touched={touched} />
            <h3>Buyer</h3>
            <BuyerInputForm errors={errors} touched={touched} />
            <Box>
              <p>Payment method: {companyData.paymentMethod}</p>
              <p>Bank account number: {companyData.accountNumber}</p>
            </Box>
          </div>
          <Box display="flex" flexDirection="column">
            <label>Prepayment</label>
            <Field
              name={`prepayment`}
              type="text"
              className={
                errors.prepayment && touched.prepayment && "error__field"
              }
            />
            <ErrorMessage
              name={`prepayment`}
              component="div"
              className="error__text"
            />
          </Box>
          <Box display="flex" justifyContent="space-between" m={1}>
            <Button type="submit">Generate Invoice</Button>
            <Button type="reset">Reset</Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default connect(null, (dispatch) => {
  return {
    fetchCompanyData,
  };
})(PrepaymentInvoice);

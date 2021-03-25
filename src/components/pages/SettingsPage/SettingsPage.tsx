import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import { Button, SellerInputForm } from "../../index";
import { companyInitialData, companyDataValidator } from "../../../constants";
import { connect } from "react-redux";
import {
  updateCompanyData,
  fetchCompanyData,
} from "../../../data/actions/companyData.actions";
import {useSettingsPage} from './useSettingsPage';

const SettingsPage = ({ updateCompanyData, fetchCompanyData }) => {

  const {onSubmit,companyData} = useSettingsPage(
    {updateCompanyData,
    fetchCompanyData,
    companyInitialData}
  )

  return (
    <Box display="flex" justifyContent="center" m={3}>
      <Paper elevation={3}>
        <Box p={1}>
          <Formik
            initialValues={{companyInitialData,...companyData}}
            enableReinitialize
            validationSchema={companyDataValidator}
            onSubmit={onSubmit}
          >
            {({ errors, touched }) => (
              <Form>
                <h2>Set your company data: </h2>
                <SellerInputForm errors={errors} touched={touched} />
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                >
                  <label>Account number</label>
                  <Field
                    name={`accountNumber`}
                    type="text"
                    className={
                      errors.accountNumber &&
                      touched.accountNumber &&
                      "error__field"
                    }
                  />
                  <ErrorMessage
                    name={`accountNumber`}
                    component="div"
                    className="error__text"
                  />
                  <label>Payment method</label>
                  <Field as="select" name="paymentMethod">
                    <option value="transfer">Transfer</option>
                    <option value="cash">Cash</option>
                  </Field>
                  <ErrorMessage
                    name={`paymentMethod`}
                    component="div"
                    className="error__text"
                  />
                </Box>
                <Button top={1} type="submit">
                  Set company data
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
        <Box>
          <h4>Current company data:</h4>
          {companyData &&
            <>
              <p>Name: {companyData.seller.name}</p>
              <p>Address: {companyData.seller.address}</p>
              <p>NIP: {companyData.seller.NIP}</p>
              <p>Account number: {companyData.accountNumber}</p>
              <p>Payment method: {companyData.paymentMethod}</p>
            </>
          }
        </Box>
      </Paper>
    </Box>
  );
};

export default connect(null, (dispatch) => {
  return {
    updateCompanyData,
    fetchCompanyData,
  };
})(SettingsPage);

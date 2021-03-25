import React from "react";
import { Formik, Form } from "formik";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import {initialBill,validationBill} from '../../../constants';
import {connect} from "react-redux";
import {
  SellerInputForm,
  Button,
  DynamicProductInputs,
} from "../../../components";
import {
  fetchCompanyData,
} from "../../../data/actions/companyData.actions";
import {useNewBill} from './useNewBill'

const NewBill = ({ fetchCompanyData }) => {

  const {onSubmit,companyData}=useNewBill({fetchCompanyData,initialBill})

  return (
    <Box display="flex" justifyContent="center" m={3}>
      <Paper elevation={3}>
        <Box p={1}>
          <Formik
            initialValues={{...initialBill,...companyData}}
            enableReinitialize
            validationSchema={validationBill}
            onSubmit={onSubmit}
          >
            {({ errors, values, touched, setValues }) => (
              <Form>
                <h2>Generate new bill</h2>
                <SellerInputForm errors={errors} touched={touched} />
                <Box display="flex" justifyContent="space-between">
                  <p>Date</p>
                  <p>Print number</p>
                </Box>
                <p>BILL</p>
                <DynamicProductInputs
                  values={values}
                  setValues={setValues}
                  errors={errors}
                  touched={touched}
                />
                <div>
                  <p>TOTAL AMOUNT:</p>
                </div>
                <Box display="flex">
                  <p>Bill number/report number</p>
                  <p>Cash register ID</p>
                  <p>Number and cashier name</p>
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <Button type="submit">Generate Bill</Button>
                  <Button type="reset">Reset</Button>
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
      </Paper>
    </Box>
  );
};
export default connect(null, (dispatch) => {
  return {
    fetchCompanyData,
  };
})(NewBill);

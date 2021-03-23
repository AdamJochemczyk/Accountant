import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import {Button,SellerInputForm} from '../../index';
import { companyInitialData, companyDataValidator } from "../../../constants";

const SettingsPage = () => {
  function onSubmit(fields){
    alert(JSON.stringify(fields, null, 4));
  }
  return (
    <Box display="flex" justifyContent="center" m={3}>
      <Paper elevation={3}>
        <Box p={1}>
          <Formik
            initialValues={companyInitialData}
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
                    className={errors.accountNumber && "error__field"}
                  />
                  <ErrorMessage
                    name={`accountNumber`}
                    component="div"
                    className="error__text"
                  />
                  <label>Payment method</label>
                  <Field
                    name={`paymentMethod`}
                    type="text"
                    className={errors.paymentMethod && "error__field"}
                  />
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
      </Paper>
    </Box>
  );
};

export default SettingsPage;

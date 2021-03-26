import React from "react";
import { useFinalInvoice } from "./useFinalInvoice";
import { useHistory, useLocation } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import { Formik, Form, ErrorMessage, Field } from "formik";
import {
  Button,
  SellerInputForm,
  BuyerInputForm
} from "../../index";
import {validationFinalInvoice} from '../../../constants'

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
  const { initialValues, onSubmit } = useFinalInvoice(state);
  
  return (
    <Box display="flex" justifyContent="center" m={3}>
      <Paper elevation={3}>
        <Box p={1}>
          <Formik
            initialValues={initialValues}
            enableReinitialize
            validationSchema={validationFinalInvoice}
            onSubmit={onSubmit}
          >
            {({ errors, touched }) => (
              <Form>
                <h2>Generate final invoice</h2>
                <div>
                  <h3>Seller</h3>
                  <SellerInputForm errors={errors} touched={touched} />
                  <h3>Buyer</h3>
                  <BuyerInputForm errors={errors} touched={touched} />
                  <Box>
                    <p>Payment method:</p>
                    <Field as="select" name={`paymentMethod`}>
                      <option value="cash">Cash</option>
                      <option value="transfer">Transfer</option>
                    </Field>
                    <p>Bank account number:</p>
                    <Field type="text" name={`accountNumber`} disabled />
                    <p>Total prepayment:</p>
                    <Field type="text" name={`prepayment`} disabled />
                  </Box>
                  <Box>
                    <p>Summary</p>
                    <Field
                      type="number"
                      name={`rest`}
                      className={
                        errors.rest &&
                        touched.rest &&
                        "error__field"
                      }
                    />
                    <ErrorMessage
                      name={`rest`}
                      component="div"
                      className="error__text"
                    />
                  </Box>
                </div>
                <Box display="flex" justifyContent="center" m={2}>
                  <Button type="submit">Generate Final Invoice</Button>
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
      </Paper>
    </Box>
  );
};

export default FinalInvoice;

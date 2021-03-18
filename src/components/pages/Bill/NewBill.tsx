import React from "react";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "../../Button";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";

const NewBill = () => {
  const initialValues = {
    numberOfProducts: "",
    products: [],
    companyName: "",
    address: "",
    NIP: "",
  };

  const arr = [...new Array(100)].map((_, i) => i + 1);

  const validationSchema = Yup.object().shape({
    companyName:Yup.string().required("Company name is required"),
    address:Yup.string().required("Address is required"),
    NIP: Yup.number().required("NIP is required"),
    numberOfProducts: Yup.number().required("Number of products is required"),
    products: Yup.array().of(
      Yup.object().shape({
        name: Yup.string().required("Name is required"),
        amount: Yup.number().required("Amount is required"),
        tax: Yup.number().required("Tax is required"),
      })
    ),
  });

  function onChangeProducts(e, field, values, setValues) {
    // update dynamic form
    const products = [...values.products];
    const numberOfProducts = e.target.value || 0;
    const previousNumber = parseInt(field.value || "0");
    if (previousNumber < numberOfProducts) {
      for (let i = previousNumber; i < numberOfProducts; i++) {
        products.push({ name: "", amount: "", tax: "" });
      }
    } else {
      for (let i = previousNumber; i >= numberOfProducts; i--) {
        products.splice(i, 1);
      }
    }
    setValues({ ...values, products });

    // call formik onChange method
    field.onChange(e);
  }

  function onSubmit(fields) {
    // display form field values on success
    alert("SUCCESS!! :-)\n\n" + JSON.stringify(fields, null, 4));
  }

  return (
    <Box display="flex" justifyContent="center" m={3}>
      <Paper elevation={3}>
        <Box p={1}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ errors, values, touched, setValues }) => (
              <Form>
                <h2>Generate new bill</h2>
                <div>
                  <Box display="flex" flexDirection="column">
                    <label>Company name</label>
                    <Field
                      name={`companyName`}
                      type="text"
                      className={
                        errors.companyName && touched.companyName
                          ? "error__field"
                          : ""
                      }
                    />
                    <ErrorMessage
                      name={`companyName`}
                      component="div"
                      className="error__text"
                    />
                  </Box>
                  <Box display="flex" flexDirection="column">
                    <label>Address</label>
                    <Field
                      name={`address`}
                      type="text"
                      className={
                        errors.address && touched.address ? "error__field" : ""
                      }
                    />
                    <ErrorMessage
                      name={`address`}
                      component="div"
                      className="error__text"
                    />
                  </Box>
                  <Box display="flex" flexDirection="column">
                    <label>NIP</label>
                    <Field
                      name={`NIP`}
                      type="text"
                      className={
                        "form-control" +
                        (errors.NIP && touched.NIP ? "error__field" : "")
                      }
                    />
                    <ErrorMessage
                      name={`NIP`}
                      component="div"
                      className="error__text"
                    />
                  </Box>
                  <Box display="flex" justifyContent="space-between">
                    <p>Date</p>
                    <p>Print number</p>
                  </Box>
                  <p>BILL</p>
                  <Box>
                    <label>Products amount:</label>
                    <Field name="numberOfProducts">
                      {({ field }) => (
                        <select
                          {...field}
                          className={
                            errors.numberOfProducts && touched.numberOfProducts
                              ? "error__field"
                              : ""
                          }
                          onChange={(e) =>
                            onChangeProducts(e, field, values, setValues)
                          }
                        >
                          <option value=""></option>
                          {arr.map((i) => (
                            <option key={i} value={i}>
                              {i}
                            </option>
                          ))}
                        </select>
                      )}
                    </Field>
                    <ErrorMessage
                      name="numberOfProducts"
                      component="div"
                      className="error__text"
                    />
                  </Box>
                </div>
                <FieldArray name="products">
                  {() =>
                    values.products.map((product, i) => {
                      return (
                        <Box key={i} display="flex" flexDirection="column">
                          <h5>Product {i + 1}</h5>
                          <div>
                            <Box display="flex" flexDirection="column">
                              <label>Name</label>
                              <Field name={`products.${i}.name`} type="text" />
                              <ErrorMessage
                                name={`products.${i}.name`}
                                component="div"
                                className="error__text"
                              />
                            </Box>
                            <Box display="flex" flexDirection="column">
                              <label>Amount</label>
                              <Field
                                name={`products.${i}.amount`}
                                type="text"
                              />
                              <ErrorMessage
                                name={`products.${i}.amount`}
                                component="div"
                                className="error__text"
                              />
                            </Box>
                            <Box display="flex" flexDirection="column">
                              <label>Tax</label>
                              <Field name={`products.${i}.tax`} type="text" />
                              <ErrorMessage
                                name={`products.${i}.tax`}
                                component="div"
                                className="error__text"
                              />
                            </Box>
                          </div>
                        </Box>
                      );
                    })
                  }
                </FieldArray>
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
export default NewBill;

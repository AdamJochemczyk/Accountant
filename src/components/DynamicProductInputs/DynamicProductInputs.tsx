import React from "react";
import { Field, FieldArray, ErrorMessage } from "formik";
import Box from "@material-ui/core/Box";

const DynamicProductInputs = ({ values, setValues, errors, touched }) => {
  const arr = [...new Array(100)].map((_, i) => i + 1);

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

  return (
    <>
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
              onChange={(e) => onChangeProducts(e, field, values, setValues)}
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
                    <Field name={`products.${i}.amount`} type="text" />
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
                  <Box display="flex" flexDirection="column">
                    <label>Price</label>
                    <Field name={`products.${i}.price`} type="text" />
                    <ErrorMessage
                      name={`products.${i}.price`}
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
    </>
  );
};

export default DynamicProductInputs;

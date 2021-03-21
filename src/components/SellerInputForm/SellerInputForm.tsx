import React from "react";
import Box from "@material-ui/core/Box";
import { Field, ErrorMessage } from "formik";

const SellerInputForm = ({ errors, touched }) => {
  return (
    <>
      <Box display="flex" flexDirection="column">
        <label>Company name</label>
        <Field
          name={`seller.name`}
          type="text"
          className={
            errors.seller &&
            errors.seller.name &&
            touched.seller &&
            touched.seller.name &&
            "error__field"
          }
        />
        <ErrorMessage
          name={`seller.name`}
          component="div"
          className="error__text"
        />
      </Box>
      <Box display="flex" flexDirection="column">
        <label>Address</label>
        <Field
          name={`seller.address`}
          type="text"
          className={
            errors.seller &&
            errors.seller.address &&
            touched.seller &&
            touched.seller.address &&
            "error__field"
          }
        />
        <ErrorMessage
          name={`seller.address`}
          component="div"
          className="error__text"
        />
      </Box>
      <Box display="flex" flexDirection="column">
        <label>NIP</label>
        <Field
          name={`seller.NIP`}
          type="text"
          className={
            errors.seller &&
            errors.seller.NIP &&
            touched.seller &&
            touched.seller.NIP &&
            "error__field"
          }
        />
        <ErrorMessage name={`NIP`} component="div" className="error__text" />
      </Box>
    </>
  );
};

export default SellerInputForm;

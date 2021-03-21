import React from 'react'
import { Field, ErrorMessage } from "formik";
import Box from "@material-ui/core/Box";

const BuyerInputFrom = ({errors,touched}) => {
    return (
        <>
        <Box display="flex" flexDirection="column">
              <label>Company name</label>
              <Field
                name={`buyer.name`}
                type="text"
                className={
                  errors.buyer &&
                  errors.buyer.name &&
                  touched.buyer &&
                  touched.buyer.name &&
                  "error__field"
                }
              />
              <ErrorMessage
                name={`buyer.name`}
                component="div"
                className="error__text"
              />
            </Box>
            <Box display="flex" flexDirection="column">
              <label>Address</label>
              <Field
                name={`buyer.address`}
                type="text"
                className={
                  errors.buyer &&
                  errors.buyer.address &&
                  touched.buyer &&
                  touched.buyer.address &&
                  "error__field"
                }
              />
              <ErrorMessage
                name={`buyer.address`}
                component="div"
                className="error__text"
              />
            </Box>
            <Box display="flex" flexDirection="column">
              <label>NIP</label>
              <Field
                name={`buyer.NIP`}
                type="text"
                className={
                  errors.buyer &&
                  errors.buyer.NIP &&
                  touched.buyer &&
                  touched.buyer.NIP &&
                  "error__field"
                }
              />
              <ErrorMessage
                name={`buyer.NIP`}
                component="div"
                className="error__text"
              />
            </Box>
            </>
    )
}

export default BuyerInputFrom

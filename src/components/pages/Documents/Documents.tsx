import React from "react";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import { useDocuments } from "./useDocuments";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button } from "../../index";
import * as Yup from 'yup';
import EnhancedTable from "./DocumentTable";

const Documents = () => {
  const { company, searchResult, onSubmit } = useDocuments();
  return (
    <>
      <Box display="flex" justifyContent="center" m={2} p={2}>
        <Paper elevation={2} style={{ padding: "1rem" }}>
          <p>Search company to compose</p>
          <p> final invoice from prepayment invoices</p>
          <Formik
            initialValues={{ companyName: "" }}
            enableReinitialize
            validationSchema={Yup.object().shape({
              companyName: Yup.string().required("Name is required!"),
            })}
            onSubmit={onSubmit}
          >
            {({ errors, touched }) => (
              <Form>
                <Box display="flex" justifyContent="space-between">
                  <Field
                    name={`companyName`}
                    type="text"
                    className={
                      errors.companyName && touched.companyName && "error_field"
                    }
                  />
                  <ErrorMessage
                    name={`companyName`}
                    component="div"
                    className="error__text"
                  />
                  <Button type="submit">Search</Button>
                </Box>
              </Form>
            )}
          </Formik>
        </Paper>
      </Box>
      {company && (
        <Box>
          <Paper elevation={2}>
            Results for: {company}
            <Box>
              {searchResult.length !== 0 ? (
                <EnhancedTable data={searchResult} />
              ) : (
                "No results"
              )}
            </Box>
          </Paper>
        </Box>
      )}
    </>
  );
};

export default Documents;

import React,{useCallback,useState} from 'react'
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import { Formik,Form,Field,ErrorMessage } from 'formik';
import { Button } from '../..';
import { loginInitialData, validationLogin, setCookie } from "../../../constants";
import { useHistory } from 'react-router';

const Login = () => {

    const [wait,setWait]=useState(false)
    const [message,setMessage]=useState('');
    const history=useHistory();
    const onSubmit=useCallback(
        async (fields) => {
            setWait(true)
            setMessage('')
            try{
                const response = await fetch(`${process.env.REACT_APP_URL}/login`,{
                method: "POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body: JSON.stringify(fields)
            })
            const data=await response.json();
            setWait(false);
            if (data.hasOwnProperty("accessToken")) {
                console.log(data.accessToken);
                setCookie("token",data.accessToken);
                history.push('/documents')
            } else {
              throw Error("Please try again");
            }
            }catch(error){
                setMessage(error.message);
            }
        },
        [history],
    )
    
    return (
      <Box display="flex" justifyContent="center" m={3}>
        <Paper elevation={3}>
          <Box p={1}>
            <Formik
              initialValues={loginInitialData}
              validationSchema={validationLogin}
              onSubmit={onSubmit}
            >
              {({ errors, touched }) => (
                <Form>
                  <h2>Login</h2>
                  <Box display="flex" flexDirection="column">
                    <label>Email: </label>
                    <Field
                      name={`email`}
                      type="text"
                      className={
                        errors.email && touched.email && "error__field"
                      }
                    />
                    <ErrorMessage
                      name={`email`}
                      component="div"
                      className="error__text"
                    />
                  </Box>
                  <Box display="flex" flexDirection="column">
                    <label>Password: </label>
                    <Field
                      name={`password`}
                      type="password"
                      className={
                        errors.password && touched.password && "error__field"
                      }
                    />
                    <ErrorMessage
                      name={`password`}
                      component="div"
                      className="error__text"
                    />
                  </Box>
                  <Box className="error__text">
                    {wait ? "Please wait" : ""}
                    {message}
                  </Box>
                  <Box display="flex" justifyContent="space-between" m={1}>
                    <Button type="submit">Log in</Button>
                    <Button type="reset">Reset</Button>
                  </Box>
                </Form>
              )}
            </Formik>
          </Box>
        </Paper>
      </Box>
    );
}

export default Login

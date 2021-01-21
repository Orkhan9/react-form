import React from "react";
import {Form, Formik} from "formik";
import * as Yup from "yup";
import {Button, Divider, Label} from "semantic-ui-react";
import MyTextInput from "./MyTextInput";
import axios from 'axios';


const Login = () => {
    return (
        <Formik
            initialValues={{email: "", password: ""}}
            validationSchema={Yup.object({
                username: Yup.string().required(),
                password: Yup.string().required(),
            })}
            onSubmit={values => {
                axios({
                    method: 'post',
                    url: 'http://authentication.irankabaka.com/api/login',
                    headers: {
                        'api-key':'f6e72c3b-cb41-eb11-9fee-000c29fdc2c3'
                    },
                    data: {
                        username: values.username,
                        password:values.password
                    }
                })
                    .then(response=>{
                        console.log(response);
                    })
                    .catch(error=>console.log(error));
            }}
        >
            {({isSubmitting, isValid, dirty,errors}) => (
                <Form className='ui form' style={{marginTop:150}}>
                    <MyTextInput name='username' placeholder='Name'/>
                    <MyTextInput
                        name='password'
                        placeholder='Password'
                        type='password'
                    />
                    <Button
                        disabled={!isValid || !dirty || isSubmitting}
                        type='submit'
                        fluid
                        size='large'
                        color='teal'
                        content='Login'
                    />
                </Form>
            )}
        </Formik>
    );
};

export default Login;
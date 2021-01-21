import React from 'react';
import * as Yup from "yup";
import axios from "axios";
import {Form, Formik} from "formik";
import MyTextInput from "./MyTextInput";
import {Button} from "semantic-ui-react";

const AddUser = () => {
    return (
        <Formik
            initialValues={{email: "", password: ""}}
            validationSchema={Yup.object({
                userId: Yup.string().required(),
                userName: Yup.string().required(),
                password: Yup.string().required(),
                mobile: Yup.string().required(),
                email: Yup.string().required(),
                code: Yup.string().required(),
            })}
            onSubmit={values => {
                console.log(values)
            }}
        >
            {({isSubmitting, isValid, dirty,errors}) => (
                <Form className='ui form' style={{marginTop:150}}>
                    <MyTextInput name='userId' placeholder='userId'/>
                    <MyTextInput name='userName' placeholder='userName'/>
                    <MyTextInput
                        name='password'
                        placeholder='Password'
                        type='password'
                    />
                    <MyTextInput name='mobile' placeholder='mobile'/>
                    <MyTextInput name='email' placeholder='email'/>
                    <MyTextInput name='code' placeholder='code'/>
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

export default AddUser;
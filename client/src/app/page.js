'use client'

import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Image from 'next/image'
import Link from 'next/link'
const SignupSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

 const Home = () => (
  <div>
     <Image
      src="/NexaNova.png"
      width={200}
      height={200}
      alt="Picture "
    />
    <h1>Login</h1>
    <Formik
      initialValues={{
        phoneNumber: '',
        password: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
           <Field name="phoneNumber"  placeholder="phoneNumber" /> 
          {errors.firstName && touched.firstName ? (
            <div>{errors.firstName}</div>
          ) : null}
          <br/>
          <Field name="password" type="password" placeholder="password" />
          {errors.password && touched.password ? (
            <div>{errors.password}</div>
          ) : null}
          <br/>
           Don't have an account yet? <Link href="/register">Signup</Link> instead
           <br/>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Home
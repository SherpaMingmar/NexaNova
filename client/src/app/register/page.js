
// 'use client'

// import React from 'react';
// import { Formik, Form, Field } from 'formik';
// import * as Yup from 'yup';
// import Image from 'next/image'
// import Link from 'next/link'
// const SignupSchema = Yup.object().shape({
//   phoneNumber: Yup.string()
//     .min(2, 'Too Short!')
//     .max(50, 'Too Long!')
//     .required('Required'),
//     email: Yup.string()
//     .min(2, 'Too Short!')
//     .max(50, 'Too Long!')
//     .required('Required'),
//     address: Yup.string()
//     .min(2, 'Too Short!')
//     .max(50, 'Too Long!')
//     .required('Required'),
//     password: Yup.string()
//     .min(2, 'Too Short!')
//     .max(50, 'Too Long!')
//     .required('Required'),
// });

//  const Home = () => {
//   const [messageApi, contextHolder] = message.useMessage();
//   const handleLogin = async(value) => {
//     const res = await fetch('http://localhost:4000/login', {
//         method:'POST', 
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(value)
//       })
//       const data = await res.json()
//         messageApi.open({
//           type: res.status == 200 ? 'success': 'error',
//           content: data.msg,
//         });
//       console.log(res)
//     }

//  return(
//   <div>
//      <Image
//       src="/NexaNova.png"
//       width={200}
//       height={200}
//       alt="Picture "
//     />
//     <h1>Signup</h1>
//     <Formik
//       initialValues={{
//         phoneNumber: '',
//         password: '',
//       }}
//       validationSchema={SignupSchema}
//       onSubmit={values => {
//         handleregister(values)
//       }}
//     >
//       {({ errors, touched }) => (
//         <Form>
//           <Field name="phoneNumber"  placeholder="phoneNumber" /> 
//           {errors.firstName && touched.firstName ? (
//             <div>{errors.firstName}</div>
//           ) : null}
//           <br/>
//           <Field name="email" type="email" placeholder="email" />
//           {errors.password && touched.email ? (
//             <div>{errors.email}</div>
//           ) : null}
//           <br/>
//           <Field name="address" type="address" placeholder="address" />
//           {errors.address && touched.address ? (
//             <div>{errors.address}</div>
//           ) : null}
//           <br/>
//           <Field name="password" type="password" placeholder="password" />
//           {errors.password && touched.password ? (
//             <div>{errors.password}</div>
//           ) : null}
//           <br/>
//           Don't have an account yet register? <Link href="/">Login</Link> instead <br/>
//           <button type="submit">Submit</button>
//         </Form>
//       )}
//     </Formik>
//   </div>
// );
//           }
// export default Home 

'use client'

import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Image from 'next/image'
import {  message } from 'antd';
import Link from 'next/link';
const SignupSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    email: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    address: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});


 const index = () => {
  const [messageApi, contextHolder] = message.useMessage();
    const handleRegister = async(values) => {
    const res = await fetch('http://localhost:4000/register', {
        method:'POST', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
      })
      const data = await res.json()
        messageApi.open({
          type: res.status == 200 ? 'success': 'error',
          content: data.msg,
        });
      console.log(res)
    }

  
  return(
  <div>
      <Image
      src="NexaNova.png"
      width={200}
      height={200}
      alt="Logo"
    />
    <h1>Sign up</h1>
    <Formik
      initialValues={{
        phoneNumber: '',
        password: '',
        email: '',
        address: ''
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        handleRegister(values)
      }}
    >
      {({ errors, touched }) => (
        <Form className='authForm'>
           {contextHolder}
          <Field name="phoneNumber"  placeholder="phoneNumber" /> 
          {errors.firstName && touched.firstName ? (
            <div>{errors.firstName}</div>
          ) : null}
          <br/>
          <Field name="email"  placeholder="email" /> 
          {errors.email && touched.email ? (
            <div>{errors.email}</div>
          ) : null}
          <br/>

        
          <Field name="address" type="address" placeholder="address" />
          {errors.address && touched.address ? (
            <div>{errors.address}</div>
          ) : null}
          <br/>
          <Field name="password" type="password"  placeholder="password" /> 
          {errors.password && touched.password ? (
            <div>{errors.password}</div>
          ) : null}
          <br/>
          Already registered ? <Link href="/">Login</Link> instead
          <br/>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
)};

export default index
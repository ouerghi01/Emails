import React from 'react'
import { Heading } from '@chakra-ui/react';
import axios from 'axios';
// The below import defines which components come from formik
import {
  FormControl,
  FormLabel,Select,
  FormErrorMessage,
} from '@chakra-ui/react' ;
import { Button, Input } from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';

export default function Signup(props) {
  const validateName=name =>{
    let error;
    if (!name) {
      error = 'Name is required';
    }
    return error;
  }
  const SignupRequest =async (name,email,password,role)=>{
    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/signup', {
        name,
        email,
        password,
        role
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

const validateEmail = email => {
    let error;
    if (email === '') {
        error = 'Email is required';
    } else if (!email.includes('@')) {
        error = 'Email must include @';
    } else if (!email.includes('gmail') && !email.includes('etudiant') && !email.includes('hotmail')){
        error = 'Email must include gmail';
    } else if (!email.includes('.')) {
        error = 'Email must include .';
    }
    return error;
}

  return (
    <Formik
      initialValues={{ 
        name: '' ,
        email: '', 
        password: '',
        role:''

      }}
      onSubmit={(values, actions) => {
        console.log(values)
        SignupRequest(values.name,values.email,values.password,values.role);
        props.Handleup();
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          actions.setSubmitting(false)
        }, 1000)
      }}
    >
      {(props) => (
        <Form style={{
          display: 'flex',
          position: 'relative',
          top: '50px',
          flexDirection: 'column',
          width: '400px',
          margin: 'auto',
          padding: '20px',
          border: '1px solid #ccc',
          borderRadius: '5px',
        }}> 
         <Heading
            as="h1"
            size="xl"
            color="gold"
            fontWeight="bold"
            fontFamily="Arial"
            textAlign="center"
            marginBottom="20px"
          >
            Sign Up
          </Heading>
          <Field name='name'  validate={validateName}>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.name && form.touched.name}>
                <FormLabel>First name</FormLabel>
                <Input {...field} placeholder='name' />
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name='email'  validate={validateEmail}>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.email && form.touched.email}>
                <FormLabel>Email</FormLabel>
                <Input {...field} placeholder='email' />
                <FormErrorMessage>{form.errors.email}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name='password' >
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.password && form.touched.password}>
                <FormLabel>Password</FormLabel>
                <Input {...field} placeholder='password' type='password'/>
                <FormErrorMessage>{form.errors.password}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name='role' >
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.role && form.touched.role}>
                <FormLabel>Role</FormLabel>
                <Select {...field} placeholder="select a role">
                  <option value={"Admin"}>Admin</option>
                  <option value={"User"}>User</option>
                </Select>
                <FormErrorMessage>{form.errors.role}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Button
            mt={4}
            colorScheme='teal'
            isLoading={props.isSubmitting}
            type='submit'
          >
            Sign Up
          </Button>
        </Form>
      )}
    </Formik>
  )
}
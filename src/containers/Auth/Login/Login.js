import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import {FormWrapper, StyledForm} from '../../../hoc/layout/elements';
import Input from '../../../components/Ui/Forms/Input/Input';
import Button from '../../../components/Ui/Forms/Button/Button';
import Heading from '../../../components/Ui/Forms/Headings/Heading';

const LoginSchema = Yup.object().shape({
 email: Yup.string()
  .email('invalid email')
  .required('Email is required'),
 password: Yup.string()
  .required('Password is required')
  .min(5),
});

const Login = () => {
 return (
  <Formik
   onSubmit={(values, {setSubmitting}) => {
    console.log(values);
   }}
   validationSchema={LoginSchema}
   initialValues={{email: '', password: ''}}
  >
   {({isSubmitting, isValid}) => (
    <FormWrapper>
     <Heading noMargin size='h1' color='white'>
      {' '}
      Login into your account
     </Heading>
     <Heading size='h4' bold color='white'>
      Fill in your details to login into your account
     </Heading>

     <StyledForm>
      <Field
       component={Input}
       type='email'
       name='email'
       placeholder='Your email ..'
      />

      <Field
       component={Input}
       type='password'
       name='password'
       placeholder='Your password ..'
      />

      <Button disabled={!isValid} type='submit'>
       lOGIN
      </Button>
     </StyledForm>
    </FormWrapper>
   )}
  </Formik>
 );
};

export default Login;

import React from 'react';
import {Formik, Field} from 'formik';
import * as Yup from 'yup';
import {FormWrapper, StyledForm} from '../../../hoc/layout/elements';
import Input from '../../../components/Ui/Forms/Input/Input';
import Button from '../../../components/Ui/Forms/Button/Button';
import Heading from '../../../components/Ui/Forms/Headings/Heading';

const SignUpSchema = Yup.object().shape({
 firstName: Yup.string()
  .required('Name is required')
  .min(3, 'too short')
  .max(25, ' Maximum 25 characters'),
 lastName: Yup.string()
  .required('Lastname is required')
  .min(3, 'too short')
  .max(25, ' Maximum 25 characters'),
 email: Yup.string()
  .email('invalid email')
  .required('Email is required'),
 password: Yup.string()
  .required('Password is required')
  .min(5),
 confirmPassword: Yup.string()
  .oneOf([Yup.ref('password'), null], 'Password doesn`t match')
  .required('You need to confirm password'),
});

const SignUp = () => {
 return (
  <Formik
   onSubmit={(values, {setSubmitting}) => {
    console.log(values);
   }}
   validationSchema={SignUpSchema}
   initialValues={{
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
   }}
  >
   {({isSubmitting, isValid}) => (
    <FormWrapper>
     <Heading noMargin size='h1' color='white'>
      {' '}
      Sign Up for an account
     </Heading>
     <Heading size='h4' bold color='white'>
      Fill in your details to register your account
     </Heading>

     <StyledForm>
      <Field
       component={Input}
       type='text'
       name='firstName'
       placeholder='Your first name ..'
      />
      <Field
       component={Input}
       type='text'
       name='lastName'
       placeholder='Your lastNmae ..'
      />
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
      <Field
       component={Input}
       type='password'
       name='confirmPassword'
       placeholder='Confirm password ..'
      />

      <Button disabled={!isValid} type='submit'>
       LOGIN
      </Button>
     </StyledForm>
    </FormWrapper>
   )}
  </Formik>
 );
};

export default SignUp;

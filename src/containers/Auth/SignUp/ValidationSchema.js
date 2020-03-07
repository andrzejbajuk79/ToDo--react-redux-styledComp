import * as Yup from 'yup';
// import React, {useEffect} from 'react';

export const SignUpSchema = Yup.object().shape({
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

import React, {useEffect} from 'react';
import {Formik, Field} from 'formik';

import {connect} from 'react-redux';
import * as actions from '../../../store/actions';
import styled from 'styled-components';
import {FormWrapper, StyledForm} from '../../../hoc/layout/elements';
import Input from '../../../components/Ui/Forms/Input/Input';
import Button from '../../../components/Ui/Forms/Button/Button';
import Message from '../../../components/Ui/Message/Message';
import Heading from '../../../components/Ui/Headings/Heading';
import {SignUpSchema} from './ValidationSchema';
import {SignUpInitValues} from './InitialValues';

const MessageWrapper = styled.div`
 position: absolute;
 bottom: 0;
`;

const SignUp = ({signUp, cleanUp, loading, error}) => {
 useEffect(() => {
  return () => {
   cleanUp(); //odpali na unmount
  };
 }, [cleanUp]);
 return (
  <Formik
   onSubmit={async (values, {setSubmitting}) => {
    console.log(values);
    await signUp(values); //isSubmitting=true
    setSubmitting(false);
   }}
   validationSchema={SignUpSchema}
   initialValues={SignUpInitValues}
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
       placeholder='Your firstname ..'
      />
      <Field
       component={Input}
       type='text'
       name='lastName'
       placeholder='Your lastname ..'
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

      <Button //
       disabled={!isValid || isSubmitting}
       loading={loading ? 'Signing up' : null}
       type='submit'
      >
       SIGN UP
      </Button>
      <MessageWrapper>
       <Message error show={error}>
        {' '}
        {error}
       </Message>
      </MessageWrapper>
     </StyledForm>
    </FormWrapper>
   )}
  </Formik>
 );
};
const mapStateToProps = ({auth}) => ({
 loading: auth.loading,
 error: auth.error,
});

const mapDispatchToProps = {
 signUp: actions.signUp,
 cleanUp: actions.cleanErrors,
};

export default connect(
 mapStateToProps, //
 mapDispatchToProps
)(SignUp);

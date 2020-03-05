import React, {useEffect} from 'react';
import {Formik, Field} from 'formik';
import {connect} from 'react-redux';
import styled from 'styled-components';
import * as Yup from 'yup';
import * as actions from '../../../store/actions';
import {FormWrapper, StyledForm} from '../../../hoc/layout/elements';
import Input from '../../../components/Ui/Forms/Input/Input';
import Button from '../../../components/Ui/Forms/Button/Button';
import Heading from '../../../components/Ui/Headings/Heading';
import Message from '../../../components/Ui/Message/Message';
const MessageWrapper = styled.div`
 position: absolute;
 bottom: 0;
`;
const LoginSchema = Yup.object().shape({
 email: Yup.string()
  .email('invalid email')
  .required('Email is required'),
 password: Yup.string()
  .required('Password is required')
  .min(5),
});

const Login = ({login, loading, error, cleanUp}) => {
 useEffect(() => {
  return () => {
   cleanUp();
  };
 }, [cleanUp]);
 return (
  <Formik
   onSubmit={async (values, {setSubmitting}) => {
    console.log(values);
    await login(values);
    setSubmitting(false);
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

      <Button //
       disabled={!isValid || isSubmitting}
       loading={loading ? 'Logging  in' : null}
       type='submit'
      >
       lOGIN
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
 login: actions.signIn,
 cleanUp: actions.cleanErrors,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

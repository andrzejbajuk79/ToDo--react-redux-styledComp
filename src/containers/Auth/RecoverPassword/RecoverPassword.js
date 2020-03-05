import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Formik, Field} from 'formik';
import styled from 'styled-components';
import * as Yup from 'yup';

import * as actions from '../../../store/actions';
import {FormWrapper, StyledForm} from '../../../hoc/layout/elements/index';
import Heading from '../../../components/Ui/Headings/Heading';
import Input from '../../../components/Ui/Forms/Input/Input';
import Button from '../../../components/Ui/Forms/Button/Button';
import Message from '../../../components/Ui/Message/Message';

const MessageWrapper = styled.div`
 position: absolute;
 bottom: 0;
`;
const RecoverSchema = Yup.object().shape({
 email: Yup.string()
  .email('invalid email')
  .required('Email is required'),
});

const RecoverPassword = ({loading, error, sendEmail, cleanUp}) => {
 useEffect(() => {
  return () => {
   cleanUp();
  };
 }, [cleanUp]);
 return (
  <>
   <Formik
    onSubmit={async (values, {setSubmitting}) => {
     console.log(values);
     console.log('send email to recover');
     await sendEmail(values);
     setSubmitting(false);
    }}
    validationSchema={RecoverSchema}
    initialValues={{email: ''}}
   >
    {({isSubmitting, isValid}) => (
     <FormWrapper>
      <Heading noMargin size='h1' color='white'>
       Recover your password
      </Heading>
      <Heading size='h4' color='white'>
       type your email to recover password
      </Heading>

      <StyledForm>
       <Field
        component={Input}
        type='email'
        name='email'
        placeholder='Type your email ..'
       />
       <Button //
        disabled={!isValid || isSubmitting}
        loading={loading ? 'Sending  recover email' : null}
        type='submit'
       >
        Recover email
       </Button>
       <MessageWrapper>
        <Message error show={error}>
         {error}
        </Message>
       </MessageWrapper>
       {/* zmieniamy erro z NULL na FALSE w reducerze .VERIFY_SUCCESS*/}
       <MessageWrapper>
        <Message success show={error === false}>
         Recover email sent successfully
        </Message>
       </MessageWrapper>
      </StyledForm>
     </FormWrapper>
    )}
   </Formik>
  </>
 );
};

const mapStateToProps = ({auth}) => ({
 loading: auth.recoverPassword.loading,
 error: auth.recoverPassword.error,
});

const mapDispatchToProps = {
 sendEmail: actions.recoverPassword,
 cleanUp: actions.cleanErrors,
};

export default connect(mapStateToProps, mapDispatchToProps)(RecoverPassword);

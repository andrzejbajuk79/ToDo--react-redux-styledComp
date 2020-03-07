import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {Formik, Field} from 'formik';

import * as actions from '../../../store/actions';
import {FormWrapper, StyledForm} from '../../../hoc/layout/elements';
import Input from '../../../components/Ui/Forms/Input/Input';
import Button from '../../../components/Ui/Forms/Button/Button';
import Heading from '../../../components/Ui/Headings/Heading';
import Message from '../../../components/Ui/Message/Message';

import {ProfileInitValues} from './InitilalValues';
import {ProfileSchema} from './ValidationSchema';
import Modal from '../../../components/Ui/Modal/Modal';
const MessageWrapper = styled.div`
 position: absolute;
 bottom: 2rem;
`;
const ButtonsWrapper = styled.div`
 display: flex;
 width: 100%;
 margin-bottom: 2rem;
 justify-content: space-around;
`;

const DeleteWrapper = styled.div`
 cursor: pointer;
 color: var(--color-errorRed);
 font-size: 1.3rem;
 font-weight: 700;
 margin-top: 2rem;
 transition: all 0.2s;
 &:hover {
  transform: translateY(-3px);
 }

 &:active {
  transform: translateY(2px);
 }
`;

const Profile = ({
 firebase,
 editProfile,
 loading,
 error,
 deleteUser,
 loadingDelete,
 errorDelete,
 cleanUp,
}) => {
 useEffect(() => {
  return () => {
   cleanUp(); //odpali na unmount
  };
 }, [cleanUp]);
 const [modalOpened, setModalOpened] = useState(false);
 //na pocztku profile jest pusty w firebase
 if (!firebase.profile.isLoaded) return null;
 return (
  <>
   <Formik
    initialValues={ProfileInitValues(firebase)}
    validationSchema={ProfileSchema}
    onSubmit={async (values, {setSubmitting}) => {
     console.log(values);
     await editProfile(values);
     setSubmitting(false);
    }}
   >
    {({isSubmitting, isValid}) => (
     <FormWrapper>
      <Heading noMargin size='h1' color='white'>
       {' '}
       Edit your profile
      </Heading>
      <Heading size='h4' bold color='white'>
       Here you can change your personal details
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
        loading={loading ? 'Updating...' : null}
        type='submit'
       >
        UPDATE
       </Button>
       <MessageWrapper>
        <Message error show={error}>
         {' '}
         {error}
        </Message>
       </MessageWrapper>
       <MessageWrapper>
        <Message success show={error === false}>
         Profile updated successfully
        </Message>
       </MessageWrapper>
       <DeleteWrapper
        onClick={() => setModalOpened(console.log('opened') || true)}
       >
        Delete your Account
       </DeleteWrapper>
      </StyledForm>
     </FormWrapper>
    )}
   </Formik>
   <Modal opened={modalOpened} close={() => setModalOpened(false)}>
    <Heading noMargin size='h1' color='white'>
     {' '}
     Delete Your account
    </Heading>
    <Heading size='h4' bold color='white'>
     do you really want to delete your account?
    </Heading>
    <ButtonsWrapper>
     <Button
      onClick={() => deleteUser()}
      color={'var(--color-errorRed)'}
      contain
      disabled={loadingDelete}
      loading={loadingDelete ? 'Deleting' : null}
     >
      Delete
     </Button>
     <Button
      color={'var(--color-mainDark)'}
      contain
      onClick={() => setModalOpened(false)}
     >
      Cancel
     </Button>
    </ButtonsWrapper>
    <MessageWrapper>
     <Message error show={errorDelete}>
      {errorDelete}
     </Message>
    </MessageWrapper>
    <MessageWrapper>
     <Message success show={error === false}>
      Profile deleted successfully
     </Message>
    </MessageWrapper>
   </Modal>
  </>
 );
};

const mapStateToProps = ({firebase, auth}) => ({
 firebase,
 loading: auth.profileEdit.loading,
 error: auth.profileEdit.error,
 loadingDelete: auth.deleteUser.loading,
 errorDelete: auth.deleteUser.error,
});

const mapDispatchToProps = {
 editProfile: actions.editProfile,
 cleanUp: actions.cleanErrors,
 deleteUser: actions.deleteUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

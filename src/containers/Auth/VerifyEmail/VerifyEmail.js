import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import * as actions from '../../../store/actions';
import {FormWrapper} from '../../../hoc/layout/elements';
import Heading from '../../../components/Ui/Headings/Heading';
import Button from '../../../components/Ui/Forms/Button/Button';
import Message from '../../../components/Ui/Message/Message';
const MessageWrapper = styled.div`
 position: absolute;
 bottom: 0;
`;
const Wrapper = styled.div`
 position: relative;
 width: 100%;
 height: 100%;
 display: flex;
 flex-direction: column;
 align-items: center;
`;
const VerifyEmail = ({loading, error, sendVerEmail, cleanUp}) => {
 useEffect(() => {
  return () => {
   cleanUp();
  };
 }, [cleanUp]);
 return (
  <FormWrapper>
   <Wrapper>
    <Heading color='white' size='h1'>
     Verify your email
    </Heading>
    <Heading color='white' size='h4' bold>
     Got to your email inbox, and please verify your email
    </Heading>
    <Button
     disabled={loading}
     loading={loading ? 'Sending email...' : null}
     onClick={() => sendVerEmail()}
    >
     Resend verification email
    </Button>
    <MessageWrapper>
     <Message error show={error}>
      {error}
     </Message>
    </MessageWrapper>
    {/* zmieniamy erron z NULL na FALSE w reducerze .VERIFY_SUCCESS*/}
    <MessageWrapper>
     <Message success show={error === false}>
      Messege sent successfully
     </Message>
    </MessageWrapper>
   </Wrapper>
  </FormWrapper>
 );
};
const mapStateToProps = ({auth}) => ({
 loading: auth.verifyEmail.loading,
 error: auth.verifyEmail.error,
});

const mapDispatchToProps = {
 sendVerEmail: actions.verifyEmail,
 cleanUp: actions.cleanErrors,
};

export default connect(mapStateToProps, mapDispatchToProps)(VerifyEmail);

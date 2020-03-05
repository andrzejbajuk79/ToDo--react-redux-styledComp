import React from 'react';
import styled from 'styled-components';

const P = styled.p`
 font-size: 1.4rem;
 font-weight: 700;
 color: red;
 text-align: center;
 color: ${({error, success}) => {
  if (error) return 'var(--color-errorRed)';
  if (success) return 'green';
  else return 'var(--color-main)';
 }};

 opacity: ${({show}) => (show ? '1' : '0')};
 transform: translateY(${({show}) => (show ? '30px' : '0px')});
 transition: all 0.2s;
`;

const Message = ({children, error, success, show}) => {
 return (
  <P success={success} error={error} show={show}>
   {children}
  </P>
 );
};
export default Message;

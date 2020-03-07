import React from 'react';
import styled from 'styled-components';

const P = styled.p`
 font-size: 1.4rem;
 font-weight: 700;
 color: red;
 text-align: center;
color: ${({error, color, success}) => {
         if (color) {
           return color;
         } else {
           if (error) return 'var(--color-errorRed)';
           if (success) return 'var(--color-success)';
         }
       }};

 opacity: ${({show}) => (show ? '1' : '0')};
 transform: translateY(${({show}) => (show ? '30px' : '0px')});
 transition: all 0.2s;
`;

const Message = ({children, color, error, success, show}) => {
  return (
    <P success={success} color={color} error={error} show={show}>
      {children}
    </P>
  );
};
export default Message;

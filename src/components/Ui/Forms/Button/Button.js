import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
 width: 100%;
 outline: mone;
 padding: 1.2rem 2rem;
 font-size: 1.2rem;
 color: var(--color-white);
 font-weight: 700;
 box-shadow: 0rem 0.5rem 3.5rem var(--shadow);
 background-color: var(--color-mainLighter);
 border: none;
 transition: all 0.2a;
 &:hover {
  transform: translatyY(-3px);
 }
 &:active {
  transform: translatyY(2px);
 }
 &:disabled {
  cursor: not-allowed;
  background-color: #333;
 }
`;

const Button = ({children, disabled, ...rest}) => {
 return (
  <StyledButton {...rest} disabled={disabled}>
   {children}
  </StyledButton>
 );
};

export default Button;

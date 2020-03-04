import React from 'react';
import styled, {css} from 'styled-components';

const baseStyle = css`
 color: ${({color}) =>
  color === 'white' ? 'var(--color-white)' : 'var(--color-main)'};
 font-weight: ${({bold}) => (bold ? '700' : '300')};
 margin-top: 0;
 margin-bottom: ${({noMargin}) => (noMargin ? '0rem' : '3rem')};
`;
const Heading1 = styled.h1`
 font-size: 2rem;
 ${baseStyle};
`;
const Heading2 = styled.h2`
 font-size: 1.8rem;
 ${baseStyle};
`;
const Heading3 = styled.h3`
 font-size: 1.5rem;
 ${baseStyle};
`;
const Heading4 = styled.h4`
 font-size: 1.3rem;
 ${baseStyle};
`;

const Heading = ({children, color, bold, noMargin, size}) => {
 switch (size) {
  case 'h1':
   return (
    <Heading1 noMargin={noMargin} bold={bold} color={color}>
     {children}
    </Heading1>
   );
  case 'h2':
   return (
    <Heading2 noMargin={noMargin} bold={bold} color={color}>
     {children}
    </Heading2>
   );
  case 'h3':
   return (
    <Heading3 noMargin={noMargin} bold={bold} color={color}>
     {children}
    </Heading3>
   );
  case 'h4':
   return (
    <Heading4 noMargin={noMargin} bold={bold} color={color}>
     {children}
    </Heading4>
   );

  default:
   break;
 }
};
export default Heading;

import React from 'react';
import NavItem from './NavItem/NavItem';
import styled from 'styled-components';

const Nav = styled.nav`
 display: flex;
`;
const Ul = styled.ul`
 display: flex;
 align-items: center;
 height: 100%;
 flex-direction: ${props => (props.mobile ? 'column' : 'row')};
`;
export const NavItems = ({mobile, clicked}) => {
 return (
  <Nav>
   <Ul mobile={mobile}>
    <NavItem clicked={clicked} mobile={mobile} link='/'>
     Home
    </NavItem>
    <NavItem clicked={clicked} mobile={mobile} link='signup'>
     Sign Up
    </NavItem>
    <NavItem clicked={clicked} mobile={mobile} link='login'>
     Login
    </NavItem>
   </Ul>
  </Nav>
 );
};

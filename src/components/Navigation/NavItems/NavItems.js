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
export const NavItems = ({mobile, clicked, loggedIn}) => {
 let links;
 if (loggedIn.uid) {
  links = (
   <Ul mobile={mobile}>
    <NavItem clicked={clicked} mobile={mobile} link='/'>
     Todos
    </NavItem>
    <NavItem clicked={clicked} mobile={mobile} link='/logout'>
     Log Out
    </NavItem>{' '}
   </Ul>
  );
 } else {
  links = (
   <Ul mobile={mobile}>
    <NavItem clicked={clicked} mobile={mobile} link='signup'>
     Sign Up
    </NavItem>
    <NavItem clicked={clicked} mobile={mobile} link='login'>
     Login
    </NavItem>
   </Ul>
  );
 }

 return <Nav>{links}</Nav>;
};

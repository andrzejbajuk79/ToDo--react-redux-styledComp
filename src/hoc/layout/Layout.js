import React from 'react';
import {connect} from 'react-redux';
import Navbar from '../../components/Navigation/Navbar/Navbar';
import styled from 'styled-components';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
const MainWrapper = styled.main`
 width: 100%;
 min-height: calc(100vh - 6rem);
 margin-top: 6rem;
 display: flex;
 align-items: center;
 justify-content: center;
`;

const Layout = ({children, loggedIn}) => (
 <>
  <SideDrawer loggedIn={loggedIn} />
  <Navbar loggedIn={loggedIn} />
  <MainWrapper>{children}</MainWrapper>
 </>
);
const mapStateToProps = ({firebase}) => ({
 loggedIn: firebase.auth,
});

export default connect(mapStateToProps)(Layout);

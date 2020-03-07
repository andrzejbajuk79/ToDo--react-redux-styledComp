import React from 'react';
import styled from 'styled-components';
const Wrapper = styled.div`
 position: fixed;
 top: 0;
 z-index: 100;
 left: 0;
 background-color: rgba(0, 0, 0, 0.7);
 width: 100%;
 height: 100vh;
 opacity: ${({opened}) => (opened ? '1' : '0')};
 visibility: ${({opened}) => (opened ? 'visible' : 'hidden')};
 transition: all 0.1s;
`;
//jak klikniemy uruchmiamy useState w Profile.js
const BackDrop = ({opened, close}) => {
 return <Wrapper onClick={close} opened={opened} />;
};
export default BackDrop;

import React from 'react';
import styled from 'styled-components';

const LogoWrapper = styled.div`
 padding: 1rem;
 color: var(--color-white);
 font0size: 1.2rem;
 height: 100%;
 display: flex;
 font-weight: 700;
 align-items: center;
`;

const Logo = () => {
 return <LogoWrapper>Productivity</LogoWrapper>;
};
export default Logo;

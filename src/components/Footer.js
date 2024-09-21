import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  // position: fixed;
  left: 0;
  bottom: 0;
  background-color: #B2BEB5;
  color: white;
  padding: 0.5rem;
  text-align: center;
  width: 100%;
`;
const Footer = () => {
    return(
        <FooterContainer>
            <p>© 2024 Printify, All rights reserved</p>
         </FooterContainer>
    );
};
export default Footer;
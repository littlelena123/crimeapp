import React from "react";
import {
  FooterContainer,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterLink,
} from "./FooterElements";
const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinksWrapper>
        <FooterLink
          to="home"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}
        >
          Home
        </FooterLink>
        <FooterLink
          to="about"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}
        >
          About
        </FooterLink>
        <FooterLink
          to="map"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}
        >
          Crime Map
        </FooterLink>
        <FooterLink
          to="home"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}
        >
          Login/Registration
        </FooterLink>
      </FooterLinksWrapper>
      <FooterLinkTitle>© 2022 COMP7705 Project Crime Prediction Platform</FooterLinkTitle>
    </FooterContainer>
  );
};

export default Footer;


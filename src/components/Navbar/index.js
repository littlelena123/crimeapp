import React from "react";
import { FaBars } from "react-icons/fa";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavLinksA
} from "./NavbarElements";
import HeroSection from '../HeroSection';
import StatisticsSection from '../StatisticsSection';
import AboutSection from '../AboutSection';
import Signup from '../User/signup/Signup';
import { Switch, Route } from 'react-router-dom';
const Navbar = ({ toggle }) => {

  return (
    <>

      <Nav>
        <NavbarContainer>
          <NavLogo to="/" >
          Crime Prediction Platform
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>

            <NavItem>
              <NavLinksA to="/" >
                <p title="Home">Home</p>
              </NavLinksA>
            </NavItem>
            <NavItem>
              <NavLinks to="/about">
                <p title="About">About</p>
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/map">
                <p title="Crime Map">Crime Map</p>
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/statistics">
                <p title="Statistics">Statistics</p>
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/subscribe">
                <p title="Subscribe">Subscribe</p>
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
      <Route>
                <Switch>
                    <Route exact path='/' component={HeroSection}></Route>
                    <Route exact path='/about' component={AboutSection}></Route>
                    <Route exact path='/statistics' component={StatisticsSection}></Route>
                    <Route exact path='/subscribe' component={Signup}></Route>
                </Switch>
        </Route>
 
    </>
  );
};

export default Navbar;

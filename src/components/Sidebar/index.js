import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarWrapper,
  SidebarLink,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            to="/"
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            //offset={-80}
          >
            Home
          </SidebarLink>
          <SidebarLink
            to="/about"
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            //offset={-80}
          >
            About
          </SidebarLink>
          <SidebarLink
            to="/map"
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            //offset={-80}
          >
            Crime Map
          </SidebarLink>
          <SidebarLink
            to="/statistics"
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            //offset={-80}
          >
            Statistics
          </SidebarLink>
          <SidebarLink
            to="/subscribe"
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            //offset={-40}
          >
            Subscribe
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;

import React from "react";
import {
  AboutContainer,
  AboutWrapper,
  AboutContent,
  AboutTitle,
  ContentItem,
  ContentTitle,
  ContentBody,
  AboutImage,
  Image,
} from "./AboutElements";
import Picture from "../../images/image1.svg";

const About = () => {
  return (
    <AboutContainer id="about">
      <AboutTitle>About Crime Prediction Platform</AboutTitle>
      <AboutWrapper>
        <AboutContent>
          <ContentItem>
            <ContentTitle>Our Aim</ContentTitle>
            <ContentBody>
            In daily life, the crime situation in the living area is closely 
            related to the personal safety of citizens. Once a crime happens, 
            it will inevitably cause the panic of surrounding residents. 
            Therefore, users need a convenient platform to obtain information 
            about crimes in their area. To this end, a crime prediction platform 
            is designed, which has the function of querying and displaying 
            local crime information and national crime information and providing 
            crime prediction for users according to the crime situation. 
            When a user chooses to subscribe, the platform will periodically 
            send a region-wide prediction report to all users. 
            The platform also sends crime alerts based on the user's location 
            and captures data in real time for display and model update.
            </ContentBody>
          </ContentItem>
        </AboutContent>
        <AboutImage>
          <Image src={Picture} />
        </AboutImage>
      </AboutWrapper>
    </AboutContainer>
  );
};

export default About;

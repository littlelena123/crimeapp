import React, { useState } from "react";
import {
  HeroContainer,
  HeroBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroPer,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
import { Button } from "../ButtonElement";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        
      </HeroBg>
      <HeroContent>
        <HeroH1>Crime Prediction Platform </HeroH1>
        <HeroP>
          Created in an effort to increase personal safety and affect policy to
          lower crime rates.
        </HeroP>
        <HeroPer>
        <HeroPer>
          Supervisor: Chao Huang
        </HeroPer>
        <HeroPer>
          Student 1: Pengyue Jia (Leader)
        </HeroPer>
        <HeroPer>
          Student 2 Jie Ou
        </HeroPer>
        <HeroPer>
          Student 3 Hanyue He
        </HeroPer>
        <HeroPer>
          Student 4 Pei Wang
        </HeroPer>
        <HeroPer>
          Student 5 Yuhang Yu
        </HeroPer>
        </HeroPer>
        <HeroBtnWrapper>

          <Button
            to="map"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            View Crime Heatmap{hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;

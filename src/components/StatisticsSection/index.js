import React from "react";
import {
  StatisticsContainer,
  StatisticsTitle,
  StatisticsWrapper,
  DashImage,
  Button,
} from "./StatisticsElements";
import Dashboard from "../../images/dashboard.png";
const Stat = () => {
  return (
    <StatisticsContainer id="statistics">
      <StatisticsWrapper>
      <StatisticsTitle>Statistics</StatisticsTitle>
      <a
        href="https://prod-apnortheast-a.online.tableau.com/t/vpp/views/1/1?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link"
        target="_blank"
        rel="noreferrer"
      >
        <DashImage src={Dashboard} alt="Crime Statistics Dashboard" />
      </a>
      <a
        href="https://prod-apnortheast-a.online.tableau.com/t/vpp/views/1/1?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link"
        target="_blank"
        rel="noreferrer"
      >
        <Button>Open statistics dashboard</Button>
      </a>
      </StatisticsWrapper>
    </StatisticsContainer>
  );
};
export default Stat;

import React from "react";
import {
  StatisticsContainer,
  Dashimg,
  DashImage,
  CenterImage,
  StatisticsWrapper,
  StatisticsWrapper1,
  StatisticsWrapper2,
  StatisticsWrapper3,
  StatisticsWrapper4,
  StatisticsWrapper5,
  StatisticsWrapper6,
  StatisticsWrapper7,
  StatisticsWrapper8

} from "./StatisticsElements";
import Script from 'react-load-script'
import { BorderBox1, BorderBox2, BorderBox3, BorderBox6, BorderBox5 } from '@jiaminghi/data-view-react'
import { withRouter } from 'react-router-dom';
import DemoMix from '../AntV';
import Header from './header';
import DemoColumn from './center';
import Dashboard from "./bg.png";


class Stat extends React.Component {
    constructor(props) {
      super(props);
      };
    
  
  
render() {
  return (
  
    <StatisticsContainer id="statistics" style={{display: this.props.location.pathname == "/statistics" ? "block" : "none"}}>
      <StatisticsWrapper id="haha">
      <Dashimg src={Dashboard} alt="CrimeSurge Statistics Dashboard" />
      <StatisticsWrapper1>
      <Header/>
      </StatisticsWrapper1>
      <StatisticsWrapper2>
      <BorderBox1>
    
      </BorderBox1>
      </StatisticsWrapper2>
      <StatisticsWrapper3>
      <BorderBox2> 
        <CenterImage>
      <DemoMix/>
        </CenterImage>
      </BorderBox2>
      </StatisticsWrapper3>
      <StatisticsWrapper4>
      <BorderBox3>
      <DashImage>
      <DemoColumn/>
        </DashImage>
      </BorderBox3>
      </StatisticsWrapper4>
      <StatisticsWrapper5>
      <BorderBox6>     <DashImage>
      <DemoColumn/>
        </DashImage></BorderBox6>
      </StatisticsWrapper5>
      <StatisticsWrapper6>
      <BorderBox5>     <DashImage>
      <DemoColumn/>
        </DashImage></BorderBox5>
      </StatisticsWrapper6>
      <StatisticsWrapper7>
      <BorderBox5>     <DashImage>
      <DemoColumn/>
        </DashImage></BorderBox5>
      </StatisticsWrapper7>
      <StatisticsWrapper8>
      <BorderBox5>     <DashImage>
      <DemoColumn/>
        </DashImage></BorderBox5>
      </StatisticsWrapper8>

        </StatisticsWrapper>
    </StatisticsContainer>
  )}
};
export default withRouter(Stat);

/*
      <Script async  url='https://prod-apnortheast-a.online.tableau.com/javascripts/api/viz_v1.js'></Script>
      <div class='tableauPlaceholder'>
        <object class='tableauViz' margin-top="553" width='1470rem' height='826rem'>
          <param name='host_url' value='https%3A%2F%2Fprod-apnortheast-a.online.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='&#47;t&#47;vppp' /><param name='name' value='1&#47;1' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='showAppBanner' value='false' /></object></div>
*/
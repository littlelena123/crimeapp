import React from "react";
import {
  MapContainer,
} from "./MapElements";
import { withRouter } from 'react-router-dom';

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      };
    };
  


  render() {
    return (
      <MapContainer id="map" style={{display: this.props.location.pathname == "/map" ? "block" : "none"}}>

        <iframe src="https://learngis2.maps.arcgis.com/apps/webappviewer/index.html?id=650d2c0c6dbc4687bbc6b7c52112ebe4" 
        width="100%" 
        height="100%" 
        frameBorder="0" 
        style={{border:0}}
        allowFullScreen>iFrames are not supported on this page.</iframe>
       
      </MapContainer>
    );
  }
}

export default withRouter(Map);




import React, { Component } from "react";
import { render } from "react-dom";
import { LoadScript } from "@react-google-maps/api";
import MyMap from "./Map";
import {
  MapContainer,
  IncidentMap,
  MapWrapper,
  MapTitle,
} from "./MapElements";

const lib = ["places"];
const key = "AIzaSyBcDnOodcshVmCcN0VtrXm2QjZup4p-EL0"; // PUT GMAP API KEY HERE
class App extends React.Component {
  render() {
    return (
      <MapContainer id="map">
      <MapTitle>Crime Map</MapTitle>
      <MapWrapper>
        <IncidentMap>
      <LoadScript googleMapsApiKey={key} libraries={lib}>
        <MyMap />
      </LoadScript>
      </IncidentMap>
        </MapWrapper>
      </MapContainer>
    );
  }
}
export default Map;

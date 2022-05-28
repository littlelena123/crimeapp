import React from "react";
import {
  MapContainer,
  IncidentMap,
  MapWrapper,
  MapTitle,
} from "./MapElements";
import GoogleMapReact from "google-map-react";

import MarkerImage from "../../images/icon1.svg";
class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      isLoaded: false,
      formData: {
        type: null,
        date: null,
        location: null,
      },
    };
  }

  setDate(){
    this.setState({
        
    })
  }

  async componentDidMount() {
    if (!this.state.isLoaded) {
      try {
        //const response = await fetch("/api/incident-data");
        //const value = await response.json();
        this.setState({
          isLoaded: true,
          data: [{lat:41.8788, lng:-87.6814}]
        });
      } catch (err) {
        console.log(err);
      }
    }
  }

  render() {
    const crimeList = [{"type":"THEF:7.5999", "location":{"lat":"41.8788","lng": "-87.6814"}},
    {"type":"BATTERY:3.21", "location":{"lat":"41.8388","lng": "-87.6741"}}];
    const formData = this.state.formData;
    console.log(formData['date']);
    return (
      <MapContainer id="map">
        <MapTitle>Crime Map</MapTitle>
        <MapWrapper>
          <IncidentMap>
            {this.state.isLoaded ? (
              <GoogleMapReact
                bootstrapURLKeys={{
                  key: "AIzaSyBcDnOodcshVmCcN0VtrXm2QjZup4p-EL0",
                  libraries: ["visualization"],
                }}
                defaultCenter={{ lat: 41.8379, lng: -87.6828 }}
                defaultZoom={12}
                scaleControl={true}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({ map, maps }) => {
                  const heatmap = new maps.visualization.HeatmapLayer({
                    data: [
                      new window.google.maps.LatLng(41.8788, -87.6814),
                      new window.google.maps.LatLng(41.8379, -87.6828),
                      new window.google.maps.LatLng(41.8379, -87.6829),
                      new window.google.maps.LatLng(41.8379, -87.6827),
                      new window.google.maps.LatLng(41.8379, -87.6826),
                      new window.google.maps.LatLng(41.8379, -87.6825),
                      new window.google.maps.LatLng(41.8380, -87.6824),
                      new window.google.maps.LatLng(41.8381, -87.6823),
                      new window.google.maps.LatLng(41.8384, -87.6823),
                      new window.google.maps.LatLng(41.8382, -87.6822),
                      new window.google.maps.LatLng(41.8388, -87.6821),
                      new window.google.maps.LatLng(41.8379, -87.6825),
                      new window.google.maps.LatLng(41.8380, -87.6874),
                      new window.google.maps.LatLng(41.8381, -87.6863),
                      new window.google.maps.LatLng(41.8384, -87.6853),
                      new window.google.maps.LatLng(41.8382, -87.6842),
                      new window.google.maps.LatLng(41.8388, -87.6841),
                      new window.google.maps.LatLng(41.8379, -87.6845),
                      new window.google.maps.LatLng(41.8380, -87.6844),
                      new window.google.maps.LatLng(41.8383, -87.6843),
                      new window.google.maps.LatLng(41.8384, -87.6843),
                      new window.google.maps.LatLng(41.8382, -87.6800),
                      new window.google.maps.LatLng(41.8388, -87.6811),
                      new window.google.maps.LatLng(41.8388, -87.6812),
                      new window.google.maps.LatLng(41.8388, -77.6812),
                      new window.google.maps.LatLng(41.8388, -77.6813),
                      new window.google.maps.LatLng(41.8389, -77.6814),
                      new window.google.maps.LatLng(41.8380, -77.6813),
                      new window.google.maps.LatLng(41.8381, -77.6814),
                      new window.google.maps.LatLng(41.8382, -77.6813),
                      new window.google.maps.LatLng(41.8383, -77.6814),
                      new window.google.maps.LatLng(41.8384, -77.6813),
                      new window.google.maps.LatLng(41.8385, -77.6814),
                      new window.google.maps.LatLng(41.8986, -77.6813),
                      new window.google.maps.LatLng(41.8887, -77.6814),
                      new window.google.maps.LatLng(41.8788, -77.6813),
                      new window.google.maps.LatLng(41.1688, -77.6814),
                      new window.google.maps.LatLng(41.2578, -77.6813),
                      new window.google.maps.LatLng(41.3468, -77.6814),
                      new window.google.maps.LatLng(41.4358, -77.6813),
                      new window.google.maps.LatLng(41.5248, -77.6814),
                      new window.google.maps.LatLng(41.6138, -77.6813),
                      new window.google.maps.LatLng(41.7028, -77.6814)
                    ],
                    radius: 85,
                  });
                  heatmap.setMap(map);
                  crimeList?.forEach((point) => {
                    var type = point["type"];
                    var contentString =
                      '<div id="content">' +
                      '<div id="siteNotice">' +
                      "</div>" +
                      '<h2 id="firstHeading" class="firstHeading">' +
                      type +
                      "</h2>" +
                      '<div id="bodyContent">' +
                      "<p><b>";
                    const infowindow = new maps.InfoWindow({
                      content: contentString,
                    });
                    const marker = new maps.Marker({
                      position: new maps.LatLng(
                        point["location"]["lat"],
                        point["location"]["lng"]
                      ),
                      map,
                      title: "Orland Park",
                      //icon: MarkerImage,
                    });
                    marker.addListener("click", () => {
                      infowindow.open(map, marker);
                    });
                  });
                    
                    
                }}
              ></GoogleMapReact>
            ) : (
              <MapTitle>
                Sorry we had a problem retrieving the crime data...
              </MapTitle>
            )}
          </IncidentMap>
        </MapWrapper>
      </MapContainer>
    );
  }
}

export default Map;

/*
                onGoogleApiLoaded={({ map, maps }) => {
                  const heatmap = new maps.visualization.HeatmapLayer({
                    data: crimeList?.map((point) => ({
                      location: new maps.LatLng(
                        41.64458971,
                        -87.93973294
                      ),
                      weight: 3,
                    })),
                    radius: 15,
                  });
                  heatmap.setMap(map);
                  crimeList?.forEach((point) => {
                    var type = "type";
                    var contentString =
                      '<div id="content">' +
                      '<div id="siteNotice">' +
                      "</div>" +
                      '<h2 id="firstHeading" class="firstHeading">' +
                      type +
                      "</h2>" +
                      '<div id="bodyContent">' +
                      "<p><b>";
                    const infowindow = new maps.InfoWindow({
                      content: contentString,
                    });
                    const marker = new maps.Marker({
                      position: new maps.LatLng(
                        41.64458971,
                        -87.93973294
                      ),
                      map,
                      title: "type"
                      icon: MarkerImage,
                    });
                    marker.addListener("click", () => {
                      infowindow.open(map, marker);
                    });
                  });
                }}
*/
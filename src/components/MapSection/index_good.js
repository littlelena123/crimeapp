
import React ,{useMemo} from "react";
import {
  MapContainer,
  IncidentMap,
  MapWrapper,
  MapTitle,
} from "./MapElements";
import { GoogleMap, useJsApiLoader, HeatmapLayer, Marker, InfoWindow} from "@react-google-maps/api";

//import MarkerImage from "../../images/marker.png";
const center = {
  lat: 41.8379,
  lng: -87.6828
};
const mapContainerStyle = {
  width: '80vw',
  height: '80vh'
}
const libraries = ['visualization'];

const divStyle = {
  background: `white`,
  border: `1px solid #ccc`,
  padding: 15
}
const onLoad = infoWindow => {
  console.log('infoWindow: ', infoWindow)
}

function Map() {

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBcDnOodcshVmCcN0VtrXm2QjZup4p-EL0",
    libraries
  })

  const markerTest = useMemo(() => ({ lat: 41.8788, lng:-87.6814}), []); 
  
    //console.log(formData['date']);
    return (
      <MapContainer id="map">
        <MapTitle>Crime Map</MapTitle>
        <MapWrapper>
          <IncidentMap>
          {isLoaded ? (
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={12}
                //onLoad={onLoad}
                //onUnmount={onUnmount}
              >
               <HeatmapLayer data={[
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
                    new window.google.maps.LatLng(60.8388, -77.6812),
                    new window.google.maps.LatLng(60.8388, -77.6813),
                    new window.google.maps.LatLng(60.8388, -77.6814)
                  ]}/>
                  <Marker
      position={center}
    />
              </GoogleMap>
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


export default Map;

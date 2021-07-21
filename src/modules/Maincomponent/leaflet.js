import '../../assets/styles/custom.css';
import React from "react";
import { MapContainer, TileLayer, Marker,Map } from 'react-leaflet'
import tesla from './tesla.json'

function leafletMap() {
   console.log(tesla)

  return (
  
  
  <MapContainer center={[40,90]} zoom={2} scrollWheelZoom={true} zoomControl={false}  maxZoom={16} minZoom={4} style={{backgroundColor:"#0000"}}  >
  <TileLayer noWrap={true}
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
{tesla.map((data)=>(
  <Marker
    position={[data.gps.latitude,data.gps.longitude]}>
      </Marker>
))}
    

</MapContainer>

    
)
}

export default leafletMap;

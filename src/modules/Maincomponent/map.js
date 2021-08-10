import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Popup, Polyline, Marker, SVGOverlay, CircleMarker, Tooltip } from 'react-leaflet'
import '../../assets/styles/custom.css';
import axios from 'axios';

export default function App(props) {
  const [hashtag, setHashtag] = useState([])

  axios
    .get(
      "https://ki3l56sayb.execute-api.us-east-2.amazonaws.com//trendingHashtags-from-db"
    )
    .then((res) => {
      setHashtag(res.data.responseData);
      // console.log('locations---', res.data.responseData)
    })
    .catch((err) => {
      console.log(err);
    });
  return (
    <>
      <MapContainer style={{width: '108%',height: 385}} center={[30, 10]}  zoom={1.5} scrollWheelZoom={true} zoomControl={false} maxZoom={16} minZoom={1}>
        <TileLayer noWrap={true}
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'

          // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png"
          // url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.png"

          // url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"

          //for night mode:
          // url="https://map1.vis.earthdata.nasa.gov/wmts-webmerc/VIIRS_CityLights_2012/default/{time}/{tilematrixset}{maxZoom}/{z}/{y}/{x}.png"

        />
        {hashtag.map((items, k) => {
          // let name = items.name
          return (
            <CircleMarker
              key={k}
              center={
                [
                  items.coordinates[1],
                  items.coordinates[0]
                ]
              }
              radius={2}
              fillOpacity={0.5}
              stroke={false}
            >
              <Tooltip  opacity={0.5} permanent>
             <span style={{padding: '8px 8px',color: '#000000', fontWeight: 600}}> {items.name} </span>
                </Tooltip>

            </CircleMarker>)
        })
        }
      </MapContainer>
    </>
  )
}
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Popup, Polyline, Marker, SVGOverlay, CircleMarker, Tooltip } from 'react-leaflet'
import '../../assets/styles/custom.css';
import axios from 'axios';
import styled from "styled-components";

export default function App(props) {
  const [hashtag, setHashtag] = useState([])

  const tileUrl=process.env.REACT_APP_TILEURL_LIGHT_MODE

  useEffect (() => {
      trendingHash();
  }, [])

  function trendingHash () {
    axios
    .get(
      process.env.REACT_APP_BASE_URL_TWITTER + process.env.REACT_APP_TRENDING_HASHTAG
    )
    .then((res) => {
      setHashtag(res.data.responseData);
      // console.log('locations---', res.data.responseData)
    })
    .catch((err) => {
      console.log(err);
    });
  }
  


  return (
    <>
      <MapContainer className='lightmap-style' center={[30, 10]}  zoom={1.5} scrollWheelZoom={true} zoomControl={false} maxZoom={16} minZoom={1}>
        <TileLayer noWrap={true}

          url={tileUrl}
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
              radius={0}
              fillOpacity={0.5}
              stroke={false}
            >
              <Tooltip  opacity={0.5} permanent>
             <span className="map-tip"> {items.name} </span>
                </Tooltip>

            </CircleMarker>)
        })
        }
      </MapContainer>
    </>
  )
}
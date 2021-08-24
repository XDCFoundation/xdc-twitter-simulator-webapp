import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Popup, Polyline, Marker, SVGOverlay, CircleMarker, Tooltip } from 'react-leaflet'
import '../../assets/styles/custom.css';
import axios from 'axios';
import { red } from '@material-ui/core/colors';

export default function DarkMap() {
  const [hashtag, setHashtag] = useState([])

  const tileUrl = process.env.REACT_APP_TILEURL_DARK_MODE

  useEffect(() => {
    topHashtags();
  })

  function topHashtags() {
    axios
      .get(
        process.env.REACT_APP_BASE_URL_TWITTER + process.env.REACT_APP_TRENDING_HASHTAG
      )
      .then((res) => {
        let mappingCoordinates = []
        if (
          !res &&
          !res.data &&
          !res.data.responseData &&
          res.data.responseData.length <= 0
        )
          mappingCoordinates = [];

        else mappingCoordinates = res.data.responseData
        setHashtag(mappingCoordinates);

        // console.log('locations---', res.data.responseData)
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <>
      <MapContainer className='darkmap-style' center={[30, 10]} zoom={1.5} scrollWheelZoom={true} zoomControl={false} maxZoom={16} minZoom={1}>
        <TileLayer noWrap={true}
          url={tileUrl}
        />
        {hashtag &&
          hashtag.length >= 1 &&
          hashtag.map((items, k) => {
            // let name = items.name
            return (
              <CircleMarker
                key={k}
                center={
                  [
                    items?.latitude || 0,
                    items?.longitude || 0,
                  ]
                }
                radius={0}
                fillOpacity={0.5}
                stroke={false}
              >
                <Tooltip opacity={0.5} permanent>
                  <span className="map-tip"> {items.name || 0} </span>
                </Tooltip>

              </CircleMarker>)
          })
        }
      </MapContainer>
    </>
  )
}
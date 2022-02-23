import React, { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Popup,
  Polyline,
  Marker,
  SVGOverlay,
  CircleMarker,
  Tooltip,
} from "react-leaflet";
import "../../assets/styles/custom.css";
import styled from "styled-components";
import Utils from "../../utility";
import { TweetService } from "../../services/index";

export default function App(props) {
  const [hashtag, setHashtag] = useState([]);

  const tileUrl = process.env.REACT_APP_TILEURL_LIGHT_MODE;

  useEffect(() => {
    trendingHash();
    setInterval(() => {
      trendingHash();
    }, 60000);
  }, []);

  const trendingHash = async () => {
    const [err, res] = await Utils.parseResponse(TweetService.getMapHashtags());
    if (err) {
      return err;
    } else {
      setHashtag(res || "");
    }
  };

  return (
    <>
      <MapContainer
        className="lightmap-style"
        center={[30, 10]}
        dragging={false}
        zoom={1.5}
        scrollWheelZoom={true}
        zoomControl={false}
        maxZoom={16}
        minZoom={1}
      >
        <TileLayer noWrap={true} url={tileUrl} />
        {hashtag &&
          hashtag.length >= 1 &&
          hashtag.map((items, k) => {
            // let name = items.name
            return (
              <CircleMarker
                key={k}
                center={[items?.latitude || 0, items?.longitude || 0]}
                radius={0}
                fillOpacity={0.5}
                stroke={false}
              >
                <Tooltip opacity={0.5} permanent>
                  <span className="map-tip"> {items.name || 0} </span>
                </Tooltip>
              </CircleMarker>
            );
          })}
      </MapContainer>
    </>
  );
}

import React, { useState, useEffect } from "react";
import ReactMapGL, { Source, Layer, NavigationControl } from "react-map-gl";

import mapboxgl from "mapbox-gl";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../css/SearchResult.css";

// 최적경로 노드 가져오기

/* eslint import/no-webpack-loader-syntax: off */
mapboxgl.workerClass =
  require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

// 최적경로
const SERVER_URL = `http://anam-earth-api.jseoplim.com/map/arcs/optimal-path`;

const SearchResult = () => {
  const { s_lat, s_lng, e_lat, e_lng } = useParams();
  const start_coordinate = [s_lng, s_lat];
  const end_coordinate = [e_lng, e_lat];

  // 최적경로
  const [TodoList, setTodoList] = useState(null);

  // 각 노드 표현
  const [Node, setNode] = useState(null);

  const [dist, setDist] = useState(null);

  // 최적경로
  const fetchData = async () => {
    const response = await axios.post(SERVER_URL, {
      start_coordinate,
      end_coordinate,
    });

    setDist(response.data.properties.distance);

    // geojson 형태 만들기

    setTodoList({
      type: "Feature",
      properties: {},
      ...response.data,
    });

    var temp = response;
    setNode({
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          ...temp.data,
        },
      ],
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  // 레이어 css스타일
  const layerStyle = {
    id: "LineString",
    type: "line",
    source: "route",
    layout: {
      "line-join": "round",
      "line-cap": "round",
    },
    paint: {
      "line-color": "#0073FF",
      "line-width": 5,
    },
  };
  // 추측컨데 layer의 type에 따라 어떤 형식으로 나올지 결정이 되는 것 같다. data의 type이랑 같지 않아도 됨.
  const layerStyle_point = {
    id: "MultiPoint",
    type: "circle",
    source: "point",
    paint: {
      "circle-color": "#FFFFFF",
      "circle-radius": 5,
      "circle-stroke-color": "#15FB09",
      "circle-stroke-width": 2,
    },
  };

  const MAP_TOKEN =
    "pk.eyJ1IjoieXl5eWhwIiwiYSI6ImNsNmJycG00MDFlMGQzY21kNml5ZzNjZHAifQ.D3Y8MmV8mgwBgfbPH2Suvg";

  const [viewport, setViewState] = useState({
    latitude: 37.58613,
    longitude: 127.0288,
    width: "80vw",
    height: "70vh",
    zoom: 17,
  });

  return (
    <div className="Mapbox">
      <ReactMapGL
        style={{ width: "80vw", height: "70vh" }}
        {...viewport}
        mapboxAccessToken={MAP_TOKEN}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onMove={(evt) => setViewState(evt.viewState)}
      >
        <div className="navi-control">
          <NavigationControl />
        </div>
        <div>
          <Source id="LineString" type="geojson" data={TodoList}>
            <Layer {...layerStyle} />
          </Source>
        </div>
        <div>
          <Source id="MultiPoint" type="geojson" data={Node}>
            <Layer {...layerStyle_point} />
          </Source>
        </div>
      </ReactMapGL>
      <div>
        <h2>목적지까지의 거리는 {dist}m 입니다.</h2>
      </div>
    </div>
  );
};
export default SearchResult;

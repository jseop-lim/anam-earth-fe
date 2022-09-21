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

// 최단경로
const SERVER_URL2 = "http://anam-earth-api.jseoplim.com/map/arcs/shortest-path";

const SearchResult2 = () => {
  const { s_lat, s_lng, e_lat, e_lng } = useParams();
  const start_coordinate = [s_lng, s_lat];
  const end_coordinate = [e_lng, e_lat];

  // 최단경로
  const [TodoList2, setTodoList2] = useState(null);

  const [Node2, setNode2] = useState(null);

  const [dist, setDist] = useState(null);

  // 최단경로
  const fetchData_2 = async () => {
    const response2 = await axios.post(SERVER_URL2, {
      start_coordinate,
      end_coordinate,
    });

    setDist(response2.data.properties.distance);

    setTodoList2({
      type: "Feature",
      properties: {},
      ...response2.data,
    });

    var temp = response2;
    setNode2({
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
    fetchData_2();
  }, []);

  // 최단경로 레이어 css
  const layerStyle2 = {
    id: "LineString2",
    type: "line",
    source: "route",
    layout: {
      "line-join": "round",
      "line-cap": "round",
    },
    paint: {
      "line-color": "#16B135",
      "line-width": 5,
    },
  };
  const layerStyle_point2 = {
    id: "MultiPoint2",
    type: "circle",
    source: "point",
    paint: {
      "circle-color": "#FFFFFF",
      "circle-radius": 5,
      "circle-stroke-color": "#B17116",
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
          <Source id="LineString2" type="geojson" data={TodoList2}>
            <Layer {...layerStyle2} />
          </Source>
        </div>
        <div>
          <Source id="MultiPoint2" type="geojson" data={Node2}>
            <Layer {...layerStyle_point2} />
          </Source>
        </div>
      </ReactMapGL>
      <div>
        <h2>목적지까지의 거리는 {dist}m 입니다.</h2>
      </div>
    </div>
  );
};
export default SearchResult2;

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

  // 최적경로
  const [TodoList, setTodoList] = useState(null);

  // 최단경로
  const [TodoList2, setTodoList2] = useState(null);

  // 각 노드 표현
  const [Node, setNode] = useState(null);

  const [Node2, setNode2] = useState(null);

  // 최단경로
  const fetchData_2 = async () => {
    const response2 = await axios.post(SERVER_URL2, {
      start_coordinate,
      end_coordinate,
    });

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
      "line-color": "#D6FF33",
      "line-width": 4,
    },
  };
  const layerStyle_point2 = {
    id: "MultiPoint2",
    type: "circle",
    source: "point",
    paint: {
      "circle-color": "#FFFFFF",
      "circle-radius": 3,
      "circle-stroke-color": "#FF4833",
      "circle-stroke-width": 1,
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
    </div>
  );
};
export default SearchResult2;
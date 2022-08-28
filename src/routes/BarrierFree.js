import React, { useState, useEffect } from "react";
import ReactMapGL, { Source, Layer, NavigationControl } from "react-map-gl";
import axios from "axios";
import "../css/BarrierFree.css";
const SERVER_URL = "http://anam-earth-api.jseoplim.com/map/arcs";

const BarrierFree = () => {
  // 노드 저장
  const [Node, setNode] = useState(null);

  const fetchData = async () => {
    const response = await axios.get(
      "http://anam-earth-api.jseoplim.com/map/nodes"
    );
    setNode(response.data);
  };
  // level1 수준 노드 저장
  const [TodoList1, setTodoList1] = useState(null);

  // level1 수준 노드 json형태로 저장.
  const fetchData1 = async () => {
    const response = await axios.get(SERVER_URL + "?level=1");
    setTodoList1(response.data);
  };

  // level1 수준 노드 저장
  const [TodoList2, setTodoList2] = useState(null);

  // level1 수준 노드 json형태로 저장.
  const fetchData2 = async () => {
    const response = await axios.get(SERVER_URL + "?level=2");
    setTodoList2(response.data);
  };

  // level1 수준 노드 저장
  const [TodoList3, setTodoList3] = useState(null);

  // level1 수준 노드 json형태로 저장.
  const fetchData3 = async () => {
    const response = await axios.get(SERVER_URL + "?level=3");
    setTodoList3(response.data);
  };
  useEffect(() => {
    fetchData();
    fetchData1();
    fetchData2();
    fetchData3();
  }, []);

  // 레이어 css스타일

  const NodeStyle = {
    id: "point",
    type: "circle",
    source: "point",
    paint: {
      "circle-color": "#FFFFFF",
      "circle-radius": 5,
      "circle-stroke-color": "#B2B2B9",
      "circle-stroke-width": 2,
    },
  };

  const layerStyle1 = {
    id: "multiple-lines-source1",
    type: "line",
    source: "route",
    layout: {
      "line-join": "round",
      "line-cap": "round",
    },
    paint: {
      "line-color": "#39EB06",
      "line-width": 6,
    },
  };

  const layerStyle2 = {
    id: "multiple-lines-source2",
    type: "line",
    source: "route",
    layout: {
      "line-join": "round",
      "line-cap": "round",
    },
    paint: {
      "line-color": "#F8E436",
      "line-width": 6,
    },
  };

  const layerStyle3 = {
    id: "multiple-lines-source3",
    type: "line",
    source: "route",
    layout: {
      "line-join": "round",
      "line-cap": "round",
    },
    paint: {
      "line-color": "#EF3016",
      "line-width": 6,
    },
  };
  const [viewport, setViewState] = useState({
    latitude: 37.58613,
    longitude: 127.0288,
    width: "80vw",
    height: "70vh",
    zoom: 15,
  });

  const MAP_TOKEN =
    "pk.eyJ1IjoieXl5eWhwIiwiYSI6ImNsNmJycG00MDFlMGQzY21kNml5ZzNjZHAifQ.D3Y8MmV8mgwBgfbPH2Suvg";

  return (
    <div className="Mapbox">
      <ReactMapGL
        style={{ width: "100vw", height: "70vh" }}
        {...viewport}
        mapboxAccessToken={MAP_TOKEN}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onMove={(evt) => setViewState(evt.viewState)}
      >
        <div className="navi-control">
          <NavigationControl />
        </div>
        <div>
          <Source id="multiple-lines-source1" type="geojson" data={TodoList1}>
            <Layer {...layerStyle1} />
          </Source>
        </div>
        <div>
          <Source id="multiple-lines-source2" type="geojson" data={TodoList2}>
            <Layer {...layerStyle2} />
          </Source>
        </div>
        <div>
          <Source id="multiple-lines-source3" type="geojson" data={TodoList3}>
            <Layer {...layerStyle3} />
          </Source>
        </div>
        <div>
          <Source id="Point" type="geojson" data={Node}>
            <Layer {...NodeStyle} />
          </Source>
        </div>
      </ReactMapGL>
    </div>
  );
};
export default BarrierFree;

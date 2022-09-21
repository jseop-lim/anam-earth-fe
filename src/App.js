import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "antd/dist/antd.css";

import BarrierFree from "./routes/BarrierFree";
<<<<<<< HEAD

import CustomLayout from "./containers/Layout";
import BoardPage from "./components/BoardPage";
import SearchResult from "./routes/SearchResult";
import SearchResult2 from "./routes/SearchResult2";

=======

import CustomLayout from "./containers/Layout";
import BoardPage from "./components/BoardPage";
import SearchResult from "./routes/SearchResult";
>>>>>>> 3e68203b59575282f415f06d5ba6b4dfd64cb5da

// 게시판 components
import TextEditer from "./routes/TextEditer";
import Home from "./routes/Home";
import ViewDetail from "./routes/ViewDetail";

// 카카오 지도
import Map from "./routes/PathSearch";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/Barrier_free"
          element={
            <CustomLayout>
              <BarrierFree />
            </CustomLayout>
          }
        />
        <Route
          exact
          path="/"
          element={
            <CustomLayout>
              <BoardPage />
            </CustomLayout>
          }
        />
        <Route
          exact
          path="anam/:s_lat/:s_lng/:e_lat/:e_lng"
          element={
            <CustomLayout>
              <SearchResult />
            </CustomLayout>
          }
        />
<<<<<<< HEAD

        <Route
          exact
          path="anam2/:s_lat/:s_lng/:e_lat/:e_lng"
          element={
            <CustomLayout>
              <SearchResult2 />
            </CustomLayout>
          }
        />

=======
>>>>>>> 3e68203b59575282f415f06d5ba6b4dfd64cb5da
        <Route
          exact
          path="kakaomap"
          element={
            <CustomLayout>
              <Map />
            </CustomLayout>
          }
        />
        <Route
          path="editing"
          element={
            <CustomLayout>
              <TextEditer />
            </CustomLayout>
          }
        />
        <Route
          path="view"
          element={
            <CustomLayout>
              <Home />
            </CustomLayout>
          }
        />
        <Route
          path="view/:id"
          element={
            <CustomLayout>
              <ViewDetail />
            </CustomLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'antd/dist/antd.css';
import 'mapbox-gl/dist/mapbox-gl.css';

import Barrier_free from './routes/Barrier_free';

import CustomLayout from './containers/Layout';
import BoardPage from './components/BoardPage';
import Search_result from './routes/Search_result';

// 게시판 components
import TextEditer from './routes/TextEditer';
import Home from './routes/Home';
import ViewDetail from './routes/ViewDetail';

// 카카오 지도
import Map from './routes/PathSearch';

function App() {
    return (
        <Router>
            <Routes>
                <Route
                    exact
                    path="/Barrier_free"
                    element={
                        <CustomLayout>
                            <Barrier_free />
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
                            <Search_result />
                        </CustomLayout>
                    }
                />
                <Route
                    exact
                    path="kakaomap"
                    element={
                        <CustomLayout>
                            <Map />
                        </CustomLayout>
                    }
                />
                <Route path="editing" element={<TextEditer />} />
                <Route path="view" element={<Home />} />
                <Route path="view/:id" element={<ViewDetail />} />
            </Routes>
        </Router>
    );
}

export default App;

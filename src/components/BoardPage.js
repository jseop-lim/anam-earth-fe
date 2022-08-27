import React from 'react';
import { Link } from 'react-router-dom';

function BoardPage() {
    return (
        <div>
            <div>
                <h1>Front Pratice</h1>
            </div>
            <div id="notice_board" style={{ width: '100px', height: '100px' }}>
                <Link to="/view">
                    <button>notice board!</button>
                </Link>
            </div>
            <span>
                <Link to="/Barrier_free">
                    <button>Barrier_free_level</button>
                </Link>
            </span>
            <div id="kakaomap" style={{ width: '100px', height: '100px' }}>
                <Link to="/kakaomap">
                    <button>kakaomap</button>
                </Link>
            </div>
        </div>
    );
}
export default BoardPage;

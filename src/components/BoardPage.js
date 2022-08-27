import React from 'react';
import { Link } from 'react-router-dom';
import '../css/boardpage_button.css'; 

function BoardPage() {
    return (
        <div>
            <div style={{'font-weight': 900}}>
                <h1 style={{'font-weight': 'bold', 'font-size': '21px'}}>기능 살펴보기</h1>
            </div>
            <div>
                <Link to="/Barrier_free">
                    <button className="button2" style={{'margin-right': '50px'}}>
                    <h2 style={{'font-weight': 'bold', 'font-size': '21px','position': 'relative', 'top': '25px'}}>베리어프리 지도</h2>
                    <p style={{'font-size': '12px' , 'position': 'relative', 'top': '40px'}}>경사도, 도로포장도 등을 고려한 안암 내 베리어프리 지도을 확인할 수 있는 페이지입니다</p> 
                    </button>
                </Link>
            </div>
            <div >
                <Link to="/kakaomap">
                    <button className="button3" style={{'margin-right': '50px'}}>
                    <h2 style={{'font-weight': 'bold', 'font-size': '21px', 'position': 'relative', 'top': '25px'}}>베리어프리 경로찾기</h2>
                    <p style={{'font-size': '12px' , 'position': 'relative', 'top': '40px'}}>베리어프리 지도를 중심으로 목적지에 도착할 수 있는 최단경로를 확인할 수 있는 페이지입니다</p>
                    </button>
                </Link>
            </div>
            <div>
                <Link to="/view">
                    <button className="button1" style={{'margin-right': '50px'}}>
                    <h2 style={{'font-weight': 'bold', 'font-size': '21px', 'position': 'relative', 'top': '16px' }}>게시판</h2>
                    <p style={{'font-size': '12px' , 'position': 'relative', 'top': '33px'}}>앱에 대한 건의사항 및 불편사항을 공유할 수 있는 페이지입니다</p> 
                    </button>
                </Link>
            </div>  
        </div>
    );
}
export default BoardPage;

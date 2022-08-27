/*global kakao */
import React, { useEffect, useState } from 'react';

export default function Map() {
    const [position, setPosition] = useState([
        { title: '출발지', lat: 0, lng: 0 },
        { title: '도착지', lat: 0, lng: 0 },
    ]);
    const [startcheck, setStartcheck] = useState(false);
    const [endcheck, setEndcheck] = useState(false);

    useEffect(() => {
        mapscript();
    }, [startcheck, endcheck, position]);

    const mapscript = () => {
        let container = document.getElementById('map');
        let options = {
            center: new kakao.maps.LatLng(37.58613, 127.0288),
            level: 2,
        };
        //map
        const map = new kakao.maps.Map(container, options);

        // 현 위치 표시 << 현재 내 위치와 오차발생... 사용 X
        /*
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (p) {
                const lat = p.coords.latitude;
                const lng = p.coords.longitude;
                new kakao.maps.Marker({
                    map: map,
                    position: new kakao.maps.LatLng(lat, lng),
                });
            });
        }
        */

        // 출발지 위경도 저장
        if (startcheck) {
            kakao.maps.event.addListener(map, 'click', function (mouseEvent) {
                const temp_position = [
                    {
                        title: '출발지',
                        lat: mouseEvent.latLng.getLat(),
                        lng: mouseEvent.latLng.getLng(),
                    },
                    { ...position[1] },
                ];
                setPosition(temp_position);
                //  setStartcheck(false);
            });
        }

        // 도착지 위경도 저장
        if (endcheck) {
            kakao.maps.event.addListener(map, 'click', function (mouseEvent) {
                const temp_position = [
                    { ...position[0] },
                    {
                        title: '도착지',
                        lat: mouseEvent.latLng.getLat(),
                        lng: mouseEvent.latLng.getLng(),
                    },
                ];
                setPosition(temp_position);
                // setEndcheck(false);
            });
        }
        //  출발지와 도착지 지도에 띄우기
        position.forEach(el => {
            if (el.lat) {
                new kakao.maps.Marker({
                    map: map,
                    position: new kakao.maps.LatLng(el.lat, el.lng),
                    title: el.title,
                });
            }
        });
    };

    function start() {
        alert('지도상에서 출발지를 선택하세요.');
        setStartcheck(true);
        setEndcheck(false);
    }

    function end() {
        alert('지도상에서 도착지를 선택하세요.');
        setEndcheck(true);
        setStartcheck(false);
    }

    function clear() {
        const temp_position = [
            { title: '출발지', lat: 0, lng: 0 },
            {
                title: '도착지',
                lat: 0,
                lng: 0,
            },
        ];
        setPosition(temp_position);
        setStartcheck(false);
        setEndcheck(false);
        alert('출발지와 도착지를 다시 선택하세요.');
    }

    function submit() {
        if (position[0].lat && position[1].lat) {
            alert('최적경로를 탐색합니다.');
            // 로컬변수 외부 js파일에서 쓰는 방법
            window.location.href = `/anam/${position[0].lat}/${position[0].lng}/${position[1].lat}/${position[1].lng}`;
        } else {
            alert('출발지와 도착지를 선택한 후 눌러주세요.');
        }
    }

    return (
        <div>
            <div id="map" style={{ width: '90vw', height: '70vh' }}></div>
            <button className="submit-button" onClick={start}>
                출발지
            </button>
            <button className="submit-button" onClick={end}>
                도착지
            </button>
            <button className="submit-button" onClick={clear}>
                초기화
            </button>
            <button className="submit-button" onClick={submit}>
                최적경로 찾기!
            </button>
        </div>
    );
}

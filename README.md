# 안암어스 프론트엔드
2022 KU 스마트 캠퍼스 데이터톤 5조 안암어스 프론트엔드 저장소

안암 지역 배리어프리 수준 시각화 및 경로 추천 사이트의 웹 개발

## 주요 기능
- 경사로, 도로포장도, 계단 여부 등 사회적 약자 이동권과 관련된 요소를 고려하여 안암동 내 다양한 경로에 따른 배리어프리 수준을 확인할 수 있는 **배리어프리 지도**를 제공
- 나아가 이러한 배리어프리 수준을 고려하여 최적 경로를 추천하는 **배리어프리 경로 찾기** 기능을 제공
- 마지막으로 웹사이트 사용자들의 건의사항을 수렴할 수 있는 **게시판**도 제공

배포된 서비스는 [링크](http://anam-earth.jseoplim.com)로 접속 가능하다.

## 설치 및 실행
git, docker, docker compose가 설치된 Linux 환경을 전제한다.

```shell
# GitHub에서 리엑트 프로젝트 파일 내려받기
git clone
cd anam-earth-fe
# Docker 컨테이너 빌드 및 실행
docker compose -f docker-compose.dev.yml up -d
# 리액트 컨테이너에서 bash shell 실행
docker exec -it anam-earth-fe-dev bash
# 리액트 컨테이너 로그 확인
docker logs -f anam-earth-fe-dev
```

## 상세 설명

<h3>홈 화면</h3>

![화면 캡처 2022-08-28 113816](https://user-images.githubusercontent.com/95220313/187055051-270d811a-3e4d-4fc2-bdca-7988fc1a80ed.jpg)
- 위 화면이 개발한 웹사이트의 홈 화면이다. 여기서 버튼을 각각 누르면 대응하는 페이지로 이동할 수 있다. 


<br><h3>베리어프리 지도</h3>

![배리어프리 지도](https://user-images.githubusercontent.com/88183316/187078733-7a2fca40-6f7a-403d-bba3-3dd42a07dd94.png)

- 홈 화면에서 배리어프리 지도 버튼을 클릭하면 위 지도를 볼 수 있다. 지도에서는 사전에 3가지 level(상, 중, 하)로 분류한 안암동 내 여러 경로에 대한 배리어프리 수준을 확인할 수 있다.
- Green: '상'   Orange: '중'  Red: '하' 

<br><h3>베리어프리 경로찾기</h3>

![화면 캡처 2022-08-28 115322](https://user-images.githubusercontent.com/95220313/187055386-a037d3dc-283b-48f5-9e77-2dc2e31f7740.jpg)
- 홈 화면에서 배리어프리 경로 찾기 버튼을 클릭하면 위 화면을 볼 수 있다. 출발지, 도착지 버튼을 눌러서 지도상에서 가고자하는 지점을 직접 클릭하여 지정할 수 있고, 초기화 버튼을 통해 재지정이 가능하다. 

![경로 찾기](https://user-images.githubusercontent.com/95220313/187055650-4dd929e8-ebb3-4a10-b7a2-b79330e759c5.jpg)
- 출발지와 도착지를 클릭하면 위 화면처럼 Marker가 각각 생기는 것을 확인할 수 있고, 최적경로 찾기 버튼을 누르면 배리어프리 수준을 고려한 최단경로가 계산된다. 

![경로 찾기 2](https://user-images.githubusercontent.com/95220313/187055624-a2abbc8b-dc37-426f-b517-b1a498f821a3.jpg)
- 계산된 최적경로는 다음과 같이 제공된다.

<br><h3>게시판</h3>
![게시판](https://user-images.githubusercontent.com/88183316/187078151-f28daabd-64ec-4423-94f2-e0d2463b6d41.png)
- 홈 화면에서 게시판 버튼을 클릭하면 다음과 같은 페이지로 이동하고, 게시판에 올라온 모든 글의 제목, 작성자 등을 확인할 수 있다.
- 각 글의 제목을 연결하면 글의 내용을 확인할 수 있는 상세페이지로 이동한다.
- 새글 쓰기 버튼을 클릭하면 글을 직접 포스팅할 수 있다. 
 
![게시판 글쓰기](https://user-images.githubusercontent.com/88183316/187078185-d9968c55-4a23-40d0-896f-f84b1ae64929.png)
- 위 화면은 새글 쓰기를 클릭했을때 이동하는 페이지이다. 작성완료 버튼을 누르면 글이 업로드된다.

![댓글](https://user-images.githubusercontent.com/88183316/187078332-6ad107c1-5091-4718-af0f-87d8a7db8a62.png)
- 위 화면은 각 글의 상세페이지로 글 내용 확인은 물론, 댓글도 직접 쓸 수 있다. 



## 설치 및 실행


## 디렉토리 구조

![프론트 디렉토리](https://user-images.githubusercontent.com/88183316/187078647-5ec7e36e-f0ca-46da-97db-906a23b660ef.png)


## 기술스택
<img src="https://img.shields.io/badge/react-61DAFB?style=flat-square&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/css-1572B6?style=flat-square&logo=css3&logoColor=white">
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=flat-square&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/mapbox-000000?style=flat-square&logo=mapbox&logoColor=white">
<img src="https://img.shields.io/badge/Django-092E20?style=flat-square&logo=django&logoColor=white">
<img src="https://img.shields.io/badge/mysql-4479A1?style=flat-square&logo=mysql&logoColor=white">
<img src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=Docker&logoColor=black">





## 기여자 및 역할

* [김경호](): 데이터 수집 및 가공, 팀장
* [김제성](): 데이터 수집 및 가공
* [윤화평](): 프론트엔드, 데이터 수집, 지도 API 연동 및 개발
* [임정섭](https://github.com/jseop-lim): 백엔드, 데이터 수집, DB 설계, 서버 배포 및 관리
* [최대원](https://github.com/ChoiDae1): 프론트엔드, 데이터 수집, 게시판 API 연동 및 개발

# 프로젝트명 : 행복 야구
> 야구 스포츠 서비스 (아웃소싱 프로젝트)
> 
> 개발 기간 : 2024.06.17~2024.06.21

<br />

## 프로젝트 소개
행복 야구는 "행복한 야구 팬은 없다"의 줄임말로 야구 경기 영상과 구단/선수의 정보 등을 한곳에서 볼 수 있는 스포츠 서비스 입니다. 유투브 API를 이용해 야구 관련 영상과 정보들을 한 곳에 모아 야구 관련 소식과 영상을 한 번에 볼 수 있는 새로운 커뮤니티 공간을 만들고자 했습니다.

[(배포 사이트 방문하기)](https://outsourcing-project-two.vercel.app/)

![alt text](/public/mainPage.png)

<br />

## 설치
```bash
$ git clone https://github.com/yeliinbb/outsourcing-project.git
$ cd outsourcing-project

#development
$ yarn install
$ yarn dev
```

<br />

## 문서
- [기획서](https://www.figma.com/design/oMrAgYpb4yCJlwru1dAko5/%EC%99%80%EC%9D%B4%EC%96%B4%ED%94%84%EB%A0%88%EC%9E%84?node-id=0-1&t=WNwn5juUU1Hh3H7H-1)
- [팀노션 : 삼색조](https://www.notion.so/teamsparta/A03-549e53656c164794a6bd38519d101265)

| 이름                                        | 블로그                            | 역할                                                        |
| ------------------------------------------- | --------------------------------- | ----------------------------------------------------------- |
| [김선민(리더)](https://github.com/FEsunmin) | https://velog.io/@fe_sunmin/posts | 메인페이지, 사이드바                                        |
| [복예린](https://github.com/yeliinbb)       | https://velog.io/@liin/posts      | 날씨 API, 댓글 작성                                         |
| [이효현](https://github.com/reeny404)       | https://leenayoung240.github.io/  | 검색 페이지, github 로그인                                  |
| [김효진](https://github.com/hyowls)         | https://reeny404.tistory.com/     | 경기 일정 /팀 순위표 /경기 기록 크롤링                      |
| [양동규](https://github.com/dongkyusq)      | https://velog.io/@dongkyuuu       | 유튜브 API, 검색 기능, 페이지네이션 구현                    |
| [박수미](https://github.com/sumii-7)        | https://sumii-7.tistory.com/      | supabase 이용하여 팀 상세 페이지 작업 및 스켈레톤 작업 구현 |

<br />

## 기술 스택

### Environment
<img src="https://img.shields.io/badge/git-2C8EBB?style=for-the-badge&logo=git&logoColor=white"><img src="https://img.shields.io/badge/github-F05032?style=for-the-badge&logo=github&logoColor=white"><img src="https://img.shields.io/badge/visual%20studio%20code-007ACC?style=for-the-badge&logo=visual%20studio%20code&logoColor=white">

### Config
<img src="https://img.shields.io/badge/yarn-2C8EBB?style=for-the-badge&logo=vercel&logoColor=white">

### Development
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"><img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
<img src="https://img.shields.io/badge/react%20query-FF4154?style=for-the-badge&logo=vite&logoColor=white">
<img src="https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white">
<img src="https://img.shields.io/badge/zustand-CD2640?style=for-the-badge&logo=zustand3&logoColor=white">
<img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios3&logoColor=white">
<img src="https://img.shields.io/badge/react%20router-CA4245?style=for-the-badge&logo=react%20router&logoColor=white">
<img src="https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white">

### DataBase
<img src="https://img.shields.io/badge/supabase-3FCF8E?style=for-the-badge&logo=supabase&logoColor=white">

### Deploy
<img src="https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=vercel&logoColor=white">

<br />

## 구현 기능
<details>
<summary>🚩 필수 구현</summary>
<div markdown="1">
- 외부 API를 활용하기 <br />
- Tanstack Query를 사용하여 전역 상태관리 <br />
- Supabase DB 활용
</div>
</details>

<details>
<summary>⚾ 추가 구현</summary>
- pagination 기능 <br />
- 구단 응원글 작성 기능 <br />
- github 로그인 기능
</details>

<br />

## 폴더 구조
```
└── src
    ├── api
    ├── assets
    │   ├── icons
    │   ├── images
    │   └── logo
    ├── components
    │   └── MainPageComponent
    ├── layouts
    │   ├── common
    │   └── layout
    ├── pages
    │   ├── DetailPage
    │   ├── MainPage
    │   └── SearchResultPage
    ├── shared
    └── supabase
```
<br />

## 외부 시스템
- [youtube API](https://www.googleapis.com/youtube/v3)
- [weather API](https://api.openweathermap.org/data/2.5/)
- [야구 경기 일정 API](https://mykbostats.com)

<br />

## 브랜치 규칙
- main, dev, feature 브랜치 사용.
- feature -> dev, dev -> main 시, merge 시 appoval 2명 필수
- feature 브랜치에서 기능 개발 완료시 dev 브랜치로 merge
- 프로젝트 완료시 dev -> main 브랜치로 merge

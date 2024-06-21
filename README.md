# 프로젝트명 : 행복 야구
![alt text](/public/mainPage.png)

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

## 기술 스택
- react
- vite
- tanstack query
- zustand
- axios
- react-router
- tailwindcss
- supabase

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

## 외부 시스템
- [youtube API](https://www.googleapis.com/youtube/v3)
- [weather API](https://api.openweathermap.org/data/2.5/)
- [야구 경기 일정 API](https://mykbostats.com)

## 브랜치 규칙
- main, dev, feature 브랜치 사용.
- feature -> dev, dev -> main 시, merge 시 appoval 2명 필수
- feature 브랜치에서 기능 개발 완료시 dev 브랜치로 merge
- 프로젝트 완료시 dev -> main 브랜치로 merge

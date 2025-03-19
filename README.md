# 🔎 Docs App: League of Legends 💎

## ℹ 프로젝트 소개

**Docs App: League of Legends**는 리그 오브 레전드(LoL) 챔피언 정보를 조회하고, 매주 무료로 플레이할 수 있는 챔피언 목록을 제공하는 웹 애플리케이션입니다.

## ⚙️ 주요 기능

- **챔피언 정보 조회:** 챔피언별 능력치, 스킬, 스킨 정보 제공
- **주간 무료 챔피언 목록 확인:** Riot Games API를 활용하여 최신 무료 챔피언 목록 제공
- **검색 및 필터링 기능:** 챔피언을 이름, 역할별로 검색 및 필터링 가능
- **반응형 UI 지원:** 다양한 화면 크기에서 최적화된 UI 제공
- **다크 모드 제공:** 시스템 설정에 따라 자동 적용


## 🖼️ 미리보기

<div align="center">
<img src="https://github.com/user-attachments/assets/b17c3d60-b760-4d98-a14e-cf0c7dfb8b54" alt="preview" style="width: 750px"/>
</div>


## 🛠 **기술 스택**

<div align="center">

### 🗳️ **프로그래밍 언어 및 프레임워크**

![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=next.js&logoColor=white)

### 🎨 **UI 프레임워크 및 스타일링**

![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Lucide Icons](https://img.shields.io/badge/Lucide-4A90E2?style=flat-square&logo=lucide&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn/ui-18181B?style=flat-square&logo=shadcn/ui&logoColor=white)
![next-themes](https://img.shields.io/badge/NextThemes-000000?style=flat-square&logo=next.js&logoColor=white)

### ✅ **코드 품질 및 포맷팅**

![Prettier Plugin Tailwind CSS](https://img.shields.io/badge/PrettierTailwind-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=flat-square&logo=prettier&logoColor=white)
![PostCSS](https://img.shields.io/badge/PostCSS-DD3A0A?style=flat-square&logo=postcss&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=eslint&logoColor=white)

### 🗃️ **버전 관리**

![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)

</div>


## 📌 프로젝트 구조
```
📦src
┣ 📂app
┃ ┣ 📂api
┃ ┃ ┣ 📂rotation
┃ ┃ ┃ ┗ 📜route.ts // 챔피언 로테이션 Route Handler
┃ ┃ ┗ 📜fetchData.ts // API 요청 함수
┃ ┣ 📂champions
┃ ┃ ┣ 📂[id]
┃ ┃ ┃ ┗ 📜page.tsx // 챔피언 상세 정보 페이지
┃ ┃ ┗ 📜page.tsx // 챔피언 목록 페이지
┃ ┣ 📂items
┃ ┃ ┣ 📂[id]
┃ ┃ ┃ ┗ 📜page.tsx // 아이템 상세 정보 페이지
┃ ┃ ┗ 📜page.tsx // 아이템 목록 페이지
┃ ┣ 📂rotation
┃ ┃ ┗ 📜page.tsx // 챔피언 로테이션 페이지
┃ ┣ 📜error.tsx
┃ ┣ 📜favicon.ico
┃ ┣ 📜global-error.tsx // 전역 에러 UI
┃ ┣ 📜globals.css
┃ ┣ 📜layout.tsx // 공통 레이아웃 컴포넌트
┃ ┣ 📜loading.tsx // 전역 로딩 UI
┃ ┗ 📜page.tsx
┣ 📂components
┃ ┣ 📂ui
┃ ┃ ┗ 📜button.tsx
┃ ┣ 📜Card.tsx // 챔피언 카드 UI
┃ ┣ 📜DarkMode.tsx // 다크 모드 토글 버튼
┃ ┣ 📜Header.tsx // 헤더 내비게이션 바
┃ ┗ 📜theme-provider.tsx // 다크 모드 관리
┗ 📂types // 타입 정의
┃ ┣ 📜Champion.ts
┃ ┣ 📜ChampionRotation.ts
┃ ┣ 📜Common.ts
┃ ┗ 📜Item.ts
```

## 💥 Trouble-Shooting
| ![imageHostname](https://github.com/user-attachments/assets/fc045d3d-df0f-4651-9584-d91682772fec) <br> **[Next.js] hostname is not configured under images in your `next.config.js`** <br> [🔗 링크](https://velog.io/@ye21iin/Next.js-hostname-is-not-configured-under-images-in-your-next.config.js) | ![topLevelAwait](https://github.com/user-attachments/assets/93aaf199-e0d1-4381-ba64-a2d1a46ae7a3) <br> **[Next.js] CSR 페이지에서 topLevelAwait 사용 Warning 해결하기** <br> [🔗 링크](https://velog.io/@ye21iin/Next.js-CSR-%ED%8E%98%EC%9D%B4%EC%A7%80%EC%97%90%EC%84%9C-topLevelAwait-%EC%82%AC%EC%9A%A9-Warning-%ED%95%B4%EA%B2%B0%ED%95%98%EA%B8%B0) |
|---------------------------------------------------------|--------------------------------------------------------|
| ![darkmode](https://github.com/user-attachments/assets/77362a01-3692-494d-9ee7-429dd1102bca) <br> **[Next.js/shadcn] 다크모드 적용 시 Warning: Extra attributes from the server** <br> [🔗 링크](https://velog.io/@ye21iin/Next.jsshadcn-%EB%8B%A4%ED%81%AC%EB%AA%A8%EB%93%9C-%EC%A0%81%EC%9A%A9-%EC%8B%9C-Warning-Extra-attributes-from-the-server) | ![loadingUI](https://github.com/user-attachments/assets/b4d0a318-5230-4df7-ba13-566af4988edb) <br> **[Next.js] 기본 Loading UI 세팅하기** <br> [🔗 링크](https://velog.io/@ye21iin/Next.js-Loading-UI-%EC%84%B8%ED%8C%85%ED%95%98%EA%B8%B0) |




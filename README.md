# 🔎 Docs App: League of Legends 💎

## ℹ 프로젝트 소개

**Docs App: League of Legends**는 리그 오브 레전드(LoL) 챔피언 정보를 조회하고, 매주 무료로 플레이할 수 있는 챔피언 목록을 제공하는 웹 애플리케이션입니다.

## ⚙️ 주요 기능

- **챔피언 정보 조회:** 챔피언별 능력치, 스킬, 스킨 정보 제공
- **주간 무료 챔피언 목록 확인:** Riot Games API를 활용하여 최신 무료 챔피언 목록 제공
- **검색 및 필터링 기능:** 챔피언을 이름, 역할별로 검색 및 필터링 가능
- **반응형 UI 지원:** 다양한 화면 크기에서 최적화된 UI 제공
- **다크 모드 제공:** 시스템 설정에 따라 자동 적용

## 📌 프로젝트 구조

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

## 🛠 **기술 스택**

### 🗳️ **프로그래밍 언어 및 프레임워크**

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)

### 🎨 **UI 프레임워크 및 스타일링**

![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn/ui-18181B?style=flat-square&logo=shadcn&logoColor=white)
![Lucide Icons](https://img.shields.io/badge/Lucide-4A90E2?style=flat-square&logo=lucide&logoColor=white)
![next-themes](https://img.shields.io/badge/NextThemes-000000?style=flat-square&logo=next.js&logoColor=white)

### ✅ **코드 품질 및 포맷팅**

![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=flat-square&logo=prettier&logoColor=white)
![Prettier Plugin Tailwind CSS](https://img.shields.io/badge/PrettierTailwind-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![PostCSS](https://img.shields.io/badge/PostCSS-DD3A0A?style=flat-square&logo=postcss&logoColor=white)

### 🗃️ **버전 관리**

![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)

## 🖼️ 미리보기

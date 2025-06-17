## 시멘틱 태그란?

### 의미 전달

- 시멘틱 태그는 `div`, `span` 처럼 단순히 레이아웃을 위한 태그가 아님.
- `<header>`, `<nav>`, `<main>`, `<footer>`, `<article>`, `<section>` 등처럼 해당 부분이 어떤 역할을 하는지를 명확히 나타냄

### 접근성 향상

- 시멘틱 태그를 사용하면 스크린리더 등 보조기가 페이지 구조를 더 잘 이해함.
- 시각장애인 등도 웹사이트를 더 쉽게 이용할 수 있게됨

### SEO(Search Engine Optimization) 검색 엔진 최적화

- 검색 엔진은 시멘틱 태그를 통해 페이지의 중요한부분(예: 내비게이션, 본문, 푸터 등)을 더 작 파악할 수 있음.
- SEO란 ?
  - 웹사이트의 정보를 수집하고, 분석해서, 사용자가 검색할 때 가장 적합한 결과를 보여주는 시스템
  - 대표적으로 구글, 네이버, 다음, 빙, 야후 등의 웹사이트를 찾아주는 모든 시스템을 의미.
  - 검색엔진에서 더 잘 노출되도록 시멘틱 태그를 사용

### 유지보수 및 협업 용이

- 시멘틱 태그를 사용하면 다른 개발자나 퍼블리셔가 코드를 읽고 구조를 빠르게 일해할 수 있어, 유지보수와 협업이 쉬워짐.

### 표준 준수

- W3C 등 웹 표준을 따르는 것이 권장되며, 시멘틱 태그 사용은 표준에 부합하는 코드 작성을 의미한다.

## 시멘틱 태그 종류

- `<header>` : 문서나 섹션의 머리말(헤더)
- `<nav>` : 내비게이션(메뉴 등)
- `<main>` : 문서의 주요 콘텐츠
- `<footer>` : 문서나 섹션의 바닥글(푸터)
- `<article>`
  - 독립적인 콘텐츠. 블로그 게시물, 뉴스 기사, 제품 리뷰 등 독립적으로 배포하거나 재사용할 수 있는 독립형 콘텐츠를 정의.
- `<section>` : 문서의 구획(섹션)
- `<aside>` : 본문과 간접적으로 관련된 내용 (사이드바 등)
- `<figure>` : 이미지, 도표 등과 그 설명을 묶을 때
- `<figcaption>` : `<figure>`의 설명 (캡션)
- `<mark>` : 하이라이트(강조)할 때
- `<time>` : 시간이나 날짜를 나타낼 때
- `<address>` : 연락처 정보 등 주소를 나타낼 때
- `<details>` : 추가 정보를 숨기거나 펼칠 수 있을 때
- `<summary>` : <details>의 요약(제목) 부분

![](https://seo.tbwakorea.com/wp-content/uploads/2023/09/%EC%8B%9C%EB%A7%A8%ED%8B%B1-%ED%83%9C%EA%B7%B8_html-1024x576.png)

---

# 반응형

## 반응형 설계의 기본 원칙

- Mobile First
  - 가장 작은화면(모바일) 부터 스타일을 작성하고, 점점 큰화면에 맞춰 스타일을 덮어씌움
- 공통 Breakpoint(브레이크포인트) 정의 :
  - 프로젝트 전체에서 사용할 해상도 기준을 변수로 통일 예 : $breakpoint-desktop 등
- 유틸리티/믹스인 활용:
  - 미디어 쿼리를 함수처럼 재사용
- rem, %, vw 등 상대단위 사용 :
  - px 고정값 대신 상대 단위를 써서 유연하게 만듬.

### 예시

![](https://velog.velcdn.com/images/looa0807/post/5ef1db4f-564e-49f2-9367-6d08c58ea515/image.png)

#### 전역 변수 설정

```scss
//_variables.scss
// 반응형 뷰포트 크기
$pc2000: 2000px;
$pc1560: 1560px;
$pc1420: 1420px;
$pc1280: 1280px;
$pc1200: 1200px;
$pc1024: 1024px;
$mobile767: 767px;
$mobile480: 480px;
```

#### 재사용함수 등록

```scss
//_mixin.scss
@mixin respond($size) {
  @media screen and (max-width: $size) {
    @content;
  }
}
```

#### 사용법

```tsx
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <>
      <div className={styles.menuName}>
        <h2 className={styles.menuText}>LOGO</h2>
        <img
          src={hamburgerIcon}
          alt="hamburgerIcon"
          className={styles.hamburgerIcon}
        />
      </div>
      <nav>
        <ul className={styles.menuContainer}>
          <li className={styles.menuItem}>
            <img src={dashboardIcon} alt="dashboardIcon" />
            <div className={styles.menuText}>대시보드</div>
          </li>
          <li className={styles.menuItem}>
            <img src={chatIcon} alt="chatIcon" />
            <div className={styles.menuText}>AI Q&A Chat</div>
          </li>
          <li className={styles.menuItem}>
            <img src={educationIcon} alt="educationIcon" />
            <div className={styles.menuText}>교육</div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
```

```scss
//Sidebar.module.scss
.menuContainer {
  @include flex-column;
  list-style: none;
  justify-content: start;
  padding: 0;
}

.menuItem {
  @include flex-row;
  padding: 1rem;
  background: $color-bg-white;
  gap: 1rem;
  cursor: pointer;
  &:hover {
    background: $color-bg-blue;
    transition: background 0.3s ease;
  }
}
.menuText {
  @include respond($mobile767) {
    display: none;
  }
}
```

![](https://velog.velcdn.com/images/looa0807/post/45f28cad-4449-4db1-9864-1e393e1d9ff5/image.png)

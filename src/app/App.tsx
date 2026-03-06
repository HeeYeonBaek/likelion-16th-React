
import Header from '../components/header/Header'
import Main from '../components/main/Main'
import Footer from '../components/footer/Footer'
// console.log(Button) // React 함수형 컴포넌트(Functional Component)

// console.log(styles) // CSS Modules 기술을 사용해 내보내진 JS 객체

/**
 * JSX (JavaScript eXtension: 자바스크립트 확장 (비표준: 브라우저 해석 못함: SyntaxError))
 * 빌드(컴파일 + 번들링) 도구에서만 JSX 사용 가능
 * Build Tools (Vite, Webpack, Turbopack, ....)
 * *.tsx (TypeScript + JSX) -> TSC -> *.js (React API: React.createElement(type, props, ...children))
 */

export default function App() {
  // 함수 안에 데이터 선언


  // return null /* 아무 것도 반환하지 않음 (화면에 아무 것도 그리지 않음) */

  // 함수가 JSX(React.ReactNode 타입) 반환
  // JSX (JavaScript 확장 구문: 마크업 (구조 설계 in JavaScript 파일))
  // JSX는 문(statement)이다? ❌ 값(expression, value)이다? ⭕️
  return (
    <>
    <Header/>
    <Main/>
    <Footer/>
    </>
  )
}
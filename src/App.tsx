import * as React from 'react'
import './App.css'

/**
 * JSX (JavaScript eXtension: 자바스크립트 확장 (비표준: 브라우저 해석 못함: SyntaxError))
 * 빌드(컴파일 + 번들링) 도구에서만 JSX 사용 가능
 */

export default function App() {

  // 함수 안에 데이터 선언
  const size = 120
  // return null /* 아무 것도 반환하지 않음 (화면에 아무 것도 그리지 않음) */

  // 함수가 JSX(React.ReactNode 타입) 반환
  // Build Tools (Vite, Webpack, Turbopack, ....)
  // *.tsx (TypeScript + JSX) -> TSC -> *.js (React API: React.createElement(type, props, ...children))

  // JSX (JavaScript 확장 구문: 마크업 (구조 설계 in JavaScript 파일))
  // JSX는 문(statement)이다? 값(expression, value)이다?
  
  
  return (
    <div>
      <header className="header">
        <h1>
          <dfn><abbr title="JavaScript eXtension">JSX</abbr></dfn> 기초 배우기
        </h1>
      </header>
      <main className='main'>
        {/* 1번째 섹션 */}
        <section>
          <h2>모든 JSX 태그는 닫혀야 한다.</h2>
          <p>
            <dfn>
              <abbr title="Hyper Text Markup Language">
                HTML
              </abbr>에서는 허용되었던 {'<img>'} 태그도 반드시 닫아야 합니다.
            </dfn>
          </p>
          <img src="/react.svg" alt="리엑트로고" width={size} height={size} />
        </section>

        {/* 2번째 섹션 */}
        <section>
          <h2>
            <abbr>HTML</abbr>이 아닙니다.
          </h2>
          <div className="field">
            <label htmlFor='userName'>이름</label>
            <input id='userName' type="text" className='input' placeholder='이름을 입력하세요.'/>
          </div>
        </section>

        {/* 3번째 섹션 */}
        <section>
          <h2>웹 표준과 접근성을 준수해야 합니다.</h2>
          {/* 클릭 이벤트 리스너 추가 : JSX onClick={함수} */}
          {/* ❌ BAD! 키보드 접근이 불가능 */}
          {/* <div onClick={()=>alert('hello')}>모든 사용자 고려</div>*/}
          {/* ✅ GOOD! 키보드 접근이 가능 */}
          <button type='button' onClick={()=> alert('모든 사용자가 행복해요')}>모든 사용자 고려</button>
        </section>
      </main>
      <footer className='footer'>
        <small>
          COPYRIGHT RESERVED. <abbr title='이듬(EUID)'>EUID</abbr>. "완벽보다 완주를!"
        </small>
      </footer>
  </div>
  )
}
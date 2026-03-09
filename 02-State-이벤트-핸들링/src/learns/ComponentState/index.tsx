import React from 'react'
import S from './style.module.css'

function Counter() {
  // 컴포넌트 내부에 일반 로컬(지역) 변수
  let localCount: number = 0 // 타입 추론(유추)

  console.log(localCount)

  // 컴포넌트 상태 관리
  // 컴포넌트 상태(기억된 값 관리) 추가
  const state = React.useState(0)
  console.log(state)

  return (
    <section className={S.container}>
      <h2 className={S.title}>상태 관리 기초</h2>
      <div role="group" className={S.displayGroup}>
        {/* 일반 로컬 변수 영역 */}
        <div className={S.card}>
          <span className={S.label}>일반 로컬 변수</span>
          <strong className={S.value}>0</strong>
        </div>
        {/* State 변수 영역 */}
        <div className={`${S.card} ${S.highlight}`}>
          <span className={S.label}>리액트 상태 변수</span>
          <strong className={S.value}>0</strong>
        </div>
      </div>

      <div className={S.buttonGroup}>
        <button type="button" className={S.button}>
          일반 로컬 변수 증가
        </button>
        <button type="button" className={`${S.button} ${S.primary}`}>
          리액트 상태 변수 증가
        </button>
      </div>
    </section>
  )
}

export default Counter
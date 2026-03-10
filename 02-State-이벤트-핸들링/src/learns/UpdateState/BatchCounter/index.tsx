import { useState } from 'react'
import S from './style.module.css'

const INITIAL_COUNT = 0

export default function BatchCounter() {
  //  컴포넌트 카운트 상태 선언
  // 불변 값
  const [count, setCount] = useState(INITIAL_COUNT)

  // 초기화 이벤트 핸들러 작성
  const handleResetCount = () => setCount(INITIAL_COUNT)

  // 카운트 + 1 이벤트 핸들러 작성
  const handleIncreaseSingle = () => {
    const nextCount = count + 1
    setCount(nextCount)
  }

// 카운트 + 1 → 카운트 + 1 → 카운트 + 1 이벤트 핸들러 작성 (실습)
const handleIncreaseTripple = () => {
  // Batch '일괄적으로 한꺼번에' 업데이트
  // 조건: setCount 함수를 3번 사용

  console.log('count (0) =', count) // 0
  //  setCount(count + 1) // setSomething(nextState)
  
  setCount((prevCount) => prevCount + 1) // setSomething(updatorFunction)
  console.log('count (1) =', count) // 0
  setCount((prevCount) => prevCount + 1) // setSomething(updatorFunction)
  console.log('count (2) =', count) // 0
  setCount((prevCount) => prevCount + 1) // setSomething(updatorFunction)
  console.log('count (3) =', count) // 0
}

  return <article className={S.container}>
    <h3 className={S.display} aria-label='배치 카운터 현재 값: ${count}'>
      {count}
    </h3>

    <div className={S.actions}>
      <button type="button" className={S.button} onClick={handleResetCount}>
        초기화
      </button>
      <button type='button' className={`${S.button} ${S.primary}`} onClick={handleIncreaseSingle}>
        +1 증가 (Single)
      </button>
      <button type='button' className={`${S.button} ${S.primary}`} onClick={handleIncreaseTripple}>
        +3 증가 (Batching)
      </button>
    </div>

    <p>리엑트의 상태 업데이트는 큐(Queue)를 사용해 처리됩니다.</p>
  </article>
}

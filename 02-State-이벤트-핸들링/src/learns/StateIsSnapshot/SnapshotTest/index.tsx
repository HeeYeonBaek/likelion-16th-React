import { useState } from 'react'
import S from './style.module.css'

const INITIAL_COUNT = 9

export default function SnapshotTest() {

  // 상태는 [ 특정 렌더링 시점의 ] 스냅샷(Snapshot)이다. 
  // => 상태는 현재 렌더링 시점에서 바꿀 수 없다.
  // => 업데이트 된 상태는 다음 렌더링 시점에서 주어진다.
  
  // [개발자 시점] 상태 선언
  // [리엑트 관점]리엑트에 의해 의해 관리되는 상태의 스냅샷을 전달받았다.
  const [count, setCount] = useState(INITIAL_COUNT)

  // 상태 업데이트 로직을 포함하는 핸들러 작성
  
const handleIncreaseFive = () => {
    // 상태 업데이트 (리액트에게 요청)
    const nextCount = count + 5
    setCount(nextCount)

    // count 상태 로그
    console.log('현재 카운트 값', { count })
    console.log('다음 렌더링 시점의 카운트 값', { nextCount })

    // 비동기 알림 확인
    setTimeout(() => {
      console.log('3초 뒤 알림창에 뜬 카운트 값', count)
    }, 3000)
}
  

  const handleResetCount = () => {
    setCount(INITIAL_COUNT)
  }


  return <section className={S.container}>
    <h2 className={S.title}>현재 카운트 : {count}</h2>

    <div className={S.buttonGroup} role='group'>
      <button type="button" className={S.button} onClick={handleIncreaseFive}>
        +5 증가시키고 로그 / 알림 확인
      </button>
      <button type="button" className={`${S.button} ${S.reset}`} onClick={handleResetCount}>
        초기화
      </button>
    </div>
  </section>
}

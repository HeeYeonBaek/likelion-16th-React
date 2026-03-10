import BatchCounter from './BatchCounter'
import S from './style.module.css'

export default function UpdateState() {
  return <div className={S.container}>
    <BatchCounter />
  </div>
}

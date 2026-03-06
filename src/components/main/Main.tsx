import styles from './Main.module.css'
import Image from '../image/image'
import FormField from '../form-field/form-field'
import Button from '../button/Button'

export default function Main() {
  return (
          <main className={styles.main}>
        <section>
          <h2>모든 태그는 반드시 닫혀야 합니다.</h2>
          <Button />
          <p>
            <dfn>
              <abbr title="Hyper Text Markup Language">HTML</abbr>
              에서는 허용되었던 {'<img>'} 태그도 반드시 닫아야 합니다.
            </dfn>
            {/* image 위치 */}
            <Image />
          </p>
        </section>
        <section>
          <h2>
            <abbr>HTML</abbr>이 아닙니다.
          </h2>
          {/* FormField 컴포넌트 */}
         <FormField />
        </section>
        <section>
          <h2>웹 표준과 접근성을 준수해야 합니다.</h2>
          {/* 리액트 컴포넌트 (JSX 구문 : React.createElement(Button)) */}
          <Button />
        </section>
      </main>
  )
}
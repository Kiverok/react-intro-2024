import Button from "./Button/Button"
import { useState } from "react"
import { differences } from "../data"

export default function DifferencesSection() {
    const [ contentType, setContentType ] = useState(null)

  function handleClick(type) {
setContentType(type)
  }
    return (
        <section>
          <h3>Чим відрізняємся від інших</h3>
          <Button isActive={contentType === 'way'} onClick={() => handleClick('way')}>Підхід</Button>
          <Button isActive={contentType === 'easy'} onClick={() => handleClick('easy')}>Доступність</Button>
          <Button isActive={contentType === 'program'}onClick={() => handleClick('program')}>Концентрація</Button>
        {!contentType && <p>Нажми на кнопку</p>}
        {contentType && <p>{differences[contentType]}</p>}
        </section>
    )
}
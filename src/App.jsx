import Header from './components/Header'
import { ways, differences } from './data'
import WayToTeach from './components/WayToTeach'
import Button from './components/Button/Button'
import { useState } from 'react'


export default function App() {
const [ contentType, setContentType ] = useState(null)

  function handleClick(type) {
setContentType(type)
  }
  return (
    <div>
    <Header />
    <main>
      <section>
        <h3>Наш підхід до навчання</h3>

        <ul>
          {ways.map((way) => ( <WayToTeach {...way} />))}
          {/* <WayToTeach 
          title={ways[0].title}
          description={ways[0].description} />
          <WayToTeach {... ways[1]} />
          <WayToTeach {... ways[2]} />
          <WayToTeach {... ways[3]} /> */}
        </ul>
        <section>
          <h3>Чим відрізняємся від інших</h3>

          <Button isActive={contentType === 'way'} onClick={() => handleClick('way')}>Підхід</Button>
          <Button isActive={contentType === 'easy'} onClick={() => handleClick('easy')}>Доступність</Button>
          <Button isActive={contentType === 'program'}onClick={() => handleClick('program')}>Концентрація</Button>
        {!contentType && <p>Нажми на кнопку</p>}
        {contentType && <p>{differences[contentType]}</p>}
        </section>
      </section>
    </main>
    </div>
  )
}

 

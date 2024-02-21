import { useState } from 'react'
import logo from '/logo-name.svg'

export default function Header() {
    const [now, setNow] = useState(new Date())

    setInterval(() => setNow(new Date()), 1000)

    return (
  <header>
    <img src={logo} alt="" />
    {/* <h3>Result University</h3> */}
    <span>Час зараз: {now.toLocaleTimeString()} </span>
  </header>
    )
  }
import logo from '/logo-name.svg'

export default function Header() {
    const now = new Date() 

    return (
  <header>
    <img src={logo} alt="" />
    {/* <h3>Result University</h3> */}
    <span>Час зараз: {now.toLocaleTimeString()} </span>
  </header>
    )
  }
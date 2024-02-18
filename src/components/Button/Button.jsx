import './Button.css'

export default function Button({ children }) {
    function handleClick() {

    }
    return <button className='button' onAuxClick={handleClick}>{ children }</button>
}
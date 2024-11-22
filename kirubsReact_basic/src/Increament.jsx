import { useState } from "react"
function Increament(){

    const [count,setCount] = useState(0)
    const Increamentvalue = ()=>{
        setCount(count=>count + 1)
        setCount(count=>count + 1)
        setCount(count=>count + 1)
    }
    const Decreamentvalue = ()=>{
        setCount(count - 1)
    }
    const Resetvalue = ()=>{
        setCount(0)
    }
    return(<>
    <p>{count}</p>
    <button onClick={Increamentvalue}> Increament</button>
    <button onDoubleClick={Decreamentvalue}> Decreament</button>
    <button onClick={Resetvalue}>  Reset</button>
    </>)
}

export default Increament
import {  useRef, useState } from "react";


function Content() {
    
    let timerId = useRef()
    
    
    const [count , setCount] = useState(0)

    const handleStart = () => {
        timerId.current = setInterval(() => {
            setCount(prev => prev - 1)
        },1000)
    }

    const handleStop = () => {
        clearInterval(timerId.current)
    }

    return ( 
        <>
            <h1>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </>
     );
}

export default Content;
import {  useEffect, useRef, useState } from "react";


function Content() {
    
    const [count , setCount] = useState(60)

    const  timerId = useRef()
    const   prevCount = useRef()
    const h1Ref = useRef()
    
    useEffect(() => {
        prevCount.current = count
    },[count])

    useEffect(() => {
        console.log(h1Ref.current);
    })
    

    const handleStart = () => {
        timerId.current = setInterval(() => {
            setCount(prev => prev - 1)
        },1000)
    }

    const handleStop = () => {
        clearInterval(timerId.current)
    }

    console.log(count , prevCount.current);
    return ( 
        <>
            <h1 
                ref={h1Ref}
            >{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </>
     );
}

export default Content;
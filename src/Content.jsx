import {   useLayoutEffect, useState } from "react";



function Content() {
    
    const [count , setCount] = useState(0)

    useLayoutEffect(()=> {
        if(count > 3){
            setCount(0)
        }
    },[count])

    const handleRun = () => {
        setCount(prev => prev + 1)
    }

    return ( 


        <>
            <h1>{count}</h1>
            <button onClick={handleRun}>Run</button>
        </>
     );
}

export default Content;
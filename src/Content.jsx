import {  useEffect, useState } from "react";


function Content() {


    const [countdown,setCountdown] = useState(180)

    useEffect(() => {
        const timerId = setInterval(() => {
            setCountdown(pre => pre -1)
        },1000)


        return () => {
            clearInterval(timerId)
        }
    },[])

    return ( 
        <>
            <h1>{countdown}</h1>
        </>
     );
}

export default Content;
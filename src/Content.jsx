import {  useEffect, useState } from "react";

function Content() {

    const [title , setTitle] = useState('')
    console.log(title);

    useEffect(() => {
        document.title = title
    })

    return ( 
        <input type="text" 
            onChange={e => setTitle(e.target.value)}
            value={title}
        />
     );
}

export default Content;
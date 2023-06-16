import {  useEffect, useState } from "react";

function Content() {

    const [title , setTitle] = useState('')
    const [posts , setPosts] = useState([])
    console.log(posts);

    useEffect(() => {
       fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => {
           setPosts(posts)
        })
    },[])

    return ( 
        <>
            <input type="text" 
                onChange={e => setTitle(e.target.value)}
                value={title}
            />
            <ul>
                {
                   posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                   ))
                }
            </ul>
        </>
     );
}

export default Content;
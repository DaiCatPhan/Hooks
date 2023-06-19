import {  useEffect, useState } from "react";

const tabs = ['posts' , 'comments' , 'albums'];

function Content() {

    // const [title , setTitle] = useState('')
    const [posts , setPosts] = useState([])
    const [type , setType] = useState('posts')
    const [showTop , setShowTop] = useState(false)

    console.log(type);

    useEffect(() => {
       fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then(res => res.json())
        .then(posts => {
           setPosts(posts)
        })
    },[type])

    useEffect(() => {

        const handleScroll = () => {
            if(window.scrollY > 200) {
                setShowTop(true)
            }else{
                setShowTop(false)
            }

        }
        window.addEventListener('scroll' , handleScroll)


        return () => {
            window.removeEventListener('scroll' , handleScroll)
        }

    },[])

    return ( 
        <>
            <div>
                {
                    tabs.map(tab => (
                        <button 
                            key={tab} 
                            style={type === tab ? {
                                color: '#fff',
                                backgroundColor: '#333'
                            } : {}}
                            onClick={() => setType(tab)}
                        >
                            {tab}
                        </button>
                    ))
                }
            </div>

            {/* <input type="text" 
                onChange={e => setTitle(e.target.value)}
                value={title}
            /> */}
            <ul>
                {
                   posts.map(post => (
                    <li key={post.id}>{post.title || post.name  }</li>
                   ))
                }
            </ul>

            {
                showTop && (
                    <button
                        style={{
                            position: 'fixed',
                            right: 20,
                            bottom: 20,
                        }}
                    >
                        Top
                    </button>
                )
            }
        </>
     );
}

export default Content;
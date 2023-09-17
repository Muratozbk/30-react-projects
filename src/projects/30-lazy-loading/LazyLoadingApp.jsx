import { useState, useEffect } from 'react'
import LazyLoadPost from './LazyLoadPost';
import Title from "../components/Title"

export default function LazyLoadingApp() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos/").then(response => response.json())
            .then((json) => setPosts(json))
    }, [])
    return (
        <div className="container">
            <h1 className="text-center">Posts images</h1>
            <div className="container d-flex flex-column"
                style={{ gap: 30 }}>
                {posts.map(post => {
                    <LazyLoadPost key={post.id}
                        title={post.title} img={post.url} />
                })}
            </div>
        </div>
    )
}

// return (
//     <div className='container'>
//         <Title classes={"text-center mt-2"} text={"Posts Images"} />
//         <div className='container d-flex
//         flex-column' style={{ gap: 30 }}>
//             {post.map(post => (<LazyLoadPost key={post.id} title={post.title}
//                 img={post.url} />
//             ))}
//         </div>
//     </div>
// )
import { useState, useEffect } from 'react'
import LazyLoadPost from './LazyLoadPost';
import Title from "../components/Title"

export default function LazyLoadingApp() {

    const [post, setPost] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos/")
            .then((response) => response.json())
            .then((json) => setPost(json))
    })
    return (
        <div className='container'>
            <Title classes={"text-center mt-2"} text={"Posts Images"} />
            <div className='container d-flex 
            flex-column' style={{ gap: 30 }}>
                {post.map(post => (<LazyLoadPost key={post.id} title={post.title}
                    img={post.url} />
                ))}
            </div>
        </div>
    )
}

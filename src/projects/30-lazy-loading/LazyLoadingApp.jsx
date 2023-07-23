import { useState, useEffect } from 'react'

export default function LazyLoadingApp() {

    const [post, setPost] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typeicode.com/photos/")
            .then((response) => response.json())
            .then((json) => setPosts(json))
    })
    return (
        <div className='container'>
            <h1 className='text-center'>Post images</h1>
            <div className='container d-flex 
            flex-column' style={{ gap: 30 }}>
                {post.map(post => {
                    <LazyLoadPost key={post.id} title={post.title}
                        img={post.url} />
                })}
            </div>
        </div>
    )
}

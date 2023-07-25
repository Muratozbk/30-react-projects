import React from 'react'
import Title from "../components/Title"

import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"

export default function LazyLoadPost({ title, img }) {
    return (
        <div className='card mb-3'>

            <div className="card-header">
                {!title ? <Title classes={'subtitle'} text={"Post title"} /> :
                    <Title classes={"subtitle"} text={title} />}
            </div>

            <div className="card-body d-flex" style={{ gap: 10 }}>
                <LazyLoadImage src={img}
                    width={400}
                    height={"fit-content"}
                    effect='blur' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad debitis voluptatibus temporibus. Quidem, consequatur vitae?</p>
            </div>
        </div>
    )
}

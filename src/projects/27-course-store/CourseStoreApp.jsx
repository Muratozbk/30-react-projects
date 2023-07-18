import React from 'react'
import Button from '../components/Button'
import Courses from './components/Courses'

document.body.style.backgroundColor = "#282c34"
document.body.style.color = "#eee"
export default function CourseStoreApp() {
    return (
        <div className='container' style={{ padding: "1rem" }}>
            <h4 className="mb-2">Change currency:</h4>
            <Button btnClass={'btn-light'} />
            <header className="text-center mt-4 my-4">
                <h1 className="title">Course</h1>
                <h2 className="mb-2" style={{
                    textTransform: 'uppercase'
                }}>Become a web developer</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet illum earum deleniti?  illum earum deleni  illum earum deleni  illum earum deleni  illum earum deleni  illum earum deleni  illum earum deleni  illum earum deleni</p>
            </header>
            <Courses />
        </div>
    )
}

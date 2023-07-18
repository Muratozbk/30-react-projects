import { useState } from 'react'
import Button from '../components/Button'
import Courses from './components/Courses'

import { coursesDB } from './db/coursesDB'
import { currenciesDB } from './db/currenciesDB';

document.body.style.backgroundColor = "#282c34"
document.body.style.color = "#eee";

export default function CourseStoreApp() {
    const [currency, setCurrency] = useState(currenciesDB.euro)

    return (
        <div className='container' style={{ padding: "1rem" }}>
            <h4 className="mb-1">Change currency:</h4>
            {Object.values(currenciesDB).map(cur => (
                <Button btnClass={'btn-light'}
                    key={cur.code}
                    text={cur.code}
                    onClick={() => setCurrency(cur)} />))}
            <header className="text-center mt-2 mb-2">
                <h1 className="title">Course</h1>
                <h2 className="mb-2" style={{
                    textTransform: 'uppercase'
                }}>Become a web developer</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet illum earum deleniti?  illum earum deleni  illum earum deleni  illum earum deleni  illum earum deleni  illum earum deleni  illum earum deleni  illum earum deleni</p>
            </header>
            <Courses list={coursesDB} />
        </div>
    )
}

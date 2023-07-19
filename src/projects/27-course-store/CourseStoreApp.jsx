import { useState } from 'react'
import Button from '../components/Button'
import Courses from './components/Courses'

import { coursesDB } from './db/coursesDB'
import { currenciesDB } from './db/currenciesDB';

import { CurrencyContext } from './context/currencies-context';

document.body.style.backgroundColor = "#282c34"
document.body.style.color = "#eee";

export default function CourseStoreApp() {
    const [currency, setCurrency] = useState(currenciesDB.Euro)

    return (
        <CurrencyContext.Provider value={currency}>
            <div className='container' style={{ padding: "1rem" }}>
                <h4 className="mb-1">Change currency:</h4>
                {Object.values(currenciesDB).map(cur => (
                    <Button btnClass={'btn-light'}
                        key={cur.code}
                        text={cur.code}
                        onClick={() => setCurrency(cur)} />))}
                <header className="text-center mt-1 mb-2">
                    <h1 className="title mb-1 mt-1">Course</h1>
                    <h2 className="mb-1" style={{
                        textTransform: 'uppercase'
                    }}>Become a web developer</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet illum earum deleniti?  illum earum deleni  illum earum deleni  illum earum deleni  illum earum deleni  illum earum  illum earum deleni</p>
                </header>
                <Courses list={coursesDB} />
            </div>
        </CurrencyContext.Provider>
    )
}

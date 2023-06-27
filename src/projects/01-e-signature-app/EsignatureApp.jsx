import React, { useState } from 'react'
import Title from '../components/Title'

export default function EsignatureApp() {
    const [name, setName] = useState('')
    const [date, setDate] = useState('')

    const handleNameChange = e => {
        setName(e.target.value)
    }
    const handleDateChange = e => {
        setDate(e.target.value)
    }

    const inputStyle = {
        border: 'none',
        borderBottom: '2px dotted',
        outline: 'none',
        padding: '.35rem 0'
    }
    document.body.style.background = '#ddd'

    return (
        <div className='container text-center'>
            <Title classes={'title text-primary'} text={name} />
            <Title classes={'main-title mb-4'} text={!date ? 'Date of Birth' : date} />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quidem illo asperiores maxime incidunt nisi cumque amet nam tempore, sint quae, facilis cum, aliquam assumenda eaque? Eum cupiditate deserunt nemo.</p>

            <footer className='d-flex' style={{
                justifyContent: 'space-around',
                position: 'relative',
                top: '40vh'
            }}>
                <input type="date" value={date}
                    onChange={handleDateChange} style={inputStyle} />
                <input type="text" value={name}
                    onChange={handleNameChange} style={inputStyle} />
            </footer>
        </div>
    )
}

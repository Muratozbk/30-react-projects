import React from 'react'
import Title from '../components/Title'

export default function RandomizeColors() {
    const handleClick = (event) => {
        console.log(event.target)
    }

    const handleSecClick = e => {
        // console.log(e.target)
        console.log(getRamdomColor())
        let body = document.querySelector('body')
        body.style.background = getRamdomColor();
        e.target.style.backgroundColor = getRamdomColor()
    }

    function getRamdomColor() {
        let letters = '0123456789ABCDEF';
        let color = '#'
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)]
        }
        return color;
    }

    return (
        <div className='container text-center' style={{
            margin: 'auto'
        }} >
            <Title text={'Randomize Color'}
                classes={'mb-4'} />
            <button className='btn btn-danger'
                onClick={(event) => handleClick(event)}>Click Me</button>
            <button onClick={handleSecClick} className='btn btn-success'>Click Me</button>
            <button onClick={handleSecClick} className='btn btn-primary'>Click Me</button>
            <button onClick={handleSecClick} className='btn btn-warning'>Click Me</button>
        </div>
    )
}

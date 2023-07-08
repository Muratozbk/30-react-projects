import React from 'react'

export default function PlanetObj({ planet }) {
    return (
        <>
            <img src={planet} alt="Planet"
                className='planet' />
        </>
    )
}

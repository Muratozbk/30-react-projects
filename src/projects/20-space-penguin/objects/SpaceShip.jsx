import React from 'react'


export default function SpaceShip({ start, changeShip, scale }) {
    let animation = start;

    return (
        <>
            <img src={changeShip} alt="Space Ship"
                style={{
                    position: 'absolute',
                    bottom: 50, zIndex: 1,
                    width: scale
                }} className={animation} />
        </>
    )
}

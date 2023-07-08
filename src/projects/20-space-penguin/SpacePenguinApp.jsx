import { useState, useEffect } from 'react'
import './ship.css'
import Button from '../components/Button'
import SpaceShip from './objects/SpaceShip'
import Ship from './image/space-ship-space-svgrepo-com.svg'
import Moon from './image/moon-sat-svgrepo-com.svg'
import Planet from './image/planet-earth-global-svgrepo-com.svg'

import PlanetObj from './objects/PlanetObj'
import MoonObj from './objects/MoonObj'
import Penguin from './image/penguin-svgrepo-com.svg'

export default function SpacePenguinApp() {
    const [shipProps, setShipProps] = useState({
        action: '',
        scale: 180,
    })

    const startShip = () => {
        setShipProps({ action: 'fly', scale: 50 })
    }
    const landShip = () => {
        setShipProps({ action: 'land', scale: 180 })
    }

    const [shipType, setShipType] = useState(Ship)

    useEffect(() => {
        if (shipProps.action === 'land') {
            setShipType(Penguin)
            setTimeout(() => setShipType(Ship), 5350)
        } else setShipType(Ship)
    }, [shipProps.action])

    return (
        <div className='space'>

            <Button text='Launch' btnClass={'btn-danger'}
                onClick={startShip} />
            <section className='env'>
                {/* SpaceShipObj */}
                <SpaceShip changeShip={shipType}
                    scale={shipProps.scale}
                    start={shipProps.action} />

                {/* MoonObj  */}
                <MoonObj Moon={Moon} />
                {/* PlanetObj  */}
                {/* <PlanetObj planet={Planet} /> */}
                <img src={Planet} alt="Planet"
                    className='planet' />
            </section>

            <Button text='Land' btnClass={'btn-info'}
                onClick={landShip} />

        </div>
    )
}

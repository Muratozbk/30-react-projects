import { useState, useEffect } from 'react'
import './ship.css'
import Button from '../components/Button'
import SpaceShip from './objects/SpaceShip'
import Ship from './image/space-ship-space-svgrepo-com.svg'
import Moon from './image/moon-sat-svgrepo-com.svg'
import Planet from './image/planet-earth-global-svgrepo-com.svg'

import PlanetObj from './objects/PlanetObj'
import MoonObj from './objects/MoonObj'


export default function SpacePenguinApp() {
    const [shipAction, setShipAction] = useState();
    const [transformScale, setTransformScale] = useState(180)

    const startShip = () => {
        // setShipAction('fly');
        // setTransformScale(50)
        setShipProps({ action: 'fly', scale: 50 })
    }
    const landShip = () => {
        // setShipAction('land');
        // setTransformScale(180)
        setShipProps({ action: 'land', scale: 180 })
    }

    const [shipProps, setShipProps] = useState({
        action: '',
        scale: 180,
    })

    return (
        <div className='space'>

            <Button text='Launch' btnClass={'btn-danger'}
                onClick={startShip} />
            <section className='env'>
                {/* SpaceShipObj */}
                <SpaceShip changeShip={Ship}
                    scale={shipProps.scale}
                    start={shipProps.action} />

                {/* MoonObj  */}
                <MoonObj Moon={Moon} />
                {/* PlanetObj  */}
                <PlanetObj planet={Planet} />
            </section>

            <Button text='Land' btnClass={'btn-info'}
                onClick={landShip} />

        </div>
    )
}

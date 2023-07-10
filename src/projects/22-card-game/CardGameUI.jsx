import { useState } from 'react'
import Title from '../components/Title'
import Button from '../components/Button'
import './cardGame.css'
import Card from './Card'

import Spear from './svg/spear.svg'
import Knight from './svg/knight.svg'
import Archer from './svg/archer.svg'

export default function CardGameApp() {
    const [start, setStart] = useState(false)

    const startGame = () => {
        setStart(true)
    }

    document.body.style.background = '#1e0536'
    document.body.style.color = '#bab6bf'
    return (
        <div className='container text-center'>
            {!start ? <section className='text-center'>
                <Title text={'Card Game'} />
                <Button text='Start Game' onClick={startGame}
                    btnClass={'btn-success'} />

                <Title classes={'subtitle'} text={'Rules:'} />
                <ul style={{
                    fontSize: '1.1rem',
                    lineHeight: '1.5'
                }} className='d-flex flex-column'>
                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, animi!</li>
                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, animi!</li>
                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, animi!</li>
                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, animi!</li>
                </ul>
            </section>
                : (<>
                    <Title text={'0-1'} />
                    <main className="container m-auto game-board">
                        <section className="player_1">
                            <Card player={"player_1"} unitTypeName={'Sword Cavalry'}
                                unitTypeImg={Knight} />
                            <Card player={"player_1"} unitTypeName={'Spear man'}
                                unitTypeImg={Spear} />
                        </section>
                        <section className='fog-of-war'></section>
                        <section className="player_2">
                            <Card player={"player_2"} unitTypeName={'Sword Cavalry'} unitTypeImg={Knight} />
                            <Card player={"player_2"} unitTypeName={'Spear man'}
                                unitTypeImg={Spear} />
                        </section>
                    </main>
                </>)}
        </div>
    )
}

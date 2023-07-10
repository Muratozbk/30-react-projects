import React from 'react'
import Shield from './svg/shield.svg'
import Sword from './svg/sword.svg'

export default function Card({ player, moralValue, unitValue, unitTypeImg, unitTypeName, attackValue, defenseValue }) {
    let iconStyle = {
        marginRight: 10,
        width: 20,
        background: 'transparent'
    }
    let mirror;
    function mirrorImg(player) {
        player === 'player_2' ? (mirror = 'scaleX(-1)') :
            (mirror = 'scaleX(1)');
        return mirror
    }
    mirrorImg(player)
    return (
        <div className={`card text-center shadow-sm 
        ${player === 'player_1' ? 'card-info' : 'card-danger'}`}
            style={{
                padding: '1rem',
                width: '180px'
            }}>
            <section className="card-header d-flex"
                style={{ justifyContent: 'space-between' }}>
                <div className="defense">
                    <img src={Shield} alt="defense-img" />
                    <span>{!defenseValue && '00'}</span>
                </div>
                <div className="attack">
                    <img src={Sword} alt="attack-img" />
                    <span>{!attackValue && '00'}</span>
                </div>

            </section>

            <section className="card-body">
                <h3 className="mb-1">
                    {!unitTypeName ? 'Unit Type Name' :
                        unitTypeName}
                    <img src={unitTypeImg} alt="unitType"
                        style={{
                            background: '#aaa',
                            padding: '5px',
                            transform: `${mirror}`
                        }} />
                </h3>
            </section>

            <section className="card-footer d-flex"
                style={{ justifyContent: 'space-between' }}>
                <div className="defense">
                    <img src={Shield} alt="defense-img" />
                    <span>{!moralValue && '00'}</span>
                </div>
                <div className="attack">
                    <img src={unitTypeImg} alt="attack-img" />
                    <span>{!unitValue && '00'}</span>
                </div>

            </section>

        </div>
    )
}

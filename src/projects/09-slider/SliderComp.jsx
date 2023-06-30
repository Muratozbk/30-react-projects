import React from 'react'

export default function SliderComp({ setValue, handleInput, textColor, bgColor }) {
    const sliderStyle = {
        appearance: 'none',
        width: '100%',
        height: '25',
        width: '25',
        backgroundColor: 'lightgray',
        cursor: 'pointer',
        opacity: 0.7
    }

    return (
        <div className='container d-flex flex-column'
            style={{ gap: 100 }}>
            <input onInput={handleInput} style={sliderStyle}
                type="range" min='0' max={100} value={setValue} />
            <div style={{
                background: !bgColor ? 'lightgray' : bgColor,
                color: !textColor ? 'black' : textColor,
                height: `${3 * (setValue)}px`,
                width: `${3 * (setValue)}px`,
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%'
            }}>
                <span>{setValue}</span>
            </div>
        </div>
    )
}

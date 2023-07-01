import React from 'react'
import Button from './Button'

export default function Popup({ trigger, type,
    title, text, handleClose }) {
    const popupContainer = {
        position: 'absolute',
        top: '20vh',
        height: '100vh',
        width: '100vw',
        background: 'rgba(0,0,0, 0.1)',
        // zIndex: '-1',
    }
    const popupStyle = {
        position: 'realative',
        margin: '40vh auto'
    }

    return trigger && (
        <div style={popupContainer} className="d-flex flex-column">

            <div className={`${type}`}
                style={popupStyle}>
                <div className="alert-close">
                    <div className="d-flex flex-column"
                    >
                        <h4 className="mb-1">{title && title}</h4>
                        <p >{text && text}</p>
                    </div>
                    <Button btnClass={'btn-close'}
                        text={'x'}
                        onClick={() => handleClose(false)} />
                </div>
            </div>
        </div>
    )
}

import React from 'react'

export default function Button({ onSubmit, onClick, icon, text = 'Click', btnClass }) {
    return (
        <button className={`btn ${btnClass}`}
            onClick={onClick} onSubmit={onSubmit}>

            {icon}
            {text}
        </button>
    )
}

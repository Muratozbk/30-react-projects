import React from 'react'

export default function Button({ onClick, icon, text = 'Click', btnClass }) {
    return (
        <button className={`btn ${btnClass}`}
            onClick={onClick}>
            {icon}
            {text}
        </button>
    )
}

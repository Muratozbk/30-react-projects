import React from 'react'

export default function Title({ classes, text }) {
    return (
        <h1 className={!classes ? 'title' :
            (classes + '  text-center')} >
            {!text ? 'Title' : text}</h1>

    )
}

import React from 'react'
import Contact from './Contact'

export default function ContactList({ contacts }) {
    const generateRandomImg = () => {
        const types = ['adventurer', 'bottts-neutral', 'personas', 'bottts', 'avataaars', 'pixel-art']
        return types[Math.floor(Math.random() * types.length)]
    }

    return (
        <div>
            <Contact icon={`https://api.dicebear.com/6.x/${generateRandomImg()}/svg`}
                firstName={''}
                lastName={''}
                phoneNr={''} />
        </div>
    )
}

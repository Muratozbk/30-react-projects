import React from 'react'

export default function NavItem({ active = '', text }) {
    return (
        <li className="nav-item">
            <a href="" className={`nav-link ${active}`}>
                {text}</a>
        </li>
    )
}

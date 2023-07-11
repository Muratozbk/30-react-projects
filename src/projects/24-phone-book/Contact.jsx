import React from 'react'
import styled from 'styled-components'
import { FaUserAlt, FaPhone } from 'react-icons/fa'

const ContactStyle = styled.li`
display: grid;
grid-template-columns: repeat(4 ,1fr);
align-items: center;
max-width: 700px;
margin: auto;
padding: 0.3rem 0.5rem;
border-bottom:1px solid #666 ;
&:hover{
    background-color: #666;
}
img{
    height: 50px;
    border-radius: 50%;
}
.text-info{color:cyan}
.text-success{color:green}`;

export default function Contact({ icon, phoneNr, lastName, firstName }) {
    return (
        <ContactStyle>

            <div>
                {!icon ? <FaUserAlt className='text-info' /> :
                    <img src={icon} />}
            </div>
            <div>
                {!firstName ? 'John' : firstName}
            </div>
            <div>
                {!lastName ? 'Snow' : lastName}
            </div>

            <div>
                {!phoneNr ? '0123-987' :
                    <a href={`tel:${phoneNr}`}>{phoneNr}
                        <FaPhone className='text-success' />
                    </a>}
            </div>
        </ContactStyle>
    )
}

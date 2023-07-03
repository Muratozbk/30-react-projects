import React from 'react'

export default function Contact({ contact, width = 300 }) {
    return (
        <div key={contact.id} className='card bg-light m-auto'
            style={{ width: width }}
        >
            <div className="card-header bg-danger">
                {contact.first_name}
            </div>
            <div className="card-body text-left"></div>
            <h4 className="card-text">Last Name: {contact.last_name} </h4>
            <p className="card-text"><span className='fw-bold'
                style={{ fontSize: '1rem' }}>Email:
                {contact.email}   </span> </p>
            <p className="card-text"><span className='fw-bold'
                style={{ fontSize: '1rem' }}>Phone:
            </span>  {contact.phone}</p>
            <p className="card-text"><span className='fw-bold'
                style={{ fontSize: '1rem' }}>User Name:
            </span>  {contact.user_name}</p>
        </div>
    )
}

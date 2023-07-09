import React from 'react'
import Button from '../components/Button'

export default function Task({ onClick, date, type, setDate, setType }) {
    return (
        <div className='d-flex' style={{
            justifyContent: 'space-between',
            borderBottom: '1px solid #666',
            marginBottom: '2rem'
        }}>
            <input type='datetime-local' value={date}
                onChange={setDate} />
            <input type='text' value={type}
                onChange={setType}
                placeholder='Specify the Task' />

            <Button text='+ Add' onClick={onClick} />
        </div>
    )
}

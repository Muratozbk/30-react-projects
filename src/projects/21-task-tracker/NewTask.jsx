import React from 'react'
import { NewTaskStyle } from './TableStyle'
import Button from '../components/Button'
import { RiDeleteBin6Fill } from 'react-icons/ri'

export default function NewTask({ type, date, index, onDelete, onTaskClick }) {
    return (
        <NewTaskStyle onClick={onTaskClick}>
            <div>
                <h3>{type} </h3>
                <small className='text-primary'>{date} </small>
            </div>
            <Button btnClass={'btn-light'} text=''
                icon={<RiDeleteBin6Fill />} style={{
                    fontSize: '1.2rem',
                    userSelect: 'none',
                    PointerEvent: 'none'
                }}
                onClick={() => onDelete(index)} />
        </NewTaskStyle>
    )
}

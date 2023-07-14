import React from 'react'
import { MdEdit, MdDelete } from 'react-icons/md'
import { ExpenseItemStyle } from './styles/ExpenseItem.style'

export default function ExpenseItem({
    expense, handleDelete, handleEdit }) {
    const { charge, id, date, amount } = expense;

    return (
        <ExpenseItemStyle>
            <div className='expense-details'>
                <div className="d-flex flex-column"
                    style={{ alignItems: 'flex-start' }}>
                    <h4 className="text-primary">
                        {charge}
                    </h4>
                    <small className='text-danger'>{date} </small>
                </div>
                <div className="text-success">
                    ${amount}
                </div>
                <div className='d-flex'>
                    <button className='btn btn-sm'
                        onClick={() => handleEdit(id)}>
                        <MdEdit />
                    </button>
                    <button className='btn btn-sm'
                        onClick={() => handleDelete(id)}>
                        <MdDelete />
                    </button>
                </div>
            </div>
        </ExpenseItemStyle>
    )
}

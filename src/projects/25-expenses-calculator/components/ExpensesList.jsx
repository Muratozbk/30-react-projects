import React from 'react'
import { MdDelete } from 'react-icons/md'
import ExpenseItem from './ExpenseItem'

export default function ExpensesList({ expense = [], clearItems }) {
    return (
        <>
            <ul className='list'>
                <ExpenseItem />
            </ul>
            {expense.length > 0 ? <button className='btn btn-danger' onClick={clearItems}>
                <MdDelete /> Clear All Expenses
            </button> : null}
        </>
    )
}

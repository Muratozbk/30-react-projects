import React from 'react'
import { MdDelete } from 'react-icons/md'
import ExpenseItem from './ExpenseItem'

export default function ExpensesList({ expenses, handleDelete, handleEdit, handleClearAllExpenses }) {
    return (
        <>
            <ul className='list'>
                {expenses.map(expense => {
                    return <ExpenseItem key={expense.id}
                        expense={expense}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete} />
                })}
            </ul>
            {expenses.length > 0 ? <button className='btn btn-danger' onClick={handleClearAllExpenses}>
                <MdDelete /> Clear All Expenses
            </button> : null}
        </>
    )
}

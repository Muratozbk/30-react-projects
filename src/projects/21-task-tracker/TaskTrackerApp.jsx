import React from 'react'
import Title from '../components/Title'
import { TableStyle, NewTaskStyle } from './TableStyle'

export default function TaskTrackerApp() {
    document.body.style.background = '#ddd'
    return (
        <>
            <Title text={'Tasks Tracker App'} classes={'text-center mt-1 mb-2'} />
            <TableStyle>
                <ul className='table-head'>
                    <li>Date</li>
                    <li>Task</li>
                </ul>
                {/* <Tasks/>  */}
                <ul className="table-row">
                    <li className='completed'>Task</li>
                    <li>Task</li>
                    <li>Task</li>
                    <li>Task</li>
                </ul>
            </TableStyle>
        </>
    )
}

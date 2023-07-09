import { useState } from 'react'
import Title from '../components/Title'
import { TableStyle, NewTaskStyle } from './TableStyle'
import Task from './Task'

export default function TaskTrackerApp() {
    document.body.style.background = '#ddd'
    const [newTask, setNewTask] = useState({
        date: '',
        type: '',
        completed: ''
    })

    const handleChangeDate = (e) => {
        setNewTask({ ...newTask, date: e.target.value })
    }
    const handleType = (e) => {
        setNewTask({ ...newTask, type: e.target.value })
    }

    return (
        <>
            <Title text={'Tasks Tracker App'} classes={'text-center mt-1 mb-2'} />
            <TableStyle>
                <ul className='table-head'>
                    <li>Date</li>
                    <li>Task</li>
                </ul>
                <Task
                    date={newTask.date}
                    setDate={handleChangeDate}
                    type={newTask.type}
                    setType={handleType} />
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

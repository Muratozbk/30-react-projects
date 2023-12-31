import { useState } from 'react'
import Title from '../components/Title'
import { TableStyle } from './TableStyle'
import Task from './Task'
import NewTask from './NewTask'

export default function TaskTrackerApp() {
    document.body.style.background = '#ddd'
    const [newTask, setNewTask] = useState({
        date: '',
        type: '',
        // completed: ''
    })

    const handleChangeDate = (e) => {
        setNewTask({ ...newTask, date: e.target.value })
    }
    const handleType = (e) => {
        setNewTask({ ...newTask, type: e.target.value })
    }
    // let tasks = [{ date: '', type: '' }];

    const [taskList, setTaskList] = useState([])

    const addNewTask = () => {
        setTaskList([...taskList, {
            date: newTask.date,
            type: newTask.type
        }])
    }

    const handleCompleted = e => {
        e.target.classList.toggle('completed')

    }

    const handleDelteTask = (index) => {
        window.confirm('Delte Task?') && setTaskList((prevList) => {
            const updatedTaskList = [...prevList];
            console.log(index)
            updatedTaskList.splice(index, 1);
            return updatedTaskList;
        });
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
                    setType={handleType}
                    onClick={addNewTask} />
                <ul className="table-row">
                    {taskList.map((taskItem, idx) =>
                        taskItem.date !== '' && taskItem.type !== ''
                            ? <NewTask key={idx}
                                date={taskItem.date}
                                type={taskItem.type}
                                onTaskClick={handleCompleted}
                                onDelete={handleDelteTask}
                                index={idx} /> : null
                    )}

                </ul>
            </TableStyle>
        </>
    )
}

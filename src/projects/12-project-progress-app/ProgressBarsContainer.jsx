import { useRef, useEffect, useState } from 'react'
import Title from '../components/Title'
import { Progressbar } from '../components/ProgressBar'

export default function ProgressBarsContainer() {
    const inputStyle = {
        width: '50px',
        border: 'none',
        outline: 'none',
        textAlign: 'center',
        borderBottom: '1px solid gray'
    }

    const [completed, setCompleted] = useState(51)
    const [status, setStatus] = useState({
        ui: 55,
        ux: 73,
        data: 20,
    })
    const projectData = [
        { bgColor: '#7633f9', completed: status.ui },
        { bgColor: '#28a745', completed: status.ux },
        { bgColor: '#dc3545', completed: status.data }
    ]
    const uiInput = useRef()

    useEffect(() => {
        uiInput.current.focus();
        setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 5000)
    }, [])
    document.body.style.background = '#ccc'
    return (
        <div className='container container-sm mx-auto text-center'>
            <Title text={'Progress Bars'} />
            <h2>Project Status:</h2>
            <ul>
                <li>
                    UI Status:   <input type="number" style={inputStyle}
                        value={status.ui} ref={uiInput} min={0} max={100}
                        onChange={(e) => setStatus({
                            ...status,
                            ui: e.target.value
                        })} />
                </li>
                <li>
                    UX Status:   <input type="number" style={inputStyle}
                        value={status.ux} min={0} max={100}
                        onChange={(e) => setStatus({
                            ...status,
                            ux: e.target.value
                        })} />
                </li>
                <li>
                    DATA Status:   <input type="number" style={inputStyle}
                        value={status.data}
                        min={0} max={100}
                        onChange={(e) => setStatus({
                            ...status,
                            data: e.target.value
                        })} />
                </li>
            </ul>
            {/* progress bars */}
            {projectData.map((data, id) => (
                <Progressbar key={id}
                    bgColor={data.bgColor}
                    completed={data.completed} />
            ))}

            <Progressbar
                bgColor={
                    completed > 66 ?
                        '#28a745' : completed > 33
                            ? '#7633f9' : '#dc3545'}
                completed={completed} />
        </div>
    )
}

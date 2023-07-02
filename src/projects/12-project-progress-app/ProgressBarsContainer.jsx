import { useRef, useEffect, useState } from 'react'
import Title from '../components/Title'
import { Progressbar } from '../components/ProgressBar'

export default function ProgressBarsContainer() {
    const [completed, setCompleted] = useState(0)

    const projectData = [
        { bgColor: '#7633f9', completed: 57 },
        { bgColor: '#28a745', completed: 88 },
        { bgColor: '#dc3545', completed: 20 }
    ]

    const inputStyle = {
        width: '50',
        border: 'none',
        outline: 'none',
        textAlign: 'center',
        borderBottom: '1px solid lightgray'
    }

    const uiInput = useRef()

    useEffect(() => {
        uiInput.current.focus();
    }, [])

    return (
        <div className='container container-sm mx-auto text-center'>
            <Title text={'Progress Bars'} />
            <h2>Project Status:</h2>

            <ul>
                <li>
                    UI Status:   <input type="number" style={inputStyle}
                        value={''} ref={uiInput}
                        onChange={(e) => console.log(e.target.value)} />
                </li>
                <li>
                    UX Status:   <input type="number" style={inputStyle}
                        value={''}
                        onChange={(e) => console.log(e.target.value)} />
                </li>
                <li>
                    DATA Status:   <input type="number" style={inputStyle}
                        value={''}
                        onChange={(e) => console.log(e.target.value)} />
                </li>
            </ul>
            {/* progress bars */}
            {projectData.map((data, id) => (
                <Progressbar key={id}
                    bgColor={data.bgColor}
                    completed={data.completed} />
            ))}
        </div>
    )
}

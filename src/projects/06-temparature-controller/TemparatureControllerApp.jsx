import { useState } from 'react'
import Button from '../components/Button'

export default function TemparatureControllerApp() {
    const [temparature, setTemparature] = useState(0)

    return (
        <div className='container mt-3 text-center'>
            <div className="card m-auto"
                style={{ width: '250px' }}>
                <div className={`card m-auto d-flex
                 ${temparature > 0 ? 'bg-danger' : 'bg-info'}`}
                    style={{ height: '150px', width: '150px', borderRadius: '50%' }}>
                    <h1 style={{
                        fontSize: '2.6rem'
                    }}> {temparature}° C</h1>
                </div>
                <div className="d-flex"
                    style={{ margin: '2rem 0' }}>
                    <Button text='-' btnClass={'btn-lg mr-1'}
                        onClick={() => setTemparature(temparature - 1)} />
                    <Button text='+' btnClass={'btn-lg'}
                        onClick={() => setTemparature(temparature + 1)} />
                </div>
            </div>
        </div>
    )
}

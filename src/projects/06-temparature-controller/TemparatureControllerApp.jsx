import React from 'react'
import Button from '../components/Button'

export default function TemparatureControllerApp() {
    return (
        <div className='container mt-3 text-center'>
            <div className="card m-auto"
                style={{ width: '250px' }}>
                <h1 className='card m-auto'
                    style={{ height: '150px', width: '150px', borderRadius: '50%' }}>Temparature</h1>
                <div className="d-flex"
                    style={{ margin: '2rem 0' }}>
                    <Button text='-' btnClass={'btn-lg mr-1'}
                        onClick={() => console.log('-')} />
                    <Button text='+' btnClass={'btn-lg'}
                        onClick={() => console.log('+')} />
                </div>
            </div>
        </div>
    )
}

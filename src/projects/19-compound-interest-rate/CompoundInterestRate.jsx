import { useRef, useEffect, useState } from 'react'
import FormGroup from '../components/FormGroup'

export default function CompoundInterestRate() {
    let inputPrinciple = useRef()
    useEffect(() => {
        inputPrinciple.current.focus()
    })

    return (
        <div className='container'>
            <div className="card card-primary bg-warning shadow-sm text-dark m-auto mt-4" style={{
                maxWidth: '300px',
                backgroundColor: 'yellow',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
            }}>

                <div className="card-body" style={{

                }}>

                    <FormGroup inputType={'number'}
                        values={''}
                        reference={inputPrinciple}
                        onChange={(e) => console.log('principle amount $')}
                        labelText={'Principle amount $'} />

                    <FormGroup inputType={'number'}
                        values={''}
                        onChange={(e) => console.log('Monthly contribution $')}
                        labelText={'Principle amount $'} />
                    <FormGroup inputType={'number'}
                        values={''}
                        onChange={(e) => console.log('Interest Rate %')}
                        labelText={'Principle amount $'} />

                    <FormGroup inputType={'number'}
                        values={''}
                        onChange={(e) => console.log('Years of investment ')}
                        labelText={'Principle amount $'} />

                </div>
                <div className="card-footer mt-2 bg-primary text-right"
                    style={{
                        color: '#fff',
                        textAlign: 'right',
                        padding: '1.5rem'
                    }}>
                    $0.00
                </div>
            </div>
            CompoundInterestRate

        </div>
    )
}

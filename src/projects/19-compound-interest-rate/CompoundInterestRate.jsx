import { useRef, useEffect, useState } from 'react'
import FormGroup from '../components/FormGroup'
import CompoundInterestRateCalc from './CompoundInterestRateCalc'

export default function CompoundInterestRate() {
    let inputPrinciple = useRef()
    useEffect(() => {
        inputPrinciple.current.focus()
    }, [])

    const [compound, setCompound] = useState({
        principleAmount: '',
        monthlyContribtion: null,
        interestRate: '',
        years: ''
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
                        values={compound.principleAmount}
                        reference={inputPrinciple}
                        onChange={(e) => setCompound({
                            ...compound,
                            principleAmount: e.target.value
                        })}
                        labelText={'Principle amount $'} />

                    <FormGroup inputType={'number'}
                        values={compound.monthlyContribtion}
                        onChange={(e) => setCompound({
                            ...compound,
                            monthlyContribtion: e.target.value
                        })}
                        labelText={'Monthly contribution $'} />
                    <FormGroup inputType={'number'}
                        values={compound.interestRate}
                        onChange={(e) => setCompound({
                            ...compound,
                            interestRate: e.target.value
                        })}
                        labelText={'Interest Rate %'} />

                    <FormGroup inputType={'number'}
                        values={compound.years}
                        onChange={(e) => setCompound({
                            ...compound,
                            years: e.target.value
                        })}
                        labelText={'Years of investment'} />

                </div>
                <div className="card-footer mt-2 bg-primary text-right"
                    style={{
                        color: '#fff',
                        textAlign: 'right',
                        padding: '1.5rem'
                    }}>
                    <CompoundInterestRateCalc
                        principleAmount={compound.principleAmount}
                        monthlyContribution={compound.monthlyContribtion}
                        interestRate={compound.interestRate}
                        years={compound.years}
                    />
                </div>
            </div>

        </div>
    )
}

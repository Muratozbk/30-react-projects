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
    });
    document.body.style.backgroundColor = '#2174af'
    return (
        <div className='container'>
            <div className="card card-primary bg-warning shadow-sm text-dark m-auto mt-4" style={{
                maxWidth: '300px',
                backgroundColor: 'yellow',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
            }}>


                <FormGroup inputType={'number'}
                    values={compound.principleAmount}
                    reference={inputPrinciple}
                    onChange={(e) => setCompound({
                        ...compound,
                        principleAmount: e.target.value
                    })}
                    labelText={'Principle Amount $'} />

                <FormGroup inputType={'number'}
                    values={compound.monthlyContribtion}
                    onChange={(e) => setCompound({
                        ...compound,
                        monthlyContribtion: e.target.value
                    })}
                    labelText={'Monthly Contribution $'} />
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
                    labelText={'Years of Investment'} />


                <div className="card-footer mt-1 bg-primary text-right"
                    style={{
                        color: '#fff',
                        textAlign: 'right',
                        padding: '1.5rem ',
                        width: '81%'
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

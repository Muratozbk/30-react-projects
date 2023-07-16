import React from 'react'
import Title from '../components/Title'
import FormGroup from '../components/FormGroup'
import Button from '../components/Button'


export default function MortgageCalculatorApp() {
    document.body.style.background = '#ddd';
    let alertClass;
    return (
        <div className='container mt-4 card'
            style={{ width: '500px' }}>
            <Title text={'Mortgage Calc App'} />
            <form onSubmit={e => e.preventDefault()}>
                <div className="d-grid"
                    style={{
                        gridTemplateColumns: '1fr 1fr',
                        gap: 10
                    }}>

                    <FormGroup labelText={'Down payment'}
                        inputType={'number'} placeholder={'Enter the value of the home'} />
                    <FormGroup labelText={'Home Value'}
                        inputType={'number'} placeholder={'Enter your funds'} />
                </div>
                <FormGroup labelText={'Loan amount'}
                    inputType={'number'} placeholder={'Calculated amount of loan'} />
                <div className="d-grid"
                    style={{
                        gridTemplateColumns: '1fr 1fr',
                        gap: 10
                    }}>

                    <FormGroup labelText={'Interest Rate'}
                        inputType={'number'} placeholder={'Enter the interest rate'} />
                    <FormGroup labelText={'Loan Duration (years)'}
                        inputType={'number'} placeholder={'The Duration of loan in years'} />
                </div>
                <Button text='Calculate' btnClass={'btn-info btn-block'} />
                <h4 className={`${(alertClass = 'alert-danger')}`}
                    style={{ width: 'auto', margin: '1rem 0' }}></h4>
            </form>
        </div>
    )
}

import { useState } from 'react'
import Title from '../components/Title'
import FormGroup from '../components/FormGroup'
import Button from '../components/Button'


export default function MortgageCalculatorApp() {
    document.body.style.background = '#ddd';

    const [homeValue, setHomeValue] = useState('');
    const [downPayment, setDownPayment] = useState("");
    const [loanAmount, setLoanAmount] = useState("")
    const [interestRate, setInterestRate] = useState('')
    const [loanDuration, setLoanDuration] = useState('')
    const [monthlyPayment, setMonthlyPayment] = useState('')

    function calculateLoanAmount() {
        setLoanAmount(homeValue - downPayment);
        return loanAmount
    }

    function calculateMonthlyPayment() {
        function percentageToDecimal(percent) {
            return percent / 12 / 100;
        }
        function yearsToMonth(years) {
            return years * 12;
        }
        setMonthlyPayment(((percentageToDecimal(interestRate) *
            loanAmount) /
            (1 - Math.pow(
                1 + percentageToDecimal(interestRate),
                -yearsToMonth(loanDuration)
            ))).toFixed(2));
        return monthlyPayment
    }

    let alertClass;
    monthlyPayment ? (alertClass = 'alert-success') :
        (alertClass = "alert-danger");

    return (
        <div className='container mt-4 card'
            style={{ width: '500px' }}>
            <Title text={'Mortgage Calc App'} classes={'subtitle'} />
            <form onSubmit={e => e.preventDefault()}>
                <div className="d-grid"
                    style={{
                        gridTemplateColumns: '1fr 1fr',
                        gap: 10
                    }}>

                    <FormGroup labelText={'Home Value'}
                        inputType={'number'} placeholder={'Enter your funds'}
                        values={homeValue}
                        onInput={e => setHomeValue(e.target.value)}
                        onKeyUp={calculateLoanAmount} />
                    <FormGroup labelText={'Down payment'}
                        inputType={'number'} placeholder={'Enter the value of the home'}
                        values={downPayment} onKeyUp={calculateLoanAmount}
                        onInput={e => setDownPayment(e.target.value)} />
                </div>
                <FormGroup labelText={'Loan amount'}
                    inputType={'number'} placeholder={'Calculated amount of loan'} values={loanAmount}
                    readOnly={true} className={'bg-light'} />
                <div className="d-grid"
                    style={{
                        gridTemplateColumns: '1fr 1fr',
                        gap: 10
                    }}>

                    <FormGroup labelText={'Interest Rate'}
                        inputType={'number'} placeholder={'Enter the interest rate'} values={interestRate}
                        onInput={e => setInterestRate(e.target.value)} />
                    <FormGroup labelText={'Loan Duration (years)'}
                        inputType={'number'} placeholder={'The Duration of loan in years'} values={loanDuration}
                        onInput={e => setLoanDuration(e.target.value)} />
                </div>
                <Button text='Calculate' btnClass={'btn-info btn-block'}
                    onClick={calculateMonthlyPayment} />

                <h4 className={`${(alertClass = 'alert-danger')}`}
                    style={{ width: 'auto', margin: '1rem 0' }}>

                    {monthlyPayment ? `Monthly payment:${monthlyPayment}` :
                        "Complete all fields"}
                </h4>
            </form>
        </div>
    )
}

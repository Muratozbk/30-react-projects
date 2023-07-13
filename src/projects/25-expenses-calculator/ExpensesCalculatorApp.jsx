import { useState, useRef, useEffect } from 'react'
import Title from '../components/Title'
import Button from '../components/Button'
import ExpensesForm from './components/ExpensesForm'
import ExpensesList from './components/ExpensesList'
import { BudgetStyle } from './components/styles/Budget.style'

export default function ExpensesCalculatorApp() {
    document.body.style.background = '#eee'
    const [expenses, setExpenses] = useState('');

    const [date, setDate] = useState('')
    const [amount, setAmount] = useState('')
    const [charge, setCharge] = useState('')
    const [budget, setBudget] = useState('')

    const changeBudget = e => {
        // setBudget(e.target.value)
        setBudget(inputBudget.current.value)
    }

    let inputBudget = useRef()
    useEffect(() => {
        inputBudget.current.focus()
    })

    return (
        <main className='container' style={{ padding: '0 15px' }}>
            <Title text={'Expenses Calculator'} classes={'subtitle mt-1 mb-1'} />
            {/* Alert comp */}

            <section style={{
                display: 'grid'
                , gridTemplateColumns: '1fr 1fr',
                gap: '25px', margin: '1rem'
            }}>
                <aside>
                    <ExpensesForm date={date}
                        charge={charge} amount={amount} />
                    <section className='card mt-2 bg-primary text-light'
                        style={{ textAlign: 'end' }}>
                        <div className="card-body">
                            <BudgetStyle>
                                <h3>Budget : $</h3>
                                <input type="number" onChange={changeBudget}
                                    value={budget} ref={inputBudget} />
                            </BudgetStyle>
                            <h3 className='mb-1'>Total Expenses: $</h3>
                            {/* Calc economies */}
                            <h3>Economies: $</h3>
                        </div>
                    </section>
                </aside>
            </section>

            <section>
                <ExpensesList />
            </section>
        </main>
    )
}

import React from 'react'
import Title from '../components/Title'
import Button from '../components/Button'
import ExpensesForm from './components/ExpensesForm'
import ExpensesList from './components/ExpensesList'

export default function ExpensesCalculatorApp() {
    document.body.style.background = '#eee'

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
                    <ExpensesForm />
                    <section className='card mt-2 bg-primary text-light'>
                        <div className="card-body">
                            {/* <BudgetSyle> */}
                            <h3>Budget : $</h3>
                            <input type="number" value='' />
                            {/* </BudgetSyle> */}
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

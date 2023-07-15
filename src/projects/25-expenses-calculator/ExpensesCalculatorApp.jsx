import { useState, useRef, useEffect } from 'react'
import Title from '../components/Title'
import Button from '../components/Button'
import ExpensesForm from './components/ExpensesForm'
import ExpensesList from './components/ExpensesList'
import { BudgetStyle } from './components/styles/Budget.style'
import { v4 as uuidV4 } from 'uuid'

const initialExpenses = localStorage.getItem('expenses')
    ? JSON.parse(localStorage.getItem('expenses')) : [];

export default function ExpensesCalculatorApp() {
    document.body.style.background = '#eee'
    const [expenses, setExpenses] = useState(initialExpenses);

    const [date, setDate] = useState('')
    const [amount, setAmount] = useState('')
    const [charge, setCharge] = useState('')
    const [budget, setBudget] = useState('')

    const [id, setId] = useState(0)

    const changeBudget = e => {
        // setBudget(e.target.value)
        setBudget(inputBudget.current.value)
    }

    const handleCharge = (e) => {
        setCharge(e.target.value)
    }
    const handleDate = (e) => {
        setDate(e.target.value)
    }
    const handleAmount = (e) => {
        setAmount(e.target.value);
    }

    let edit;
    const handleSubmit = (e) => {
        e.preventDefault();
        if (date !== '' && charge !== '' && amount > 0) {
            if (edit) {
                let tempExpenses = expenses.map((item) => {
                    return item.id === id ? { ...item, date, charge, amount }
                        : item;
                })
                setExpenses(tempExpenses)
            } else {
                const singleExpense = { id: uuidV4(), date, charge, amount }
                setExpenses([...expenses, singleExpense])
            }
        }
    }

    let inputBudget = useRef()
    useEffect(() => {
        inputBudget.current.value === '' && inputBudget.current.focus();
        localStorage.setItem('expenses', JSON.stringify(expenses))
    }, [expenses])

    // Handle Clear all expenses
    const clearAllExpenses = () => {
        setExpenses([])
        //Alert
    }

    //handle delete one expense
    const handleDelete = (id) => {
        if (window.confirm('Delete expense?')) {
            let filteredExpense = expenses.filter(expense => expense.id !== id)
            setExpenses(filteredExpense);
            // todo alert
        }
    }

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
                    <ExpensesForm date={date} handleDate={handleDate}
                        charge={charge} handleCharge={handleCharge}
                        amount={amount} handleAmount={handleAmount}
                        handleSubmit={handleSubmit} />
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
                <section>
                    <ExpensesList expenses={expenses}
                        handleDelete={handleDelete}
                        // handleEdit={handleEdit}
                        handleClearAllExpenses={clearAllExpenses}
                    />
                </section>
            </section>


        </main>
    )
}

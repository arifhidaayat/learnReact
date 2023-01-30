import React, { useState } from 'react'
import Expenses from './components/Expenses/Expenses.js'
import NewExpense from './components/New Expense/NewExpense.js'

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 15000,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 1000000, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 500000,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 750000,
    date: new Date(2021, 5, 12),
  },
]

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    })
  }

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </>
  )
}

export default App

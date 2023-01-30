import React, { useState } from 'react'
import './Expenses.css'
import ExpenseItem from './ExpenseItem.js'
import Card from '../UI Control/Card'
import ExpensesFilter from '../ExpenseFilter/ExpensesFilter'

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2023')
  const setExpensesFilter = (filterValue) => {
    setFilteredYear(filterValue)
  }
  const filteredExpenses = props.items.filter((expenses) => {
    return expenses.date.getFullYear().toString() === filteredYear
  })
  let expenseContent = <p>No expense found.</p>
  if (filteredExpenses.length > 0) {
    expenseContent = filteredExpenses.map((expenses) => (
      <ExpenseItem
        key={expenses.id}
        title={expenses.title}
        amount={expenses.amount}
        date={expenses.date}
      />
    ))
  }
  return (
    <Card className="expenses">
      <ExpensesFilter value={filteredYear} onFilter={setExpensesFilter} />
      {expenseContent}
    </Card>
  )
}

export default Expenses

import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('')
  const [enteredDate, setEnteredDate] = useState('')
  const changeTitleHandler = (event) => {
    setEnteredTitle(event.target.value)
  }
  const changeAmountHandler = (event) => {
    setEnteredAmount(event.target.value)
  }
  const changeDateHandler = (event) => {
    setEnteredDate(event.target.value)
  }
  return (
    <form>
      <div className="new-expense__controls">
        <label>Title</label>
        <input type="text" onChange={changeTitleHandler} />
      </div>
      <div className="new-expense__controls">
        <label>Amount</label>
        <input
          type="number"
          min="0.01"
          step="0.01"
          onChange={changeAmountHandler}
        />
      </div>
      <div className="new-expense__controls">
        <label>Date</label>
        <input
          type="date"
          min="2020-01-01"
          max="2023-12-31"
          onChange={changeDateHandler}
        />
      </div>
      <div className="new-expense__actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}

export default ExpenseForm

import React, { useState } from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate.js'
import Card from '../UI Control/Card.js'

function ExpenseItem(props) {
  // function handleClick
  const [title, setTitle] = useState(props.title)

  const handleClick = () => {
    setTitle('Updated!')
    console.log(title)
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount} IDR</div>
      </div>
      <button onClick={handleClick}>Change Title</button>
    </Card>
  )
}

export default ExpenseItem

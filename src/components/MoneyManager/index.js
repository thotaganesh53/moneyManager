import {Component} from 'react'

import {v4} from 'uuid'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    transactionElements: [],
    transactionTitle: '',
    transactionAmount: '',
    transactionOption: transactionTypeOptions[0].optionId,
  }

  transactionDetails = event => {
    event.preventDefault()
    const {
      transactionElements,
      transactionTitle,
      transactionAmount,
      transactionOption,
    } = this.state

    const typeOption = transactionTypeOptions.find(
      eachItem => eachItem.optionId === transactionOption,
    )

    const {displayText} = typeOption

    const listsOfTransaction = {
      id: v4(),
      title: transactionTitle,
      amount: parseInt(transactionAmount),
      option: displayText,
    }

    this.setState(() => ({
      transactionElements: [...transactionElements, listsOfTransaction],
      transactionTitle: '',
      transactionAmount: '',
      transactionOption: transactionTypeOptions[0].optionId,
    }))
  }

  updatedHistory = id => {
    const {transactionElements} = this.state
    const result = transactionElements.filter(eachItem => eachItem.id !== id)

    this.setState(() => ({transactionElements: result}))
  }

  changeTitle = event => {
    console.log(event.target.value)
    this.setState(() => ({
      transactionTitle: event.target.value,
    }))
  }

  changeAmount = event => {
    this.setState(() => ({
      transactionAmount: event.target.value,
    }))
  }

  changeDifference = event => {
    console.log(event.target.value)
    this.setState(() => ({
      transactionOption: event.target.value,
    }))
  }

  expensesAmount = () => {
    const {transactionElements} = this.state

    let expenses = 0
    transactionElements.forEach(eachItem => {
      if (!Number.isNaN(eachItem.amount)) {
        if (eachItem.option === transactionTypeOptions[1].displayText) {
          expenses += eachItem.amount
        }
      }
    })
    return expenses
  }

  incomeAmount = () => {
    const {transactionElements} = this.state

    let income = 0

    transactionElements.forEach(eachItem => {
      if (!Number.isNaN(eachItem.amount)) {
        if (eachItem.option === transactionTypeOptions[0].displayText) {
          income += eachItem.amount
        }
      }
    })
    return income
  }

  balanceAmount = () => {
    const {transactionElements} = this.state
    let balance = 0
    let income = 0
    let expense = 0

    transactionElements.forEach(eachItem => {
      console.log(typeof eachItem.amount)
      if (!Number.isNaN(eachItem.amount)) {
        if (eachItem.option === transactionTypeOptions[0].displayText) {
          income += eachItem.amount
        } else {
          expense += eachItem.amount
        }
      }
    })

    balance = income - expense
    return balance
  }

  render() {
    const {
      transactionTitle,
      transactionAmount,
      transactionElements,
      transactionOption,
    } = this.state
    console.log(transactionElements)
    const totalBalance = this.balanceAmount()
    const totalIncome = this.incomeAmount()
    const totalExpenses = this.expensesAmount()

    return (
      <div className="Home">
        <div className="container">
          <div className="user-details">
            <h1 className="heading">Hi, Richard</h1>
            <p className="description">
              {' '}
              Welcome back to your{' '}
              <span className="title-name">Money Manager</span>
            </p>
          </div>
          <div className="container-money-details">
            <MoneyDetails
              totalBalance={totalBalance}
              totalIncome={totalIncome}
              totalExpenses={totalExpenses}
            />
          </div>
          <div className="bottom-container">
            <form
              className="form-container-details"
              onSubmit={this.transactionDetails}
            >
              <h1 className="form-heading">Add Transaction</h1>
              <div className="form-container">
                <label className="label-color" htmlFor="title">
                  TITLE
                </label>
                <input
                  type="text"
                  value={transactionTitle}
                  id="title"
                  onChange={this.changeTitle}
                  className="text-box"
                  placeholder="TITLE"
                />
              </div>
              <div className="form-container">
                <label className="label-color" htmlFor="amount">
                  AMOUNT
                </label>
                <input
                  type="text"
                  value={transactionAmount}
                  id="amount"
                  onChange={this.changeAmount}
                  className="text-box"
                  placeholder="AMOUNT"
                />
              </div>
              <div className="form-container">
                <label className="label-color" htmlFor="amount-type">
                  TYPE
                </label>
                <select
                  className="select-box"
                  onChange={this.changeDifference}
                  id="amount-type"
                  value={transactionOption}
                >
                  <option
                    className="option-color"
                    value={transactionTypeOptions[0].optionId}
                  >
                    {transactionTypeOptions[0].displayText}
                  </option>
                  <option value={transactionTypeOptions[1].optionId}>
                    {transactionTypeOptions[1].displayText}
                  </option>
                </select>
              </div>
              <button type="submit" className="button">
                Add
              </button>
            </form>
            <ul className="form-container-details">
              <h1 className="heading-container-history">History</h1>
              <div className="history-container-elements">
                <p className="text-value1">Title</p>
                <p className="text-value1">Amount</p>
                <p className="text-value1">Type</p>
                <p className="text-value1">{}</p>
              </div>
              {transactionElements.map(eachItem => (
                <TransactionItem
                  key={eachItem.id}
                  details={eachItem}
                  updatedHistory={this.updatedHistory}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager

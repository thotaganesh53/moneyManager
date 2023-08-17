// Write your code here

import './index.css'

const TransactionItem = props => {
  const {details, updatedHistory} = props
  const {id, title, amount, option} = details

  const deletedHistory = () => {
    updatedHistory(id)
  }

  return (
    <li className="transaction-container-elements">
      <p data-testid="balanceAmount" className="text-value">
        {title}
      </p>
      <p data-testid="incomeAmount" className="text-value">
        {amount}
      </p>
      <p data-testid="expensesAmount" className="text-value">
        {option}
      </p>
      <button
        className="delete-button-image"
        data-testid="delete"
        type="button"
        onClick={deletedHistory}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          className="delete-button"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem

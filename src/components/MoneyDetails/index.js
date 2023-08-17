// Write your code here

import './index.css'

const MoneyDetails = props => {
  const {totalBalance, totalIncome, totalExpenses} = props

  return (
    <>
      <div className="your-balance">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="image-balance"
        />
        <div className="amount-container">
          <p className="balance-amount">Your Balance</p>
          <p data-testid="balanceAmount" className="balance-money">
            Rs {totalBalance}
          </p>
        </div>
      </div>
      <div className="income-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png "
          alt="income"
          className="image-balance"
        />
        <div>
          <p className="balance-amount">Your Income</p>
          <p data-testid="incomeAmount" className="balance-money">
            Rs {totalIncome}
          </p>
        </div>
      </div>
      <div className="expense-container ">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png "
          alt="expenses"
          className="image-balance"
        />
        <div>
          <p className="balance-amount">Your Expenses</p>
          <p data-testid="expensesAmount" className="balance-money">
            Rs {totalExpenses}
          </p>
        </div>
      </div>
    </>
  )
}
export default MoneyDetails

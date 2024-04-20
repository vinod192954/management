// Write your code here
import './index.css'

const Moneydetails = props => {
  const {balance, Income, expenses} = props
  return (
    <div className="transactionsContainer">
      <div className="balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="img-ctm"
        />
        <div>
          <p>Your Balance</p>
          <p data-testid="balanceAmount"> Rs {balance}</p>
        </div>
      </div>
      <div className="Income-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="img-ctm"
        />
        <div>
          <p>Your Income</p>
          <p data-testid="incomeAmount"> Rs {Income}</p>
        </div>
      </div>
      <div className="Expenses-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="img-ctm"
        />
        <div>
          <p>Your Expenses</p>
          <p data-testid="expensesAmount"> Rs {expenses}</p>
        </div>
      </div>
    </div>
  )
}
export default Moneydetails

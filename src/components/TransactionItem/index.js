import './index.css'

const TransactionItem = props => {
  const {Transaction, deleteTransactionHistory} = props
  const {id, title, amountInput, transactionType} = Transaction
  const onDeleteHistory = () => {
    deleteTransactionHistory(id)
  }
  return (
    <li className="history" key={id}>
      <p>{title}</p>
      <p>Rs {amountInput}</p>
      <p>{transactionType}</p>
      <button
        type="button"
        className="btn-custom"
        data-testid="delete"
        onClick={onDeleteHistory}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-image"
        />
      </button>

      <div>
        <hr />
      </div>
    </li>
  )
}

export default TransactionItem

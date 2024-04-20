import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import Moneydetails from '../MoneyDetails'

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

class MoneyManager extends Component {
  state = {
    amountInput: '',
    transactionList: [],
    title: '',
    transactionType: transactionTypeOptions[0].displayText,
    balance: 0,
    Income: 0,
    expenses: 0,
  }

  updateTypeOfAmount = event => {
    this.setState({transactionType: event.target.value})
  }
  onChangeAmount = event => {
    this.setState({amountInput: event.target.value})
  }

  updateTitle = event => {
    this.setState({title: event.target.value})
  }

  submitDetails = event => {
    const {
      title,
      transactionType,
      amountInput,
      Income,
      balance,
      transactionList,
    } = this.state
    event.preventDefault()
    if (transactionType === 'Income') {
      this.setState(prevState => ({
        balance: parseInt(prevState.balance) + parseInt(amountInput),
      }))
      this.setState({Income: amountInput})
    } else if (transactionType === 'Expenses') {
      this.setState(prevState => ({
        balance: parseInt(prevState.balance) - parseInt(amountInput),
      }))
      this.setState(prevState => ({
        expenses: parseInt(prevState.expenses) + parseInt(amountInput),
      }))
    }

    const newTransaction = {
      id: uuidv4(),
      title: title,
      amountInput: amountInput,
      transactionType,
    }

    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newTransaction],
      amountInput: '',
      title: '',
    }))
  }

  deleteTransactionHistory = id => {
    const {transactionList} = this.state
    const fiteredData = transactionList.filter(
      eachTransaction => eachTransaction.id !== id,
    )
    this.setState({transactionList: fiteredData})
  }

  render() {
    const {balance, Income, expenses, transactionList} = this.state

    console.log(expenses)

    return (
      <div>
        <div className="Welcome-container">
          <div>
            <h1>Hi, Richard</h1>
            <p>
              Welcome back to your <span>Money Manager</span>
            </p>
          </div>
        </div>
        <div>
          <Moneydetails balance={balance} Income={Income} expenses={expenses} />
        </div>
        <div className="transactionAndHistory">
          <div>
            <form className="form-custom" onSubmit={this.submitDetails}>
              <h1>Add Transaction</h1>
              <div className="title-input">
                <label htmlFor="title">TITLE</label>
                <input
                  id="title"
                  placeholder="TITLE"
                  onChange={this.updateTitle}
                  type="text"
                />
              </div>
              <div className="amount-input">
                <label htmlFor="amount">AMOUNT</label>
                <input
                  id="amount"
                  placeholder="AMOUNT"
                  type="text"
                  onChange={this.onChangeAmount}
                />
              </div>
              <div className="options-input">
                <p>Type</p>
                <select id="options" onChange={this.updateTypeOfAmount}>
                  <option selected value={transactionTypeOptions[0].optionId}>
                    Income
                  </option>
                  <option value={transactionTypeOptions[1].optionId}>
                    Expenses
                  </option>
                </select>
              </div>
              <div>
                <button type="submit" className="btn" onClick={this.getList}>
                  Add
                </button>
              </div>
            </form>
          </div>

          <div className="hisory-container">
            <h1>History</h1>
            <ul className="transaction-history">
              <div className="headings">
                <p>Title</p>
                <p>Amount</p>
                <p>Type</p>
              </div>
              <hr className="style" />
              {transactionList.map(eachTransaction => (
                <TransactionItem
                  Transaction={eachTransaction}
                  deleteTransactionHistory={this.deleteTransactionHistory}
                  key={eachTransaction.id}
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

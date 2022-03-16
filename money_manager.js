uRL :  https://moneymanagerai.ccbp.tech/


##################################################       money_manager.index.js



import './index.css'
import {Component} from 'react'
import {v4 as uuidV4} from 'uuid'
import MoneyDetails from '../MoneyDetails/index'
import TransactionItem from '../TransactionItem'

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
    title: '',
    amount: '',
    active: transactionTypeOptions[0].optionId,
    lt: [],
  }

  titleChanged = event => {
    this.setState({title: event.target.value})
  }

  amountChanged = event => {
    this.setState({amount: event.target.value})
  }

  activeChanged = event => {
    this.setState({active: event.target.value})
  }

  formSubmitted = event => {
    event.preventDefault()

    const {active, amount, title} = this.state

    const obj = {
      title,
      amount,
      active,
      id: uuidV4(),
    }

    this.setState(prevState => ({
      lt: [...prevState.lt, obj],
      title: '',
      amount: '',
      active: transactionTypeOptions[0].optionId,
    }))
  }

  calling = id => {
    const {lt} = this.state
    const list = lt.filter(eachItem => eachItem.id !== id)
    this.setState({lt: list})
  }

  balanceAmount = () => {
    const {lt} = this.state
    let bal = 0
    let inc = 0
    let exp = 0

    lt.forEach(eachItem => {
      if (eachItem.active === transactionTypeOptions[0].optionId) {
        inc += parseInt(eachItem.amount)
      } else {
        exp += parseInt(eachItem.amount)
      }
    })
    bal = inc - exp
    return bal
  }

  incomeAmount = () => {
    let inc = 0

    const {lt} = this.state

    lt.forEach(eachItem => {
      if (eachItem.active === transactionTypeOptions[0].optionId) {
        inc += parseInt(eachItem.amount)
      }
    })

    return inc
  }

  expenseAmount = () => {
    let exp = 0

    const {lt} = this.state

    lt.forEach(eachItem => {
      if (eachItem.active === transactionTypeOptions[1].optionId) {
        exp += parseInt(eachItem.amount)
      }
    })

    return exp
  }

  render() {
    const {lt, title, amount, active} = this.state
    const balance = this.balanceAmount()
    const income = this.incomeAmount()
    const expense = this.expenseAmount()

    console.log(lt)
    return (
      <div className="bg-container">
        <div className="top">
          <h1 className="heading">HI,Anitha</h1>
          <p className="para">
            Welcome back to your <span className="span">Money Manager</span>
          </p>
        </div>
        <div className="middle">
          <ul className="unordered">
            <MoneyDetails inc={income} exp={expense} bal={balance} />
          </ul>
        </div>
        <div className="bottom">
          <div className="bottom1">
            <h1 className="head">Add Transaction</h1>
            <form className="form" onSubmit={this.formSubmitted}>
              <label className="text" htmlFor="title">
                TITLE
              </label>
              <input
                className="input"
                id="title"
                type="text"
                placeholder="TITLE"
                onChange={this.titleChanged}
                value={title}
              />

              <label htmlFor="amount" className="text">
                AMOUNT
              </label>
              <input
                className="input"
                id="amount"
                type="text"
                placeholder="AMOUNT"
                onChange={this.amountChanged}
                value={amount}
              />
              <label className="text" htmlFor="drop">
                TYPE
              </label>
              <select
                id="drop"
                className="select"
                onChange={this.activeChanged}
                value={active}
              >
                {transactionTypeOptions.map(eachItem => (
                  <option
                    key={eachItem.optionId}
                    value={eachItem.optionId}
                    type={eachItem.displayText}
                  >
                    {eachItem.displayText}
                  </option>
                ))}
              </select>
              <div>
                <button className="button" type="submit">
                  Add
                </button>
              </div>
            </form>
          </div>
          <div className="bottom2">
            <h1 className="history">History</h1>

            <div className="his-card">
              <p className="history-para">Title</p>
              <p className="history-para">Amount</p>
              <p className="history-para">Type</p>
            </div>
            <ul className="unordered2">
              {lt.map(eachItem => (
                <TransactionItem
                  details={eachItem}
                  key={eachItem.id}
                  calling={this.calling}
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




##############################################################################                money_manager.index.css





* {
  box-sizing: border-box;
}
body {
  margin: 0px;
}
.bg-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  padding-left: 120px;
  padding-right: 120px;
}
.top {
  background-image: url('https://assets.ccbp.in/frontend/react-js/money-manager/money-manager-bg.png');
  background-size: cover;
  height: 160px;
  width: 60vw;
  display: flex;
  flex-direction: column;
  padding: 15px;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 30px;
}
.heading {
  font-family: 'roboto';
  font-weight: 600;
  color: #1e293b;
  font-size: 36px;
}
.para {
  font-family: 'roboto';
  font-weight: 500;
  color: #475569;
  font-size: 20px;
  margin-top: 0px;
}
.span {
  font-family: 'roboto';
  font-weight: 500;
  color: #0b69ff;
  font-size: 25px;
}
.middle {
  height: 140px;
}
.bottom {
  height: 100px;
  width: 100vw;
  border-radius: 10px;
  border-color: #cbd5e1;
  display: flex;
  flex-direction: row;
  margin-top: 50px;
  justify-content: center;
}

.bottom1 {
  width: 450px;
  border-width: 3px;
  min-height: 340px;
  border-radius: 10px;
  border-style: solid;
  border-color: #d7dfe9;
  padding: 15px;
  margin-right: 42px;
}
.text {
  font-family: 'roboto';
  font-weight: 500;
  color: #475569;
  font-size: 15px;
}
.input {
  height: 26px;
  width: 230px;
  border-color: #cbd5e1;
  border-radius: 6px;
  padding: 3px;
  margin-top: 4px;
  margin-bottom: 10px;
  border-width: 2px;
}
.his-card {
  display: flex;
  width: 380px;
  align-items: center;
  justify-content: space-between;
  border: 2px solid #d7dfe9;
  padding-left: 30px;
  padding-right: 100px;
  margin-left: 40px;
}
.unordered2 {
  list-style-type: none;
}

.history-para {
  font-weight: 500;
  font-size: 16px;
  font-family: 'roboto';
  color: #334155;
}
.history {
  font-weight: 500;
  font-size: 30px;
  font-family: 'roboto';

  margin-bottom: 6px;
}
.button {
  background-color: #0b69ff;
  border-radius: 4px;
  height: 32px;
  width: 60px;
  border: 0px;
  color: #ffffff;
  padding: 3px;
  margin-top: 18px;
}
.form {
  display: flex;
  flex-direction: column;
}
.select {
  margin-top: 12px;
  border-color: #cbd5e1;
  border-radius: 6px;
  padding: 3px;
  height: 26px;
  width: 230px;
}
.head {
  font-family: 'roboto';
  font-weight: 500;
  color: #1e293b;
  font-size: 26px;
}

.bottom2 {
  width: 460px;
  min-height: 340px;
  border-radius: 10px;
  border-style: solid;
  border-color: #d7dfe9;
  padding: 15px;
  margin-left: 42px;
  border-width: 3px;
}
.unordered {
  list-style-type: solid;
  display: flex;
  flex-direction: row;
}





#######################################################################          money_details.index.js




import './index.css'

const MoneyDetails = props => {
  const {inc, bal, exp} = props
  return (
    <li className="cards">
      <div className="car card1">
        <img
          alt="balance"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          className="small-image"
        />
        <div className="sub-card">
          <p className="paragraph">Your Balance</p>
          <p className="money" testid="balanceAmount">
            Rs <span className="span">{bal}</span>
          </p>
        </div>
      </div>
      <div className="car card2">
        <img
          alt="income"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          className="small-image"
        />
        <div className="sub-card">
          <p className="paragraph">Your Income</p>
          <p className="money" testid="incomeAmount">
            Rs <span className="span">{inc}</span>
          </p>
        </div>
      </div>
      <div className="car card3">
        <img
          alt="expenses"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          className="small-image"
        />
        <div className="sub-card">
          <p className="paragraph">Your Expenses</p>
          <p className="money" testid="expensesAmount">
            Rs <span className="span">{exp}</span>
          </p>
        </div>
      </div>
    </li>
  )
}

export default MoneyDetails




######################################################################################################       money_details.index.css



.cards {
  display: flex;
  flex-direction: row;
}

.paragraph {
  font-family: 'roboto';
  font-weight: 500;
  color: #1e293b;

  font-size: 18px;
}
.money {
  font-family: 'roboto';
  font-weight: 500;
  color: #334155;
  margin-left: 2px;
  font-size: 16px;
}
.span {
  font-family: 'roboto';
  font-weight: 600;
  color: #334155;

  font-size: 32px;
}
.car {
  display: flex;
  flex-direction: row;
  padding: 12px;
  border-radius: 20px;
  height: 140px;
  width: 300px;
  margin-left: 60px;
}
.sub-card {
  display: flex;
  flex-direction: column;
  margin-left: 42px;
}
.card1 {
  background-color: #ecfccb;
  border: 2px solid #84cc16;
}
.card2 {
  background-color: #cffafe;

  border: 2px solid #06b6d4;
}
.card3 {
  background-color: #ede9fe;
  border: 2px solid #7c3aed;
  margin-right: 100px;
}
.small-image {
  height: 60px;
  width: 60px;
  margin-top: 18px;
  margin-left: 12px;
}




############################################################################          transaction.index.js



import './index.css'

const TransactionItem = props => {
  const {details, calling} = props
  const {title, amount, active, id} = details

  const btnClicked = () => {
    calling(id)
    console.log(id)
  }

  return (
    <li className="transaction-card">
      <p className="transaction-para">{title}</p>
      <p className="transaction-para">
        Rs <span>{amount}</span>
      </p>
      <p className="transaction-para">{active}</p>
      <div>
        <button
          type="button"
          className="butn"
          testid="delete"
          onClick={btnClicked}
        >
          <img
            alt="delete"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            className="del-button"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem



###########################################################################################         transcation.index.css






.transaction-card {
  margin-top: 0px;
  display: flex;
  width: 380px;
  justify-content: space-between;
  border: 1px solid #d7dfe9;
  padding-left: 40px;
}
.transaction-para {
  font-family: 'roboto';
  font-weight: 500;
  font-size: 12px;
  color: #334155;
}

.butn {
  border: 0px;

  margin-top: 0px;
  background-color: transparent;
}
.del-button {
  height: 30px;
  width: 30px;
}




#########################################################################            index.js


import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)




######################################################################        app.js


import MoneyManager from './components/MoneyManager'

import './App.css'

const App = () => <MoneyManager />

export default App


#######################################################################      app.css

 * {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}









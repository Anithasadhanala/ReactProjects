URL  :- https://balanceamount.ccbp.tech/

###################################################            ****INDEX.JS****


import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)


#######################################################        ****APP.JS****


import CashWithdrawal from './components/CashWithdrawal'

import './App.css'

const denominationsList = [
  {
    id: 1,
    value: 50,
  },
  {
    id: 2,
    value: 100,
  },
  {
    id: 3,
    value: 200,
  },
  {
    id: 4,
    value: 500,
  },
]

const App = () => <CashWithdrawal denominationsList={denominationsList} />

export default App



##################################################################################          ****APP.CSS***


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


#################################################################################         ***COMPONENTS_CASHWITHDRAWL_INDEX.JS****


import {Component} from 'react'
import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 10000}

  balanceBtnClicked = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props

    return (
      <div className="bg-container">
        <div className="cards">
          <div className="profile-card">
            <p className="para">S</p>
            <h1 className="name">S.K Murthy</h1>
          </div>
          <div className="balance-cont">
            <p className="para2">Your Balance</p>
            <div className="balance-card">
              {balance > 0 ? (
                <p className="balance">{balance} </p>
              ) : (
                <p className="balance">0</p>
              )}
            </div>
          </div>
          {balance >= 0 ? null : (
            <p className="para5">Your Balance : 0 Mr.Murthy</p>
          )}
          <p className="withdraw">Withdraw</p>
          <p className="para4">CHOOSE SUM (IN RUPEES)</p>
          <ul className="unordered">
            {denominationsList.map(eachItem => (
              <DenominationItem
                details={eachItem}
                balanceBtnClicked={this.balanceBtnClicked}
                key={eachItem.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal


###############################################################################         ****COMPONENTS_CASHWITHDRAWL_INDEX.CSS****


* {
  box-sizing: border-box;
}
body {
  margin: 0px;
}
.bg-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.cards {
  background-color: #150b3e;
  border: 0px;
  border-radius: 20px;
  padding-top: 30px;
  padding-bottom: 30px;
  padding: 20px;
  width: 50%;
}
.profile-card {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.para {
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 30px;
  color: #7c3aed;
  background-color: #c7d2fe;
  height: 50px;
  width: 50px;
  border: 0px;
  padding-left: 15px;
  padding-top: 8px;
  border-radius: 30px;
}
.name {
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 25px;
  padding-top: 20px;
  padding-left: 8px;
  color: #d4d2db;
}
.balance-cont {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.para2 {
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 25px;
  color: #382f5a;
}
.balance-card {
  display: flex;
  flex-direction: column;
  margin-right: 20px;
}
.para3 {
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 15px;
  color: #382f5a;
}
.withdraw {
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 24px;
  color: #d4d2db;
}
.para4 {
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 18px;
  color: #382f5a;
}
.balance {
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 38px;
  color: #d4d2db;
}
.unordered {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 70%;
}
.para5 {
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 20px;
  color: red;
}
..para5 {
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 20px;
  color: green;
}
@media screen and (max-width: 576px) {
  .cards {
    min-width: 70%;
    padding-top: 5px;
    padding-bottom: 5px;
    padding: 8px;
  }
  .unordered {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .name {
    font-size: 18px;
    padding-top: 30px;
  }
  .para2 {
    font-weight: 500;
    font-size: 16px;
  }
  .balance {
    font-size: 24px;
    padding-bottom: 0px;
    margin-bottom: 0p;
  }
  .para4 {
    font-size: 14px;
  }
}


#############################################################################      ****CPOMPONENTS_DENOMINATIONITEM_INDEX.JS****


import './index.css'

const DenominationItem = props => {
  const {details, balanceBtnClicked} = props
  const {value} = details

  const btnClicked = () => {
    balanceBtnClicked(value)
  }

  return (
    <li className="list">
      <button className="button" type="button" onClick={btnClicked}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem


#############################################################################        ****COMPONENTS_DENOMINATIONITEM_INDEX.CSS****


.list {
  list-style-type: none;
  padding: 0px;
}
.button {
  background-color: #585076;
  border: 1px solid #c4c4c4;
  color: #d4d2db;
  font-weight: 600;
  font-size: 28px;
  height: 40px;
  width: 180px;
  border-radius: 6px;
  margin-bottom: 10px;
  margin-left: 10px;
}
@media screen and (max-width: 576px) {
  .button {
    height: 30px;
    width: 120px;
    padding-bottom: 2px;
  }
}

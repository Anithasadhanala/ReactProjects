URL   :   https://namesurname.ccbp.tech/


####################################################           ****index.js******


import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)


######################################################          ****APP.JS****



import ShowHide from './components/ShowHide'

import './App.css'

const App = () => <ShowHide />

export default App


################################################           *****APP.CSS****


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


################################################################################              ****COMPONENTS_INDEX.JS****



import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {first: false, last: false}

  firstClicked = () => {
    this.setState(preState => ({first: !preState.first}))
  }

  lastClicked = () => {
    this.setState(preState => ({last: !preState.last}))
  }

  render() {
    const {first, last} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="btm-card">
          <div className="cards">
            <button
              className="button"
              type="button"
              onClick={this.firstClicked}
            >
              Show/Hide Firstname
            </button>
            {first && <p className="para">Anitha</p>}
          </div>
          <div className="cards">
            <button className="button" type="button" onClick={this.lastClicked}>
              Show/Hide Lastname
            </button>
            {last && <p className="para">Sadhanala</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide


######################################################################################         ****APP.CSS****


* {
  box-sizing: border-box;
}
body {
  margin: 0px;
}
.bg-container {
  background-image: linear-gradient(to right, #fa7257, #fc63a7, #dd1264);
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.heading {
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 40px;
  color: #ffffff;
}
.button {
  background-color: #ffffff;
  font-weight: 500;
  color: #dd1264;
  height: 32px;
  width: 180px;
  border-radius: 5px;
  border: 0px;
}
.btm-card {
  display: flex;
  flex-direction: row;
}
.cards {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 40px;
}
.para {
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 22px;
  color: #000000;
  width: 140px;
  height: 60px;
  background-color: #fddddb;
  padding-right: 120px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 40px;
}

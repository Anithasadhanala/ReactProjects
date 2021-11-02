URL  :  https://phrasecounter.ccbp.tech


##################################################          ****INDEX.JS****


import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)


########################################################       ****APP.JS****


import LettersCalculator from './components/LettersCalculator'

import './App.css'

const App = () => <LettersCalculator />

export default App


##################################################################              ****APP.CSS****


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



#################################################################################        ****LETTERSCALCULATOR_INDEX,JS****


import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  inputChanged = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
      
        <div className="cards">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <div className="input-card">
            <label className="label" htmlFor="inputEle">
              Enter the phrase
            </label>
            <input
              className="input"
              id="inputEle"
              onChange={this.inputChanged}
              placeholder="Enter the phrase"
              type="text"
            />
          </div>
          <p className="para">No.of letters: {count} </p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png "
          className="image"
          alt="letters calculator"
        />
      </div>
    )
  }
}
export default LettersCalculator


##########################################################################################################      ****LETTERSCALCULATOR_INDEX.CSS****


* {
  box-sizing: border-box;
}
body {
  margin: 0px;
}
.bg-container {
  background-image: linear-gradient(to right, #1d976c, #93f9b9);
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.heading {
  font-family: 'Roboto';
  font-weight: 600px;
  font-size: 40px;
  width: 60%;
  color: #ffffff;
}
.label {
  font-family: 'Roboto';
  font-weight: 500px;
  font-size: 15px;
  color: #ffffff;
  width: 300px;
}
.input {
  border: 1px solid #e4e7eb;
  background-color: transparent;
  width: 280px;
  margin-bottom: 30px;
  border-radius: 8px;
  height: 25px;
  color: #ffffff;
  font-weight: 500px;
}
.para {
  background-color: #ffffff;
  border: 0px;
  border-radius: 12px;
  width: 140px;
  font-weight: 500px;
  font-family: 'Roboto';
  font-size: 22px;
  color: #219a6f;
  width: 250px;
  height: 40px;
  padding-top: 8px;
  padding-left: 12px;
}
.image {
  height: 400px;
  width: 400px;
  order: 2;
}
.input-card {
  display: flex;
  flex-direction: column;
}
.cards {
  order: 1;
}
@media screen and (max-width: 576px) {
  .heading {
    font-size: 30px;
    width: 40%;
  }
  .bg-container {
    height: 100vh;
    flex-direction: column;
    justify-content: center;
  }
  .image {
    order: 1;
    height: 260px;
    width: 260px;
  }
  .cards {
    order: 2;
    margin-left: 20px;
  }
  .heading {
    width: 80%;
  }
}


URL   :   https://randomevenodd.ccbp.tech

######################################################      ****INDEX.JS****


import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)


###################################################     ****APP.JS****


import EvenOddApp from './components/EvenOddApp'

import './App.css'

const App = () => <EvenOddApp />

export default App

####################################################     ****APP.CSS****


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


#########################################################################################      ****COMPONENT_INDEX.JS****


import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {random: 0}

  btnClicked = () => {
    this.setState(preState => ({
      random: preState.random + Math.ceil(Math.random() * 100),
    }))
  }

  render() {
    const {random} = this.state

    const number = random % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="bg-container">
        <h1 className="heading">Count {random}</h1>
        <p className="paragraph">Count is {number}</p>
        <div>
          <button className="button" type="button" onClick={this.btnClicked}>
            Increment
          </button>
        </div>
        <p className="para">*Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp


###################################################################################       ****COMPONENT_INDEX.CSS****


* {
  box-sizing: border-box;
}
body {
  margin: 0px;
}
.bg-container {
  background-image: linear-gradient(to bottom, #ff6e7f, #bfe9ff);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.heading {
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 60px;
  color: #0f172a;
}
.paragraph {
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 26px;
  color: #334155;
}
.para {
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 14px;
  color: #334155;
}
.button {
  font-weight: 500;
  background-color: #ffffff;
  color: #0f172a;
  border: 0px;
  border-radius: 6px;
  height: 28px;
  width: 90px;
}



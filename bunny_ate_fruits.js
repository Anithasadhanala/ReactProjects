URL   :   bunnyate.ccbp.tech


###########################################

****INDEX.JS****


import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)


####################################################

****APP.JS****


import FruitsCounter from './components/FruitsCounter'
import './App.css'
const App = () => <FruitsCounter />
export default App

###################################################

****APP.CSS****

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


##########################################################################


****COMPONENTS_INDEX.JS****


import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  mangoClicked = () => {
    this.setState(preState => ({mango: preState.mango + 1}))
  }

  bananaClicked = () => {
    this.setState(preState => ({banana: preState.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state
    return (
      <div className="bg-container">
        <div className="cards">
          <h1 className="heading">
            Bunny ate <span className="span">{mango}</span> mangoes{' '}
            <span className="span">{banana}</span> bananas
          </h1>
          <div className="btm-card">
            <div className="image-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="image"
              />
              <div>
                <button
                  className="button"
                  type="button"
                  onClick={this.mangoClicked}
                >
                  Eat Mango
                </button>
              </div>
            </div>
            <div className="image-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="image"
              />
              <div>
                <button
                  className="button"
                  type="button"
                  onClick={this.bananaClicked}
                >
                  Eat banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter


##############################################################################


****COMPONENTS_APP.CSS*****


* {
  box-sizing: border-box;
}
body {
  margin: 0px;
}
.bg-container {
  background-color: #ffd569;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.cards {
  background-color: #ffffff;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 80%;
}
.btm-card {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.heading {
  font-family: 'Roboto';
  font-weight: 700px;
  color: #000000;
  font-size: 40px;
}
.span {
  font-family: 'Roboto';
  font-weight: 700px;
  color: #ffd569;
  font-size: 40px;
}
.image {
  height: 200px;
  width: 160px;
}
.button {
  background-color: #007bff;
  color: #ffffff;
  border: 0px;
  border-radius: 5px;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 15px;
  cursor: pointer;
  height: 40px;
  width: 100px;
  margin-top: 20px;
}
.image-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 100px;
}

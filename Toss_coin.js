URL :  https://cointossed.ccbp.tech

##################################################     ****INDEX.JS****
  
  
  import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)


######################################################      ****APP.JS****
  
  
  
 import CoinToss from './components/CoinToss'

import './App.css'

const App = () => <CoinToss />

export default App


####################################################        ****APP.CSS****


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


#######################################################################################            ****COMPONENTS_COINTOSS_INDEX.JS****
  
  
  
  import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {t: 0, h: 0, tai: 0, img: true}

  btnClicked = () => {
    const val = Math.floor(Math.random() * 2)

    if (val === 0) {
      this.setState(prevState => ({
        t: prevState.t + 1,
        h: prevState.h + 1,
        img: true,
      }))
    } else {
      this.setState(prevState => ({
        t: prevState.t + 1,
        tai: prevState.tai + 1,
        img: false,
      }))
    }
  }

  render() {
    const {t, h, tai, img} = this.state
    const image = img
      ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    return (
      <div className="bg-container">
        <div className="cards">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img src={image} alt="toss result" className="image" />
          <div>
            <button className="button" type="button" onClick={this.btnClicked}>
              Toss Coin
            </button>
          </div>
          <div className="inc">
            <p className="total">Total: {t}</p>
            <p className="total">Heads: {h}</p>
            <p className="total">Tails: {tai}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss



##################################################################################       ****COMPONENTS_COINTOSS_INDEX.CSS****
  
  
  * {
  box-sizing: border-box;
}
body {
  margin: 0px;
}
.bg-container {
  background-image: linear-gradient(to right, #f9d423, #e2a139);
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.cards {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
}
.heading {
  font-family: 'roboto';
  font-size: 30px;
  font-weight: 600;
  color: #a35200;
}
.para {
  font-family: 'roboto';
  font-size: 20px;
  font-weight: 500;
  color: #334155;
}
.button {
  background-color: #f9d423;
  border-radius: 8px;
  color: #e2a139;
  font-weight: 500;
  border: 0px;
  padding: 8px;
  margin-top: 20px;
}
.total {
  font-family: 'roboto';
  font-size: 18px;
  font-weight: 500;
  color: #475569;
  margin-right: 12px;
}
.cards {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff;
  padding: 40px;
}
.image {
  height: 120px;
  width: 120px;
}
.inc {
  display: flex;
  flex-direction: row;
  justify-content: center;
}






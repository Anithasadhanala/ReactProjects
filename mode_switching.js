URL   :  https://modeswitcher.ccbp.tech

################################################


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

#####################################################


****APP.JS****


import LightDarkMode from './components/LightDarkMode'
import './App.css'
const App = () => <LightDarkMode />
export default App


##########################################################


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


##################################################################################


****COMPONENT_INDEX.JS****


import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {but: 'Light Mode', cards: 'dark-mode', head: 'light-head'}

  btnClicked = () => {
    const {but} = this.state

    if (but === 'Dark Mode') {
      this.setState({
        but: 'Light Mode',
        cards: 'dark-mode',
        head: 'light-head',
      })
    } else {
      this.setState({
        but: 'Dark Mode',
        cards: 'light-mode',
        head: 'dark-head',
      })
    }
  }

  render() {
    const {but, cards, head} = this.state

    return (
      <div className="bg-container">
        <div className={cards}>
          <h1 className={head}>Click to Change Mode</h1>
          <div>
            <button className="button" type="button" onClick={this.btnClicked}>
              {but}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default LightDarkMode



############################################################################################


****COMPONENT_INDEX.CSS****


* {
  box-sizing: border-box;
}
body {
  margin: 0px;
}

.bg-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 220px;
}
.dark-mode {
  background-color: #000000;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  padding: 40px;
}
.light-mode {
  background-color: #ffffff;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  padding: 40px;
}
.light-head {
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 30px;
  color: #ffffff;
}
.dark-head {
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 30px;
  color: #000000;
}
.button {
  height: 34px;
  width: 100px;
  color: #000000;
  font-family: 'roboto';
  font-weight: 500;
  border-radius: 6px;
  border: 2px solid #000000;
}

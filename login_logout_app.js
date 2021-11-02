URL  :   https://loginprocess.ccbp.tech

################################################     ****INDEX.JS****


import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)


#####################################################      ****APP.JS****


import Home from './components/Home'

import './App.css'

const App = () => <Home />

export default App


########################################################     ****APP.CSS***


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


#####################################################################################     ****COMPONENTS_HOME_INDEX.JS****



import {Component} from 'react'

import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

import './index.css'

class Home extends Component {
  state = {isLogedIn: false}

  btnClicked = () => {
    this.setState(preState => ({isLogedIn: !preState.isLogedIn}))
  }

  render() {
    const {isLogedIn} = this.state
    return (
      <div className="bg-container">
        <div className="cards">
          <Message login={isLogedIn} />
          {isLogedIn ? (
            <Logout log={this.btnClicked} />
          ) : (
            <Login log={this.btnClicked} />
          )}
        </div>
      </div>
    )
  }
}

export default Home


########################################################################        ****COMPONENTS_HOME_INDEX.CSS****


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
  justify-content: center;
  align-items: center;
}
.cards {
  background-image: linear-gradient(to bottom, #2b2c49, #b5b9ff);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  height: 300px;
  width: 400px;
}


#############################################################################           ****COMPONENTS_MESSAGE_INDEX.JS****


import './index.css'

const Message = props => {
  const {login} = props

  const text = login ? 'Welcome User' : 'Please Login'

  return <h1 className="para">{text}</h1>
}

export default Message


#########################################################################                ****COMPONENTS_MESSAGE_INDEX.CSS****


.para {
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 40px;
  color: #ffffff;
}


#########################################################             *****COMPONENTS_LOGIN_INDEX.JS****


import './index.css'

const Login = props => {
  const {log} = props

  return (
    <button className="button" type="button" onClick={log}>
      Login
    </button>
  )
}

export default Login


#############################################################               *****COMPONENTS_LOGIN_INDEX.CSS****


.button {
  background-color: #ffffff;
  border: 0px;
  border-radius: 8px;
  color: #303150;
  height: 35px;
  width: 90px;
}


########################################################               *****COMPONENTS_LOGOUT_INDEX.JS****


import './index.css'

const Logout = props => {
  const {log} = props

  return (
    <button className="button" type="button" onClick={log}>
      Logout
    </button>
  )
}

export default Logout



##############################################################                  *****COMPONENTS_LOGOUT_INDEX.CSS****


.button {
  background-color: #ffffff;
  border: 0px;
  border-radius: 8px;
  color: #303150;
  height: 35px;
  width: 90px;
}





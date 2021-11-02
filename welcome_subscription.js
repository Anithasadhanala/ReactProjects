URL  : https://welsubscription.ccbp.tech/


#########################################################       ****INDEX.JS****
              




import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)



####################################################           ****APP.JS****





import Welcome from './components/Welcome'
import './App.css'
const App = () => <Welcome />
export default App
 

##############################################################        ****APP.CSS****



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



############################################################################                 ****COMPONENTS_INDEX.JS****





import './index.css'
import {Component} from 'react'

class Welcome extends Component {
  state = {but: 'Subscribe', para: 'Please Subscribe'}

  btnClicked = () => {
    const {but, para} = this.state

    if (but === 'Subscribed') {
      this.setState({but: 'Subscribe', para: 'Please Subscribe'})
    } else {
      this.setState({but: 'Subscribed', para: 'Thanks for subscribing'})
    }
  }

  render() {
    const {but, para} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="paragraph">{para}</p>
        <div>
          <button className="button" type="button" onClick={this.btnClicked}>
            {but}
          </button>
        </div>
      </div>
    )
  }
}

export default Welcome



##########################################################################################             ****COMPONENTS_INDEX.CSS****






* {
  box-sizing: border-box;
}
body {
  margin: 0px;
}

.bg-container {
  background-color: #1e293b;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.heading {
  font-family: Bree-serif;
  font-weight: 700;
  font-size: 80px;
  color: #f0bb03;
}
.paragraph {
  font-family: Bree-serif;
  font-weight: 500;
  font-size: 28px;
  color: #ffffff;
}
.button {
  background-color: #ffffff;
  color: #1e293b;
  font-weight: 500;
  border-radius: 5px;
  height: 35px;
}

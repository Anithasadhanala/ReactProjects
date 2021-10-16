url:     https://clickcounter.ccbp.tech/





######################################################

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

#############################################################

****AP.JS****


import ClickCounter from './components/ClickCounter'
import './App.css'

const App = () => <ClickCounter />

export default App


#########################################################################

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

class ClickCount extends Component {
  state = {count: 0}

  increment = () => {
    this.setState(preState => ({count: preState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">
          The Button has been clicked <span className="span">{count}</span>{' '}
          times
        </h1> 
        <p className="paragraph">Click the button to increase the count!</p>
        <div>
          <button className="button" type="button" onClick={this.increment}>
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCount

########################################################################################


****COMPONENT_INDEX.CSS****


* {
  box-sizing: border-box;
}
body {
  margin: 0px;
}

.bg-container {
  background-color: #f1f5f8;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.heading {
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 40px;
  color: #2d3a35;
}
.paragraph {
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 20px;
  color: #2d3a35;
}
.span {
  color: #c20a72;
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 40px;
}
.button {
  font-family: 'Roboto';
  font-weight: 500;
  color: #ffffff;
  background-color: #007bff;
  border-radius: 5px;
  border: 0px;
  height: 30px;
}

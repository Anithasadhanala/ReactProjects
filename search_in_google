URL  :  searchingoogle.ccbp.tech

##########################################################          ****INDEX.JS****


import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)


###########################################################           ****APP.JS****


import GoogleSuggestions from './components/GoogleSuggestions'

import './App.css'

const suggestionsList = [
  {id: 1, suggestion: 'Price of Ethereum'},
  {id: 2, suggestion: 'Oculus Quest 2 specs'},
  {id: 3, suggestion: 'Tesla Share Price'},
  {id: 4, suggestion: 'Price of Ethereum today'},
  {id: 5, suggestion: 'Latest trends in AI'},
  {id: 6, suggestion: 'Latest trends in ML'},
]

const App = () => <GoogleSuggestions suggestionsList={suggestionsList} />

export default App


#################################################################################        ****APP.CSS****


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


############################################################################################################       ****GOOGLESUGGESTIONS_INDEX.JS****


import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {updatedList: ''}

  changingInput = event => {
    this.setState({updatedList: event.target.value})
  }

  iconClicked = value => {
    this.setState({updatedList: value})
  }

  render() {
    const {suggestionsList} = this.props
    const {updatedList} = this.state
    const filteredList = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(updatedList.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          className="google"
          alt="google logo"
        />
        <div className="container">
          <div className="search">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png "
              className="search-icon"
              alt="search icon"
            />
            <input
              type="search"
              className="input"
              placeholder="Search Google"
              onChange={this.changingInput}
              value={updatedList}
            />
          </div>
          <ul className="unordered">
            {filteredList.map(eachItem => (
              <SuggestionItem
                details={eachItem}
                key={eachItem.id}
                iconClicked={this.iconClicked}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions



#########################################################################################################       ****GOOGLESUGGESTIONS_INDEX.CSS****


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
  height: 100vh;
}
.google {
  height: 120px;
  width: 400px;
  margin-bottom: 20px;
}

.input {
  border: 0px;
  width: 240px;
}
.search {
  display: flex;
  flex-direction: row;
  margin-left: 30px;
  margin-top: 12px;
}
.search-icon {
  height: 30px;
  width: 30px;
  color: #bfbfbf;
}
.container {
  box-shadow: 0px 4px 16px 0px #bfbfbf;
  width: 380px;
  border-radius: 20px;
}
@media screen and (max-width: 576px) {
  .google {
    height: 70px;
    width: 188px;
  }
  .container {
    width: 300px;
  }
  .input {
    width: 200px;
  }
}


##################################################################            ****SUGGESTIONITEM_INDEX.JS****


import './index.css'

const SuggestionItem = props => {
  const {details, iconClicked} = props
  const {suggestion} = details
  const onclickBtn = () => {
    iconClicked(suggestion)
  }
  return (
    <li className="list">
      <p className="para">{suggestion}</p>
      <button type="button" className="button" onClick={onclickBtn}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-icon"
        />
      </button>
    </li>
  )
}

export default SuggestionItem



#######################################################################################             ****SUGGESTIONITEM_INDEX.CSS****



.list {
  list-style-type: none;
  width: 280px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.para {
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 15px;
  color: #475569;
}
.arrow-icon {
  height: 25px;
  width: 25px;
  color: #475569;
}
.button {
  background-color: #ffffff;
  border: 0px;
}
@media screen and (max-width: 576px) {
  .button {
    margin-right: 30px;
  }
}



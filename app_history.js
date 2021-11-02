URL  :   https://apphistory.ccbp.tech


#####################################################          ****INDEX.JS***
  
  
  import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)


#######################################################        ****APP.JS****
  
  
import './App.css'
import {Component} from 'react'
import ComponentItem from './components/ComponentItem'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class HistoryComponent extends Component {
  state = {input: '', list: initialHistoryList}

  itemDeleted = value => {
    const {list} = this.state
    const modifiedList = list.filter(eachItem => eachItem.id !== value)
    this.setState({list: modifiedList})
  }

  inputChanged = event => {
    this.setState({input: event.target.value})
  }

  render() {
    const {input, list} = this.state
    const modifiedList = list.filter(eachItem =>
      eachItem.title.toLowerCase().includes(input.toLowerCase()),
    )

    return (
      <div>
        <nav className="nav-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png "
            alt="app logo"
            className="history-img"
          />
          <div className="input-card">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="search-img"
            />
            <hr className="line" />
            <input
              className="input"
              type="search"
              placeholder="Search history"
              onChange={this.inputChanged}
            />
          </div>
        </nav>
        <div className="bg-container">
          {modifiedList.length === 0 ? (
            <p className="heading">There is no history to show</p>
          ) : (
            <ul className="unordered">
              {modifiedList.map(eachItem => (
                <ComponentItem
                  details={eachItem}
                  key={eachItem.id}
                  deleted={this.itemDeleted}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

const App = () => <HistoryComponent listDetails={initialHistoryList} />

export default App


#############################################################################################      ****APP.CSS****


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
* {
  box-sizing: border-box;
}
body {
  margin: 0px;
}
.nav-card {
  background-color: #3367d6;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.history-img {
  height: 60px;
  width: 150px;
  margin-left: 40px;
  padding-top: 20px;
  margin-bottom: 30px;
}
.input-card {
  background-color: #2850a7;
  display: flex;
  flex-direction: row;
  width: 300px;
  height: 45px;
  margin-right: 400px;
  margin-top: 20px;
  border-radius: 6px;
}
.search-img {
  height: 40px;
  width: 40px;
  margin-top: 4px;
}
.line {
  background-color: #64748b;
  height: 40px;
  width: 1px;
  margin: 0px;
}
.input {
  background-color: transparent;
  border: 0px;
  width: 260px;
  color: #ffffff;
  font-weight: 500;
}
.unordered {
  width: 68%;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0px 4px 16px 0px #64748b;
}
.bg-container {
  display: flex;
  padding-top: 28px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
@media screen and (max-width: 576px) {
  .history-img {
    height: 40px;
    width: 80px;
    margin-left: 10px;
    margin-bottom: 2px;
    margin-top: 4px;
  }
  .input-card {
    height: 30px;
    width: 200px;
    margin-right: 10px;
  }
  .nav-card {
    padding-bottom: 6px;
  }
  .search-img {
    height: 25px;
    width: 25px;
  }
  .line {
    height: 26px;
  }
  .input {
    width: 150px;
  }
  .unordered {
    width: 90%;
    padding: 4px;
  }
  .bg-container {
    padding-top: 6px;
  }
}


############################################################################       ****COMPONENTITEM_INDEX.JS****
  
  
 import './index.css'

const ComponentItem = props => {
  const {details, deleted} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = details
  const btnClicked = () => {
    deleted(id)
  }
  return (
    <li className="list">
      <p className="time">{timeAccessed}</p>
      <img src={logoUrl} className="image" alt="domain logo" key="logoUrl" />
      <div className="text">
        <p className="heading">{title}</p>
        <p className="para">{domainUrl}</p>
      </div>
      <div>
        <button
          className="button"
          type="button"
          onClick={btnClicked}
          testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            className="delete-img"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default ComponentItem


#############################################################################################            ****COMPONENTITEM_INDEX.CSS****
  
  
  
  
.list {
  list-style-type: none;
  display: flex;
  flex-direction: row;
  margin: 8px;
}
.time {
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 12px;
  color: #475569;
}
.image {
  height: 30px;
  width: 30px;
  margin-top: 8px;
  margin-left: 28px;
}
.heading {
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 18px;
  color: #475569;
  margin-left: 28px;
}
.para {
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 14px;
  color: #64748b;
  margin-left: 10px;
  margin-top: 22px;
}
.text {
  display: flex;
  flex-direction: row;
  width: 800px;
}
.button {
  background-color: transparent;
  border: 0px;
}
@media screen and (max-width: 576px) {
  .time {
    font-size: 12px;
    font-weight: 400px;
  }
  .image {
    margin-left: 12px;
  }
  .heading {
    font-weight: 500;
    font-size: 16px;
  }
  .para {
    font-size: 10px;
    margin-left: 24px;
    margin-top: 0px;
  }
  .text {
    flex-direction: column;
  }
  .button {
    margin-top: 8px;
  }
}

URL  : https://favouritecars.ccbp.tech

################################################        ****INDEX.JS****


import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)


###############################################       ****APP.JS****


import SimpleTodos from './components/SimpleTodos'

import './App.css'

const App = () => <SimpleTodos />

export default App

#########################################################             ****APP.CSS****


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

#################################################################################          ****SIMPLETODO_INDEX.JS****


import {Component} from 'react'
import TodoItem from '../TodoItem'
import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'LAMBORGHINI',
    cost: '4.79 crores',
  },
  {
    id: 2,
    title: 'BUGATTI',
    cost: '11.39 crores',
  },
  {
    id: 3,
    title: 'MERCEDES',
    cost: '41.20 lakhs',
  },
  {
    id: 4,
    title: 'BENTLEY',
    cost: '3.21 crores',
  },
  {
    id: 5,
    title: 'FERRARI',
    cost: '5.75 crores',
  },
  {
    id: 6,
    title: 'TESLA',
    cost: '2 crores',
  },
  {
    id: 7,
    title: 'ASTON ',
    cost: '3.85 crores',
  },
]

class SimpleTodos extends Component {
  state = {userList: initialTodosList}

  deleteClickedId = id => {
    const {userList} = this.state
    const newUsersList = userList.filter(eachItem => eachItem.id !== id)

    this.setState({userList: newUsersList})
  }

  render() {
    const {userList} = this.state
    return (
      <div className="bg-container">
        <div className="cards">
          <h1 className="heading">My favourite cars</h1>
          <ul className="unordered">
            {userList.map(each => (
              <TodoItem
                details={each}
                key={each.id}
                deleteClickedId={this.deleteClickedId}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos



################################################################################            ****SIMPLETODO_INDEX.CSS****



* {
  box-sizing: border-box;
}
body {
  margin: 0px;
}
.bg-container {
  background-color: #ffc2a0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.cards {
  background-color: #ffffff;
  border: 0px;
  border-radius: 20px;
  padding-top: 6%;
  padding: 2%;
  min-width: 36%;
}
.heading {
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 40px;
  color: #ff8542;
  text-align: center;
}
@media screen (max-width: 578px) {
  .heading {
    font-weight: 600;
    font-size: 30px;
  }
}
#######################################################################              ****TODOITEM_INDEX.JS****


import './index.css'

const TodoItem = props => {
  const {details, deleteClickedId} = props
  const {title, id, cost} = details

  const deleteClicked = () => {
    deleteClickedId(id)
  }

  return (
    <li className="list">
      <p className="head">{title}</p>

      <p className="para2">{cost}</p>
      <div>
        <button type="button" className="button" onClick={deleteClicked}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem


############################################################################               ****TODOITEM_INDEX.CSS ****


.list {
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.head {
  font-family: 'Roboto';
  font-weight: 600;
  color: #000000;
  font-size: 20px;
}
.button {
  font-family: 'Roboto';
  font-weight: 500;
  color: #ff0b37;
  border: 1px solid #ff0b37;
  background-color: #ffffff;
  margin-top: 18px;
}
.para2 {
  font-family: 'Roboto';
  font-weight: 600;
  color: #000000;
  font-size: 16px;
}

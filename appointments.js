URL  :  https://myappointstoday.ccbp.tech


##################################################################   INDEX.JS

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)


#########################################################    APP.JS


import Appointments from './components/Appointments'

import './App.css'

const App = () => <Appointments />

export default App


##########################################################3    APP.CSS


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


##########################################################################################     ****APPOINTMENTS_INDEX.JS***
  
  
  import {Component} from 'react'
import {format} from 'date-fns'
import {v4 as uuidV4} from 'uuid'
import AppointmentItem from '../AppointmentItem'
import './index.css'

class Appointments extends Component {
  state = {text: '', date: '', list: [], isStarred: false}

  starIsClicked = id => {
    this.setState(prevState => ({
      list: prevState.list.map(eachItem => {
        if (id === eachItem.id) {
          return {...eachItem, isActive: !eachItem.isActive}
        }
        return eachItem
      }),
    }))
  }

  textChanged = event => {
    this.setState({text: event.target.value})
  }

  dateChanged = event => {
    this.setState({date: event.target.value})
  }

  formSubmitted = event => {
    event.preventDefault()

    const {text, date} = this.state
    const formattingDate = date
      ? format(new Date(date), 'dd MMMM yyyy, EEEE')
      : ''

    const obj = {
      text,
      date: formattingDate,
      id: uuidV4(),
      isActive: false,
    }

    this.setState(prevState => ({
      list: [...prevState.list, obj],
      text: '',
      date: '',
    }))
  }

  starredIsClicked = () => {
    const {isStarred} = this.state
    this.setState({
      isStarred: !isStarred,
    })
  }

  filteringIsStarred = () => {
    const {list} = this.state
    return list.filter(eachItem => eachItem.isActive === true)
  }

  render() {
    const {date, text, isStarred} = this.state
    let {list} = this.state

    list = isStarred ? this.filteringIsStarred() : list
    const color = isStarred ? 'starred-color-change' : ''

    return (
      <div className="bg-container">
        <div className="cards">
          <div className="card-text">
            <div className="text">
              <h1 className="heading">Add Appointment</h1>
              <form onSubmit={this.formSubmitted} className="forms">
                <label htmlFor="title" className="para">
                  TITLE
                </label>
                <input
                  className="input"
                  type="text"
                  id="title"
                  placeholder="TITLE"
                  value={text}
                  onChange={this.textChanged}
                />
                <label htmlFor="date" className="para">
                  DATE
                </label>
                <input
                  className="input"
                  type="date"
                  id="date"
                  alt="date"
                  value={date}
                  onChange={this.dateChanged}
                />
                <div>
                  <button className="button" type="submit">
                    Add
                  </button>
                </div>
              </form>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png "
              className="image"
              alt="appointments"
            />
          </div>
          <hr className="line" />
          <div className="text2">
            <h1 className="head">Appointments</h1>
            <div>
              <button
                className={`button2 ${color}`}
                type="button"
                onClick={this.starredIsClicked}
                testid="Starred"
              >
                Starred
              </button>
            </div>
          </div>

          <ul className="unordered">
            {list.map(eachItem => (
              <AppointmentItem
                key={eachItem.id}
                eachItemDetails={eachItem}
                starClicked={this.starIsClicked}
                isActive={eachItem.isActive}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments



###################################################################################         ****APPOINTMENTS.INDEX.CSS****



* {
  box-sizing: border-box;
}
body {
  margin: 0px;
}
.bg-container {
  background-image: linear-gradient(#fbc7d4, #9796f0);
  min-height: 100vh;
  padding: 40px;
  padding-top: 60px;
}
.starred-color-change {
  background-color: #9796f0 !important;
  color: #ffffff !important;
  border: 0px !important;
}
.unordered {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.forms {
  display: flex;
  flex-direction: column;
}
.cards {
  background-color: #ffffff;
  border-radius: 6px;
  display: flex;
  flex-direction: column;

  padding: 30px;
}
.card-text {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.text {
  display: flex;
  flex-direction: column;
}
.line {
  background-color: #b5b7c4;
  width: 90vw;
  height: 4px;
}
.heading {
  font-family: 'roboto';
  font-weight: 600;
  font-size: 38px;
  color: #171f46;
}
.para {
  font-family: 'roboto';
  font-weight: 400;
  font-size: 18px;
  color: #171f46;
}
.input {
  border-color: #b5b7c4;
  height: 30px;
  width: 280px;
  border-color: #b5b7c4;
  border-radius: 4px;
  padding-left: 12px;
  margin-bottom: 30px;
  margin-top: 12px;
}
.image {
  height: 380px;
  width: 580px;
}
.button {
  color: #ffffff;
  background-color: #8b5cf6;
  border: 0px;
  border-radius: 5px;
  margin-top: 10px;
  padding: 10px;
  width: 58px;
}
.head {
  font-family: 'roboto';
  font-weight: 600;
  font-size: 22px;
  color: #171f46;
  padding-left: 6px;
}
.button2 {
  border-radius: 16px;
  border-color: #9796f0;
  color: #9796f0;
  background-color: #ffffff;
  height: 35px;
  width: 80px;
  margin-right: 12px;
  margin-top: 16px;
}
.text2 {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
@media screen and (max-width: 576px) {
  .heading {
    font-weight: 400px;
    font-size: 26px;
  }
  .para {
    font-size: 12px;
  }
  .input {
    width: 150px;
    height: 20px;
    margin-top: 8px;
    margin-bottom: 12px;
  }
  .unordered {
    list-style-type: circle;
  }
  .image {
    display: none;
  }
  .button {
    height: 26px;
    padding: 0px;
  }
  .line {
    width: 100%;
  }
  .bg-container {
    padding: 18px;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .button2 {
    margin-top: 0px;
    height: 25px;
    width: 60px;
  }
  .head {
    margin-top: 4px;
    font-size: 14px;
  }
}



################################################################################         ****APPOINTMENTSITEM.INDEX.JS****


import './index.css'

const AppointmentItem = props => {
  const {eachItemDetails, starClicked, isActive} = props
  const {text, date, id} = eachItemDetails
  const active = isActive
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
  const starBtnClicked = () => {
    starClicked(id)
  }

  return (
    <li className="card-item">
      <div className="input-text">
        <p className="head">{text}</p>
        <div>
          <button
            className="star-btn"
            testid="star"
            type="button"
            onClick={starBtnClicked}
          >
            <img src={active} className="star-image" alt="star" />
          </button>
        </div>
      </div>
      <p className="time-para">Date: {date}</p>
    </li>
  )
}

export default AppointmentItem




#############################################################################################       ****APPOINTMENTSITEM.INDEX.CSS****


.card-item {
  border-style: solid;
  list-style-type: none;
  border-radius: 8px;
  border-color: #b5b7c4;
  padding: 12px;
  border-width: 2px;
  height: 120px;
  width: 380px;
  display: flex;
  flex-direction: column;
  margin-left: 22px;
  margin-bottom: 22px;
}
.input-text {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.head {
  font-family: 'roboto';
  font-weight: 500;
  font-size: 12px;
  color: #171f46;
  margin: 0px;
}
.star-btn {
  border: 0px;
  background-color: #ffffff;
}
.star-image {
  height: 30px;
  width: 30px;
}
.para {
  font-family: 'roboto';
  font-weight: 600;
  font-size: 18px;
  color: #b5b7c4;
}
@media screen and (max-width: 576px) {
  .card-item {
    height: 80px;
    min-width: 100px;
    padding: 6px;
    overflow-y: scroll;
    margin-left: 0px;
    width: 100%;
  }
  .head {
    display: flex;
    flex-direction: column;
    font-size: 16px;
    font-weight: 400px;
    margin-left: 0px;
    width: 120px;
    padding-bottom: 5px;
  }
  .time-para {
    font-weight: 400;
    font-size: 10px;
    margin-top: 0px;
  }
  .star-image {
    height: 20px;
    width: 20px;
  }
}



_

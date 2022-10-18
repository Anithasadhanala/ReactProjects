https://anithaproject5.ccbp.tech



#############################################################################              App.js




import PasswordManager from './components/PasswordManager'
import './App.css'

const App = () => <PasswordManager />
export default App





############################################################################            password_manager.index.js





import {Component} from 'react'
import {v4 as uuidV4} from 'uuid'
import PasswordCreation from '../PasswordCreation'
import './index.css'

class PasswordManager extends Component {
  state = {
    website: '',
    username: '',
    password: '',
    status: false,
    search: '',
    list: [],
  }

  websiteChanged = event => {
    this.setState({website: event.target.value})
  }

  usernameChanged = event => {
    this.setState({username: event.target.value})
  }

  passwordChanged = event => {
    this.setState({password: event.target.value})
  }

  formSubmitted = event => {
    event.preventDefault()
    const {username, password, website, list} = this.state

    const obj = {
      id: uuidV4(),
      website,
      username,
      password,
    }

    this.setState({
      list: [...list, obj],
      website: '',
      username: '',
      password: '',
    })
  }

  checkBtnChanged = () => {
    const {status} = this.state
    this.setState({status: !status})
  }

  searchChanged = event => {
    this.setState({search: event.target.value})
  }

  deleteClicked = id => {
    const {list} = this.state
    const listUpdate = list.filter(each => (each.id !== id ? each : ''))
    console.log(listUpdate)
    this.setState({list: listUpdate})
  }

  render() {
    const {website, username, password, status, list, search} = this.state
    const updatedList = list.filter(each =>
      each.username.toLowerCase().includes(search.toLowerCase()),
    )
    const count = list.length
    return (
      <div className="bg-cont">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          className="profile-img"
          alt="app logo"
        />
        <div className="form-cont">
          <div className="form-cont2">
            <h1 className="form-cont2-head">Add New Password</h1>
            <form className="form-div" onSubmit={this.formSubmitted}>
              <div className="input-div">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png "
                  className="input-img"
                  alt="website"
                />
                <hr className="line" />
                <input
                  type="text"
                  placeholder="Enter Website"
                  className="input-ele"
                  onChange={this.websiteChanged}
                  value={website}
                />
              </div>
              <div className="input-div">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png "
                  className="input-img"
                  alt="username"
                />
                <hr className="line" />
                <input
                  type="text"
                  placeholder="Enter Username"
                  className="input-ele"
                  onChange={this.usernameChanged}
                  value={username}
                />
              </div>
              <div className="input-div">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png "
                  className="input-img"
                  alt="password"
                />
                <hr className="line" />
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="input-ele"
                  onChange={this.passwordChanged}
                  value={password}
                />
              </div>
              <div className="btn-div">
                <button className="add-btn" type="submit">
                  Add
                </button>
              </div>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            className="form-top-img"
            alt="password manager"
          />
        </div>

        <div className="bottom-cont">
          <div className="password-cont">
            <div className="password-cont2">
              <h1 className="password-para">Your Passwords</h1>
              <p className="password-count">{count}</p>
            </div>
            <div className="bottom-search-cont">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                className="search-img"
                alt="search"
              />
              <hr className="search-line" />
              <input
                type="search"
                className="search-text"
                placeholder="search"
                onChange={this.searchChanged}
              />
            </div>
          </div>
          <hr className="bottom-line" />
          <div className="checkbox-cont">
            <input
              className="input-check"
              type="checkbox"
              onChange={this.checkBtnChanged}
              id="checkId"
            />
            <label className="show" htmlFor="checkId">
              Show Passwords
            </label>
          </div>
          {count === 0 ? (
            <div className="no-password-cont">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                className="no-password"
                alt="no passwords"
              />
              <p className="no-password-text">No Passwords</p>
            </div>
          ) : (
            <ul className="unordered">
              {updatedList.map(each => (
                <PasswordCreation
                  key={each.id}
                  details={each}
                  isChecked={status}
                  deleteClicked={this.deleteClicked}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default PasswordManager







##########################################################################################             password_manager.index.css




body {
  margin: 0px;
}
* {
  box-sizing: border-box;
}
.bg-cont {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #9ba9eb;
  min-height: 100vh;
}
.no-password-cont {
  align-self: center;
  display: flex;
  flex-direction: column;
}
.no-password {
  height: 300px;
  width: 350px;
}

.no-password-text {
  font-family: 'roboto';
  font-weight: 500px;
  font-size: 22px;
  color: white;
  margin-left: 90px;
}
.profile-img {
  height: 60px;
  width: 180px;

  margin-top: 15px;
  margin-left: 22px;
  margin-bottom: 20px;
  align-self: flex-start;
  margin-top: 30px;
  margin-left: 200px;
}
.form-cont {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #5763a5;
  border-radius: 8px;
  height: 400px;
  width: 70vw;
}
.form-cont2 {
  display: flex;
  flex-direction: column;
  padding: 26px;
  height: 340px;
  width: 600px;
  background-color: #454f84;
  margin-top: 30px;
  margin-left: 30px;
  border-radius: 20px;
}
.form-cont2-head {
  font-family: 'roboto';
  font-weight: 500px;
  font-size: 28px;
  color: white;
  height: 44px;
  margin-bottom: 10px;
  margin-left: 23px;
  margin-top: 0px;
}
.input-div {
  display: flex;
  flex-direction: row;
  background-color: white;
  border-radius: 4px;
  width: 500px;
  height: 44px;
  margin: 20px;
  border-radius: 3px;
  margin-top: 30px;
  margin-top: 12px;
}
.input-img {
  height: 32px;
  width: 30px;
  margin-top: 4px;
  margin-left: 8px;
}
.line {
  height: 36px;
  width: 2px;
  background-color: #b6c3ca;
  border: none;
  margin-top: none;
}
.input-ele {
  width: 450px;
  border: none;
  border-radius: 10px;
}
.form-top-img {
  height: 380px;
  width: 300px;
  margin-right: 30px;
}
.add-btn {
  font-family: 'roboto';
  font-weight: 600px;
  font-size: 16px;
  color: white;
  background-color: blue;
  border: none;
  border-radius: 4px;
  height: 30px;
  width: 70px;
  margin-top: 0px;
}
.form-div {
  display: flex;
  flex-direction: column;
}
.btn-div {
  align-self: flex-end;
  margin-right: 30px;
}
.bottom-cont {
  display: flex;
  flex-direction: column;
  background-color: #5763a5;
  border-radius: 8px;
  min-height: 400px;
  width: 70vw;
  margin-top: 20px;
  margin-bottom: 80px;
}
.password-cont {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.password-cont2 {
  display: flex;
  flex-direction: row;
  margin-left: 30px;
}
.password-para {
  font-size: 22px;
  font-weight: 500;
  font-family: 'roboto';
  color: white;
}
.password-count {
  font-weight: 500;
  font-size: 16px;
  color: white;
  background-color: transparent;
  border-style: solid;
  border-color: white;
  border-width: 1px;
  height: 30px;
  min-width: 20px;
  padding-top: 2px;
  padding-left: 4px;
  border-radius: 3px;
  margin-top: 18px;
  margin-left: 20px;
  padding-right: 6px;
}
.bottom-search-cont {
  height: 40px;
  width: 300px;
  background-color: white;
  border-radius: 5px;
  display: flex;

  margin-top: 20px;
  margin-right: 40px;
}
.search-img {
  height: 30px;
  width: 30px;
  margin-top: 3px;
  margin-left: 4px;
}
.search-line {
  height: 40px;
  border: none;
  background-color: #b6c3ca;
  width: 2px;
  margin-top: 0px;
}
.search-text {
  width: 260px;
  height: 34px;
  border: none;
  margin-bottom: 0px;
  margin-top: 3px;
}
.bottom-line {
  height: 1px;
  border: none;
  background-color: #b6c3ca;
  width: 65vw;
}
.checkbox-cont {
  display: flex;
  flex-direction: row;
  align-self: flex-end;
  margin-right: 34px;
}
.show {
  font-weight: 400;
  font-size: 16px;
  color: white;
  font-family: 'roboto';
  margin-top: 15px;
}
.input-check {
  height: 20px;
  width: 20px;
  margin-top: 16px;
  margin-right: 8px;
}
.unordered {
  list-style-type: none;
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
  justify-content: center;
}








####################################################################################          password_creation.index.js







import './index.css'

const PasswordCreation = props => {
  const {details, isChecked, deleteClicked} = props
  const {username, password, website, id} = details
  const letter = username[0]
  console.log(password)
  const passwords =
    isChecked !== false ? (
      <p className="password">{password}</p>
    ) : (
      <img
        src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
        className="password-img"
        alt="stars"
      />
    )
  console.log(isChecked)
  const deleteBtnClicked = () => {
    deleteClicked(id)
  }

  return (
    <li className="list-cont">
      <div className="hi">
        <p className="logo">{letter}</p>
        <div className="data">
          <p className="data-text">{website}</p>
          <p className="data-text text2">{username}</p>
          {passwords}
        </div>
      </div>
      <button type="button" className="delete-btn" onClick={deleteBtnClicked}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png "
          className="delete-img"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default PasswordCreation








#######################################################################################33###############      password_creaction.index.css








.list-cont {
  height: 100px;
  width: 230px;
  border-style: solid;
  border-color: #94a3b8;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-width: 1px;
  padding-left: 10px;
  margin: 10px;
}
.delete-btn {
  background-color: transparent;
  border: none;
  margin-top: 0px;
  padding-top: 0px;
  padding-bottom: 25px;
}
.delete-img {
  height: 26px;
  width: 26px;
  margin-top: 36px;
  margin-right: 10px;
  margin-left: 15px;
}
.logo {
  font-weight: 600;
  font-size: 28px;
  color: white;
  font-family: 'roboto';
  background-color: #14b8a6;
  height: 40px;
  width: 40px;
  border-radius: 20px;
  padding-left: 11px;
  padding-top: 4px;
  margin-top: 18px;
}
.password-img {
  height: 20px;
  width: 90px;
}
.data {
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-right: 20px;
  padding-top: 8px;
}
.data-text {
  font-weight: 400;
  font-size: 14px;
  color: white;
  font-family: 'roboto';
  margin-bottom: 0px;
  margin-top: 15px;
}
.hi {
  display: flex;
  flex-direction: row;
}
.text2 {
  font-size: 12px;
}
.password {
  font-weight: 400;
  font-size: 12px;
  color: white;
  font-family: 'roboto';
}




URL  :  yourfeedback.ccbp.tech


#######################################################           ****index.js****
  
  
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)


#############################################################           ****app.js****
  
  
  import Comments from './components/Comments'

import './App.css'

const App = () => <Comments />

export default App


###############################################################         ****app.css*****



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



######################################################################################      ****components_comments_index.js***
  
  
  
  import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {number: 0, nam1: '', com: '', list: [], color: 0}

  formSubmitted = event => {
    event.preventDefault()

    const {nam1, com, color} = this.state

    this.setState(preState => ({
      color: preState.color + 1,
    }))
    const obj = {
      name: nam1,
      comment: com,
      isLiked: false,
      id: uuidv4(),
      color,
    }

    this.setState(prevState => ({
      list: [...prevState.list, obj],
      nam1: '',
      com: '',
    }))
    this.setState(prevState => ({
      number: prevState.number + 1,
    }))
  }

  nameInputChanged = event => {
    this.setState({nam1: event.target.value})
  }

  commentInputChanged = event => {
    this.setState({com: event.target.value})
  }

  likeBtnClicked = id => {
    this.setState(prevState => ({
      list: prevState.list.map(eachItem => {
        if (eachItem.id === id) {
          return {...eachItem, isLiked: !eachItem.isLiked}
        }
        return eachItem
      }),
    }))
  }

  deleteBtnClicked = id => {
    const {list} = this.state
    this.setState({
      list: list.filter(eachItem => eachItem.id !== id),
    })
    this.setState(prevState => ({
      number: prevState.number - 1,
    }))
  }

  render() {
    const time = formatDistanceToNow(new Date())
    const {number, list, nam1, com} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Comments</h1>
        <div className="cards">
          <div className="form-card">
            <p className="head">Say something about 4.O Technologies</p>
            <form className="form form-card" onSubmit={this.formSubmitted}>
              <input
                className="input-name"
                placeholder="Your Name"
                onChange={this.nameInputChanged}
                type="text"
                value={nam1}
              />
              <textarea
                className="textArea"
                placeholder="Your Comment"
                onChange={this.commentInputChanged}
                value={com}
              />
              <button className="button" type="submit">
                Add Comment
              </button>
            </form>
          </div>
          <div className="image-card">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png "
              className="image"
              alt="comments"
            />
          </div>
        </div>
        <hr className="card-line" />

        <div className="card-comments">
          <p className="number">{number}</p>
          <p className="p-com">Comments</p>
        </div>
        <ul className="unordered">
          {list.map(eachItem => (
            <CommentItem
              key={eachItem.id}
              details={eachItem}
              colorsList={initialContainerBackgroundClassNames}
              tim={time}
              deleteBtn={this.deleteBtnClicked}
              likeBtn={this.likeBtnClicked}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments






#############################################################################################         ****components_comments_index.css****
  
  
  
  * {
  box-sizing: border-box;
}
body {
  margin: 0px;
}
.cards {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-left: 0px;
  margin-right: 0px;
}
.form-card {
  display: flex;
  flex-direction: column;
  margin-left: 0px;
}
.heading {
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 54px;
  margin-left: 95px;
  color: #1e293b;
}
.head {
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 18px;
  color: #475569;
}
.button {
  background-color: #0284c7;
  color: #ffffff;
  border: 0px;
  border-radius: 6px;
  width: 150px;
  height: 30px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.image {
  height: 300px;
  width: 400px;
}
.card-line {
  background-color: #cbd2d9;
  width: 85%;
  height: 1px;
}
.bg-container {
  padding-left: 150px;
  padding-right: 220px;
}
.input-name {
  height: 40px;
  width: 340px;
  margin-bottom: 35px;
  border-radius: 2px;
  border-width: 2px;
  border-color: #dee0e3;
}
.textArea {
  width: 340px;
  height: 120px;
  border-width: 3px;
  border-radius: 3px;
  border-color: #dee0e3;
}
.card-comments {
  display: flex;
  flex-direction: row;
  margin-left: 88px;
}
.number {
  font-weight: 600;
  color: #ffffff;
  background-color: #0284c7;
  border-radius: 2px;
  width: 30px;
  padding-left: 10px;
  padding-top: 2px;
  margin-right: 12px;
}
.p-com {
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 20px;
  color: #1e293b;
}
@media screen and (max-width: 576px) {
  .image {
    height: 140px;
    width: 140px;
    margin-left: 30px;
  }
  .cards {
    display: flex;
    flex-direction: column;
  }
  .image-card {
    order: 0;
  }
  .form-card {
    order: 3;
  }
  .heading {
    font-size: 28px;
    font-weight: 600;
    margin-left: 8px;
  }
  .bg-container {
    padding-left: 20px;
    padding-right: 20px;
  }
  .head {
    font-size: 14px;
    font-weight: 500;
    color: #0284c7;
  }
  .input-name {
    width: 70%;
    height: 26px;
    margin-bottom: 14px;
    border-radius: 8px;
    border-color: #64748b;
    border-width: 1px;
  }
  .textArea {
    width: 70%;
    height: 80px;
    border-radius: 8px;
    border-color: #64748b;
    border-width: 1px;
  }
  .button {
    width: 120px;
  }
  .card-line {
    width: 99%;
  }
  .number {
    height: 30px;
    width: 28px;
    border-radius: 30px;
    padding-left: 7px;
    padding-top: 2px;
    padding-bottom: 18px;
    margin-right: 10px;
  }
  .p-com {
    font-weight: 500;
    font-size: 18px;
  }
  .card-comments {
    margin-left: 0px;
  }
  .unordered {
    margin-top: 0px;
  }
}




########################################################################              ****componets_commentsItem_index.js****
  
 
import './index.css'

const CommentItem = props => {
  const {details, likeBtn, colorsList, deleteBtn, tim} = props
  const {name, comment, id, isLiked, color} = details
  const likeBtnClicked = () => {
    likeBtn(id)
  }

  const deleteBtnClicked = () => {
    deleteBtn(id)
  }
  const bgColor = colorsList[color % 6]
  const url = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const likeColor = isLiked ? 'para-like2' : 'para-like'
  const letter = name[0]
  return (
    <li className="list-card">
      <div className="carding">
        <p className={bgColor}>{letter}</p>

        <div className="card-name">
          <p className="name">{name}</p>

          <p className="description">{comment}</p>
        </div>
        <p className="tim-para">{tim}</p>
      </div>
      <div className="card-like-delete">
        <div>
          <button className="but but2" type="button" onClick={likeBtnClicked}>
            <img src={url} alt="like" className="img-like" />
            <p className={likeColor}>Like</p>
          </button>
        </div>
        <div>
          <button
            className="but"
            type="button"
            onClick={deleteBtnClicked}
            testid="delete"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png "
              className="img-delete"
              alt="delete"
            />
          </button>
        </div>
      </div>
      <hr className="comment-line" />
    </li>
  )
}

export default CommentItem






#######################################################################################################    *****Components_commentsItem_index.css****
  
  
  
  
  .amber {
  background-color: #f59e0b;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 22px;
  color: #ffffff;
  padding-top: 6px;
  padding-left: 12px;
  min-width: 40px;
  border-radius: 62px;
  height: 40px;
}

.blue {
  background-color: #0b69ff;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 22px;
  color: #ffffff;
  padding-top: 6px;
  padding-left: 12px;

  min-width: 40px;
  border-radius: 62px;
  height: 40px;
}

.orange {
  background-color: #f97316;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 22px;
  color: #ffffff;
  padding-top: 6px;
  padding-left: 12px;

  min-width: 40px;
  border-radius: 62px;
  height: 40px;
}

.emerald {
  background-color: #10b981;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 22px;
  color: #ffffff;
  padding-top: 6px;
  padding-left: 12px;

  min-width: 40px;
  border-radius: 62px;
  height: 40px;
}

.teal {
  background-color: #14b8a6;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 22px;
  color: #ffffff;
  padding-top: 6px;
  padding-left: 12px;

  min-width: 40px;
  border-radius: 62px;
  height: 40px;
}

.red {
  background-color: #b91c1c;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 22px;
  color: #ffffff;
  padding-top: 6px;
  padding-left: 12px;

  min-width: 40px;
  border-radius: 62px;
  height: 40px;
}

.light-blue {
  background-color: #0ea5e9;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 22px;
  color: #ffffff;
  padding-top: 6px;
  padding-left: 12px;

  min-width: 40px;
  border-radius: 62px;
  height: 40px;
}
.list-card {
  margin-top: 0px;
  margin-left: 55px;
  width: 86%;
}
.carding {
  display: flex;
  flex-direction: row;
  margin-top: 0px;
}

.details-card {
  display: flex;
  flex-direction: column;
  margin-left: 12px;
  margin-top: 12px;
}
.name {
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 16px;
  color: #1e293b;
  wrap: flex-wrap;
}
.description {
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 10px;
  color: #475569;
  margin-top: 12px;
}
.card-like-delete {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.but {
  border: 0px;
  background-color: #ffffff;
  display: flex;
}
.img-like {
  height: 30px;
  width: 30px;
  margin-right: 8px;
  margin-top: 16px;
}
.img-delete {
  height: 30px;
  width: 30px;
}
.list-card {
  list-style-type: none;
}
.comment-line {
  background-color: #94a3b8;
  height: 1px;
}
.para-like {
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 16px;
  color: #64748b;
}
.para-like2 {
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 16px;
  color: #0ea5e9;
}
.card-name {
  display: flex;
  flex-direction: column;
  width: 40vw;
  margin-left: 12px;
  margin-top: 8px;
}
.tim-para {
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 12px;
  color: #7e858e;
  margin-top: 19px;
  margin-left: 12px;
}
@media screen and (max-width: 576px) {
  .list-card {
    margin-left: 0px;
    width: 100vw;
  }
  .img-like {
    height: 25px;
    width: 25px;
    margin-bottom: 0px;
    margin-top: 6px;
  }
  .img-delete {
    height: 24px;
    width: 24px;
    margin-top: 12px;
  }
  .amber {
    background-color: #f59e0b;
    font-family: 'Roboto';
    font-weight: 500;
    font-size: 22px;
    color: #ffffff;
    padding-top: 1px;
    padding-left: 8px;
    min-width: 30px;
    border-radius: 62px;
    height: 30px;
  }

  .blue {
    background-color: #0b69ff;
    font-family: 'Roboto';
    font-weight: 500;
    font-size: 22px;
    color: #ffffff;
    padding-top: 1px;
    padding-left: 8px;

    min-width: 30px;
    border-radius: 62px;
    height: 30px;
  }

  .orange {
    background-color: #f97316;
    font-family: 'Roboto';
    font-weight: 500;
    font-size: 22px;
    color: #ffffff;
    padding-top: 1px;
    padding-left: 8px;
    min-width: 30px;
    border-radius: 62px;
    height: 30px;
  }

  .emerald {
    background-color: #10b981;
    font-family: 'Roboto';
    font-weight: 500;
    font-size: 22px;
    color: #ffffff;
    padding-top: 1px;
    padding-left: 8px;
    min-width: 30px;
    border-radius: 62px;
    height: 30px;
  }

  .teal {
    background-color: #14b8a6;
    font-family: 'Roboto';
    font-weight: 500;
    font-size: 22px;
    color: #ffffff;
    padding-top: 1px;
    padding-left: 8px;
    min-width: 30px;
    border-radius: 62px;
    height: 30px;
  }

  .red {
    background-color: #b91c1c;
    font-family: 'Roboto';
    font-weight: 500;
    font-size: 22px;
    color: #ffffff;
    padding-top: 1px;
    padding-left: 8px;
    min-width: 30px;
    border-radius: 62px;
    height: 30px;
  }

  .light-blue {
    background-color: #0ea5e9;
    font-family: 'Roboto';
    font-weight: 500;
    font-size: 22px;
    color: #ffffff;
    padding-top: 1px;
    padding-left: 8px;
    min-width: 30px;
    border-radius: 62px;
    height: 30px;
  }
  .name {
    font-weight: 500;
    font-size: 14px;
    width: 200px;
    wrap: flex-wrap;
  }
  .tim-para {
    font-weight: 500;
    font-size: 12px;
    margin-top: 17px;
    order: 0px;
  }
  .description {
    margin-top: 0px;
    font-size: 13px;
    width: 200px;
  }
  .card-name {
    width: 40vw;
    margin-left: 12px;
    margin-top: 8px;
    order: 2;
  }
}








  

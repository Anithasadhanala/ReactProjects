URL  :  https://emojisfeedback.ccbp.tech

##################################################################              ****INDEX.JS****
  
  
 import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)


###################################################################     ****APP.JS****
  
  
 import Feedback from './components/Feedback'

import './App.css'

const resources = {
  emojis: [
    {
      id: 0,
      name: 'Sad',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/sad-emoji-img.png',
    },
    {
      id: 1,
      name: 'None',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/none-emoji-img.png',
    },
    {
      id: 2,
      name: 'Happy',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/happy-emoji-img.png',
    },
  ],
  loveEmojiUrl: 'https://assets.ccbp.in/frontend/react-js/love-emoji-img.png',
}

const App = () => <Feedback resources={resources} />

export default App


####################################################################################      ****APP.CSS****



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


#########################################################################################       ****COMPONENTS_FEEDBACK_INDEX.JS****
  
  
 import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {clicked: false}

  btnClicked = () => {
    this.setState({clicked: true})
  }

  thanksCards = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources
    return (
      <div className="thanks-card">
        <img src={loveEmojiUrl} alt="love emoji" className="image" />
        <h1 className="para">Thank you!</h1>
        <p className="emoji">
          We will use your feedback to improve our customer support performance
        </p>
      </div>
    )
  }

  emojisCards = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="cards">
        <h1 className="para">
          How satisfied are you with our customer support performance
        </h1>
        <ul className="emoji-card">
          {emojis.map(eachItem => (
            <li className="emoji-card " key={eachItem.id}>
              <div className="btn-div">
                <div>
                  <button
                    className="button"
                    type="button"
                    onClick={this.btnClicked}
                  >
                    <img
                      src={eachItem.imageUrl}
                      className="image"
                      alt={eachItem.name}
                    />
                  </button>
                </div>
                <p className="emoji">{eachItem.name}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {clicked} = this.state

    return (
      <div className="bg-container">
        <div className="cards">
          {clicked ? this.thanksCards() : this.emojisCards()}
        </div>
      </div>
    )
  }
}

export default Feedback


##################################################################################             ****COMPONENTS_FEEDBACK_INDEX.CSS****
  
  
 * {
  box-sizing: border-box;
}
body {
  margin: 0px;
}
.bg-container {
  background-image: linear-gradient(to right, #ffeeee, #ffc0bb);
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.cards {
  border-radius: 20px;
  border: 0px;
  padding: 20px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.para {
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 35px;
  color: #0f172a;
  width: 60%;
  text-align: center;
}
.emoji-card {
  display: flex;
  flex-direction: row;
  list-style-type: none;
}
.thanks-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.btn-div {
  display: flex;
  flex-direction: column;
}
.button {
  background-color: #ffffff;
  border: 0px;
  margin-right: 60px;
}

.image {
  height: 85px;
  width: 85px;
}
.emoji {
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 18px;
  color: #1e293b;
  margin-left: 28px;
}
@media screen and (max-width: 576px) {
  .cards {
    width: 80%;
    padding: 0px;
    padding-top: 12px;
    padding-bottom: 20px;
  }
  .bg-container {
    width: 100vw;
    height: 100vh;
  }
  .para {
    font-size: 20px;
    font-weight: 600;
    width: 100%;
    margin: 0px;
    text-align: center;
  }
  .emoji-card {
    flex-direction: column;
  }
  .image {
    height: 60px;
    width: 60px;
  }
  .emoji {
    margin: 0px;
    margin-left: 16px;
  }
  .button {
    margin: 0px;
  }
  .btn-div {
    margin: 12px;
  }
}




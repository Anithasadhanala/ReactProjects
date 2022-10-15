https://anithaproject1.ccbp.tech



##################################################################        index.js



import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)




###################################################################      App.js





import EmojiGame from './components/EmojiGame'

import './App.css'

const emojisList = [
  {
    id: 0,
    emojiName: 'Face with stuck out tongue',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-img.png',
  },
  {
    id: 1,
    emojiName: 'Face with head bandage',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-head-bandage-img.png',
  },
  {
    id: 2,
    emojiName: 'Face with hugs',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-hugs-img.png',
  },
  {
    id: 3,
    emojiName: 'Face with laughing',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-img.png',
  },
  {
    id: 4,
    emojiName: 'Laughing face with hand in front of mouth',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-with-hand-infront-mouth-img.png',
  },
  {
    id: 5,
    emojiName: 'Face with mask',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-mask-img.png',
  },
  {
    id: 6,
    emojiName: 'Face with silence',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-silence-img.png',
  },
  {
    id: 7,
    emojiName: 'Face with stuck out tongue and winked eye',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-and-winking-eye-img.png',
  },
  {
    id: 8,
    emojiName: 'Grinning face with sweat',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/grinning-face-with-sweat-img.png',
  },
  {
    id: 9,
    emojiName: 'Smiling face with heart eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-heart-eyes-img.png',
  },
  {
    id: 10,
    emojiName: 'Grinning face',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/grinning-face-img.png',
  },
  {
    id: 11,
    emojiName: 'Smiling face with star eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-star-eyes-img.png',
  },
]

const App = () => <EmojiGame emojisList={emojisList} />

export default App








#####################################################################################3         App.css










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










###########################################################################################        EmojiGame_index.js









import {Component} from 'react'
import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import './index.css'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {score: 0, tot: 0, list: [], status: false}

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  emojiClicked = id => {
    const {list, score, tot} = this.state
    const list2 = []
    for (let i = 0; i < list.length; i += 1) {
      if (list[i] !== id) list2.push(id)
      else {
        if (score > tot) {
          this.setState({tot: score})
        }
        this.setState({status: true})
      }
    }
    console.log(id, list, list2)
    if (list2.length === list.length) {
      list2.push(id)
      if (list2.length === 10) {
        this.setState({
          status: true,
          score: 12,
          tot: 12,
        })
      } else {
        this.setState(prevState => ({score: prevState.score + 1}))
        this.setState({list: list2})
      }
    }
  }

  playClicked = () => {
    const {score, tot} = this.state
    if (score > tot) {
      this.setState({tot: score})
    }
    this.setState({status: false, score: 0, list: []})
  }

  render() {
    const {score, tot, status} = this.state
    const updatedEmojis = this.shuffledEmojisList()
    console.log(updatedEmojis)
    return (
      <div className="bg-cont">
        <NavBar score={score} tot={tot} status={status} />
        <div className="bottom-cont">
          {status === false ? (
            <ul className="unordered">
              {updatedEmojis.map(each => (
                <EmojiCard
                  key={each.id}
                  details={each}
                  emojiClicked={this.emojiClicked}
                />
              ))}
            </ul>
          ) : (
            <WinOrLoseCard score={score} playClicked={this.playClicked} />
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame









###########################################################################################      EmojiGame_index.css








.bottom-cont {
  height: 92vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    to bottom right,
    #9796f0 0.5%,
    #fbc7d4 150%
  );
}

.unordered {
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50vw;
  flex-wrap: wrap;
  width: 53vw;
}



#############################################################################################     EmojiCard_index.js




import './index.css'

const EmojiCard = props => {
  const {details, emojiClicked} = props
  const {emojiUrl, emojiName, id} = details

  const btnClicked = () => {
    emojiClicked(id)
  }
  return (
    <li>
      <button type="button" className="emoji-btn" onClick={btnClicked}>
        <img src={emojiUrl} className="img" alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard




###########################################################################################3    EmojiCard_index.css





.emoji-btn {
  border-style: solid;
  border-radius: 8px;
  border-color: #ffffff30;
  background-color: #ffffff33;
  margin: 10px;
  cursor: pointer;
  outline: none;
  height: 130px;
  width: 130px;
}
.img {
  height: 100px;
  width: 100px;
}





###################################################################################3      NavBar_index.js






import './index.css'

const NavBar = props => {
  const {score, tot, status} = props
  const para1 = status ? '' : <p className="para">Score: {score}</p>
  const para2 = status ? '' : <p className="para">Top Score: {tot}</p>

  return (
    <nav className="nav-bar">
      <div className="nav-div1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          className="nav-img"
          alt="emoji logo"
        />
        <h1 className="main-head">Emoji Game</h1>
      </div>
      <div className="nav-div">
        {para1}
        {para2}
      </div>
    </nav>
  )
}
export default NavBar









#############################################################################3          NavBar_index.css





.nav-bar {
  height: 70px;
  background-color: pink;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-basis: 80%;
}
.nav-div1 {
  display: flex;
  flex-direction: row;
}
.main-head {
  font-family: 'roboto';
  font-weight: 600;
  color: white;
  margin-right: 18px;
}
.nav-div {
  display: flex;
  flex-direction: row;
  margin-right: 20px;
  margin-top: 8px;
}
.para {
  font-family: 'roboto';
  font-weight: 600;
  color: white;
  margin-right: 18px;
}
.nav-img {
  height: 60px;
  width: 70px;
  margin-left: 40px;
  margin-top: 5px;
}












##################################################################################3       LoseOrWin.index.js







import './index.css'

const WinOrLoseCard = props => {
  const {score, playClicked} = props

  const img =
    score === 12
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const winLose = score === 12 ? 'You Won' : 'You Lose'
  const scoreWorst = score === 12 ? 'Best Score' : 'Score'

  const playBtnClicked = () => {
    playClicked()
  }

  return (
    <div className="main-div">
      <div className="text-div">
        <h1 className="head">{winLose}</h1>
        <p className="score">{scoreWorst}</p>
        <p className="marks">{score}/12</p>
        <div>
          <button className="play-btn" type="button" onClick={playBtnClicked}>
            Play Again
          </button>
        </div>
      </div>
      <img src={img} className="play-img" alt="win or lose" />
    </div>
  )
}

export default WinOrLoseCard











##############################################################################################       LoseOrWin.index.css


.main-div {
  height: 70vh;
  width: 58vw;
  border-style: solid;
  border-radius: 9px;
  border-color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  justify-content: space-around;
  background-color: #fbc7d4;
 
}
.text-div {
  display: flex;
  flex-direction: column;
}
.head {
  font-family: 'roboto';
  font-weight: 900;
  color: white;
  font-size: 34px;
  margin: 0px;
  margin: 8px;
}
.score {
  font-family: 'roboto';
  font-weight: 600;
  color: white;
  font-size: 24px;
  margin: 0px;
  margin: 8px;
}
.marks {
  font-family: 'roboto';
  font-weight: 600;
  color: blue;
  font-size: 22px;
  margin: 0px;
  margin: 8px;
}
.play-btn {
  height: 45px;
  width: 90px;
  background-color: yellow;
  border: none;
  border-radius: 16px;
  color: black;
}
.play-img {
  height: 400px;
  width: 400px;
}

















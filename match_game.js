https://anithaproject6.ccbp.tech/



####################################################################          App.js






import {Component} from 'react'
import './App.css'
import Tabs from './components/Tabs'
import TabItems from './components/TabItems'

const tabsList = [
  {tabId: 'FRUIT', displayText: 'Fruits'},
  {tabId: 'ANIMAL', displayText: 'Animals'},
  {tabId: 'PLACE', displayText: 'Places'},
]

const imagesList = [
  {
    id: 'b11ec8ce-35c9-4d67-a7f7-07516d0d8186',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/orange-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/orange-thumbnail-img.png',
    category: 'FRUIT',
  },
  {
    id: '04ac6b9f-b7e7-45f7-a8fc-fd48f3f72526',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/panda-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/panda-thumbnail-img.png',
    category: 'ANIMAL',
  },
  {
    id: 'a132f546-5b2b-4c0d-b9e4-e524bdf904cc',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/zebra-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/zebra-thumbnail-img.png',
    category: 'ANIMAL',
  },
  {
    id: 'd89386da-94db-4275-9cb5-249c6e071a19',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/paris-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/paris-thumbnail-img.png',
    category: 'PLACE',
  },
  {
    id: 'd810bbb0-1683-407a-8db6-898fe7b75782',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/giraffe-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/giraffe-thumbnail-img.png',
    category: 'ANIMAL',
  },
  {
    id: '176aab62-e86a-4ccd-8b89-5b83c3f02506',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/taj-mahal-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/taj-mahal-thumbnail-img.png',
    category: 'PLACE',
  },
  {
    id: '0e8daf1b-45b0-4eb0-9dde-383fede78a9b',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/monkey-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/monkey-thumbnail-img.png',
    category: 'ANIMAL',
  },
  {
    id: '1a38bf4a-659d-4470-956c-56c1bedd26ac',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/cheetah-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/cheetah-thumbnail-img.png',
    category: 'ANIMAL',
  },
  {
    id: '8f2ebd70-4fdd-47a0-b4f9-a6c654b519ab',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/ooti-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/ooti-thumbnail-img.png',
    category: 'PLACE',
  },
  {
    id: '7a72c38e-a83d-48eb-b9ce-ae3c0361cc49',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/pineapple-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/pineapple-thumbnail-img.png',
    category: 'FRUIT',
  },
  {
    id: '97a33ed5-98ed-4c95-a8f0-1595880b3b69',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/strawberry-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/strawberry-thumbnail-img.png',
    category: 'FRUIT',
  },
  {
    id: '07e20159-a950-4c22-9ca8-5ed71563ae24',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/maldives-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/maldives-thumbnail-img.png',
    category: 'PLACE',
  },
  {
    id: '43883239-8a28-47dc-9e93-43ef31654c17',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/emerald-lake-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/emerald-thumbnail-lake-img.png',
    category: 'PLACE',
  },
  {
    id: '49865ac4-b5e8-4d04-893b-d69ad6004da8',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/watermelon-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/watermelon-thumbnail-img.png',
    category: 'FRUIT',
  },
  {
    id: '649ab251-7fd6-4d65-aa0f-39020ce25932',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/elephant-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/elephant-thumbnail-img.png',
    category: 'ANIMAL',
  },
  {
    id: '1d0d1c41-e05e-4820-8614-34ee5ada20e0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/jammu-hills-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/jammu-thumbnail-hills-img.png',
    category: 'PLACE',
  },
  {
    id: '88b4ab36-a0c1-4c56-9ce5-3b80dd8c7669',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/fierce-coyote-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/fierce-thumbnail-coyote-img.png',
    category: 'ANIMAL',
  },
  {
    id: '8a841bf8-3222-44da-b0fb-4c60190402d7',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/lidder-valley-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/lidder-thumbnail-valley-img.png',
    category: 'PLACE',
  },
  {
    id: 'd406e63c-eaaf-49ea-88a6-ed6a1572eb97',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/kivi-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/kivi-thumbnail-img.png',
    category: 'FRUIT',
  },
  {
    id: 'e997ebf9-9a47-4b7e-9035-01ae372d73dc',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/dragon-fruit-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/dragon-thumbnail-fruit-img.png',
    category: 'FRUIT',
  },
  {
    id: 'c7fbe10e-3282-4fca-815b-91b75d5228cb',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/match-game/goa-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/goa-thumbnail-img.png',
    category: 'PLACE',
  },
  {
    id: '4210274c-7304-44d6-8690-c5251252cd10',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/papaya-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/papaya-thumbnail-img.png',
    category: 'FRUIT',
  },
  {
    id: '057b6193-a80d-4036-9e6e-fe847c99fbb6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/mixed-fruits-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/mixed-thumbnail-fruits-img.png',
    category: 'FRUIT',
  },
  {
    id: '4e56c59b-835b-4802-87fe-77aaaa5b9526',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/match-game/fox-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/fox-thumbnail-img.png',
    category: 'ANIMAL',
  },
  {
    id: 'ad75a7b1-0875-4700-977b-2c45924509aa',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/lotus-temple-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/lotus-thumbnail-temple-img.png',
    category: 'PLACE',
  },
  {
    id: '525aba17-ed5c-4f09-ad1c-b6bff222c97a',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/match-game/dog-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/dog-thumbnail-img.png',
    category: 'ANIMAL',
  },
  {
    id: 'c6c66b00-c130-47d2-9d3a-1c3378d08aba',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/apple-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/apple-thumbnail-img.png',
    category: 'FRUIT',
  },
  {
    id: '6078b408-4f10-46d3-8815-db14403dbd73',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/bhadrinath-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/bhadrinath-thumbnail-img.png',
    category: 'PLACE',
  },
  {
    id: 'a2baca84-3beb-49d1-bced-f9a88c161bec',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/camel-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/camel-thumbnail-img.png',
    category: 'ANIMAL',
  },
  {
    id: '1edac278-8390-4da9-b914-5f41fb49283c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/cherry-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/cherry-thumbnail-img.png',
    category: 'FRUIT',
  },
]

class App extends Component {
  state = {
    tabs: tabsList[0].tabId,
    stateUrl: imagesList[0].imageUrl,
    count: 0,
    flag: false,
    timer: 60,
  }

  componentDidMount() {
    this.startTimer()
  }

  componentWillUnmount() {
    this.clearTimer()
  }

  startTimer = () => {
    this.intervalId = setInterval(this.decrementTimer, 1000)
    return this.intervalId
  }

  clearTimer = () => clearInterval(this.intervalId)

  updateTheList = tab => {
    const lists = imagesList.filter(each => each.category === tab)
    return lists
  }

  gamePlayClicked = () => {
    this.setState({count: 0})
  }

  decrementTimer = () => {
    const {timer, flag} = this.state

    if (timer === 1) {
      this.clearTimer()
      this.setState({flag: !flag})
    }
    this.setState({timer: timer - 1})
  }

  resetBtnClicked = () => {
    const {flag} = this.state
    if (flag) this.gamePlayClicked()
    this.startTimer()
    this.setState({flag: !flag, timer: 60})
  }

  tabBtnClicked = url => {
    this.setState({tabs: url})
  }

  btmClicked = url => {
    const {stateUrl, flag} = this.state

    if (url === stateUrl) {
      this.setState(prevState => ({count: prevState.count + 1}))
    } else {
      this.clearTimer()
      this.setState({flag: !flag})
    }

    this.setState({
      stateUrl: imagesList[Math.floor(Math.random() * 30)].imageUrl,
    })
  }

  scoreBoard = () => {
    const {count} = this.state
    return (
      <div className="btm2">
        <img
          alt="trophy"
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png "
          className="score-img"
        />
        <p className="score-para2">Your Score</p>
        <p className="score-count">{count}</p>
        <div className="btn-div">
          <button className="score-btn" type="button">
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
              className="reset"
              alt="reset"
              onClick={this.resetBtnClicked}
            />
            <p className="reset-para">Play Again</p>
          </button>
        </div>
      </div>
    )
  }

  gamePlay = () => {
    const {tabs, stateUrl} = this.state

    const updatedList = this.updateTheList(tabs)
    return (
      <div className="bg-cont">
        <img src={stateUrl} className="big-img" alt="match" />
        <ul className="unordered">
          {tabsList.map(each => (
            <Tabs
              key={each.tabId}
              details={each}
              tabBtnClicked={this.tabBtnClicked}
              isClicked={tabs}
            />
          ))}
        </ul>

        <ul className="unordered2">
          {updatedList.map(each => (
            <TabItems
              key={each.id}
              details={each}
              btmClicked={this.btmClicked}
            />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {count, flag, timer} = this.state

    return (
      <div>
        <nav className="nav-cont">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png "
            className="nav-logo"
            alt="website logo"
          />

          <div className="nav-cont2">
            <p className="score-para">
              Score: <span className="span">{count}</span>
            </p>
            <div className="time-cont">
              <img
                src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png "
                className="timer"
                alt="timer"
              />

              <p className="time-para">
                <span>{timer}</span> Sec
              </p>
            </div>
          </div>
        </nav>

        <div className="bg-cont">
          {flag ? this.scoreBoard() : this.gamePlay()}
        </div>
      </div>
    )
  }
}

export default App








#######################################################################################################         App.css









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

body {
  margin: 0px;
}

* {
  box-sizing: border-box;
}

.nav-cont {
  background-color: #2c0e3a;
  height: 76px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.nav-logo {
  height: 50px;
  width: 140px;
  margin-top: 8px;
  margin-left: 22px;
}
.nav-cont2 {
  display: flex;
  flex-direction: row;
}

.time-cont {
  display: flex;
  flex-direction: row;
  margin-right: 80px;
}
.score-para {
  font-size: 18px;
  font-weight: 500;
  font-family: 'roboto';
  color: white;
}
.timer {
  height: 30px;
  width: 30px;
  margin-top: 14px;
  margin-left: 30px;
  margin-right: 10px;
}
.span {
  color: #fec653;
}
.time-para {
  font-size: 18px;
  font-weight: 500;
  font-family: 'roboto';
  color: #fec653;
}

.bg-cont {
  background-image: url('https://assets.ccbp.in/frontend/react-js/match-game-bg.png');
  background-size: cover;
  min-height: 89vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.big-img {
  height: 250px;
  width: 500px;
  border-radius: 9px;
}
.unordered {
  display: flex;
  flex-direction: row;
  list-style-type: none;
}
.unordered2 {
  list-style-type: none;
  width: 800px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.btm2 {
  background-image: url('https://assets.ccbp.in/frontend/react-js/match-game-score-card-lg-bg.png');
  height: 80vh;
  width: 40vw;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 200px;
  border-radius: 20px;
}
.score-img {
  height: 180px;
  width: 300px;
  margin-bottom: 0px;
}
.score-para2 {
  font-family: 'roboto';
  font-weight: 500;
  font-size: 22px;
  color: white;
  margin-top: 0px;
  margin-bottom: 0px;
}
.score-count {
  font-family: 'roboto';
  font-weight: 500;
  font-size: 24px;
  color: white;
  margin-top: 4px;
  margin-bottom: 4px;
}
.score-btn {
  display: flex;
  flex-direction: row;
  background-color: #cf60c8;
  color: white;
  border-radius: 13px;
  border: none;
}
.reset {
  height: 24px;
  width: 24px;
  margin-top: 15px;
  margin-right: 4px;
}
.reset-para {
  font-family: 'roboto';
  font-weight: 500;
  font-size: 16px;
  color: white;
}









#######################################################################################      Tabs.index.js








import './index.css'

const Tabs = props => {
  const {details, tabBtnClicked, isClicked} = props
  const {displayText, tabId} = details

  const tabBtnClickedOk = () => {
    tabBtnClicked(tabId)
  }
  console.log(tabId, isClicked)
  const isChecked = isClicked === tabId ? 'blue-line' : 'line'
  const isChecked2 = isClicked === tabId ? 'blue-para' : 'para1'

  return (
    <li className="lists">
      <button className="tab-btn" type="button" onClick={tabBtnClickedOk}>
        <p className={isChecked2}>{displayText}</p>
        <hr className={isChecked} />
      </button>
    </li>
  )
}

export default Tabs









###########################################################################################        Tabs.index.css






.para1 {
  font-family: 'roboto';
  font-weight: 500;
  font-size: 20px;
  color: white;
  margin-bottom: 0px;
}
.lists {
  margin: 13px;
}
.tab-btn {
  background-color: transparent;
  border: none;
}
.blue-para {
  color: blue;
  font-family: 'roboto';
  font-weight: 500;
  font-size: 20px;

  margin-bottom: 0px;
}
.blue-line {
  background-color: blue;
  height: 1px;
  border: none;
}
.line {
  background-color: white;
  height: 1px;
  border: none;
}







############################################################################################             Tabs_item.index.js







import './index.css'

const TabItems = props => {
  const {btmClicked, details} = props
  const {thumbnailUrl, imageUrl} = details

  const btmImageClicked = () => {
    btmClicked(imageUrl)
  }

  return (
    <li className="list2">
      <button className="btm-btn" type="button" onClick={btmImageClicked}>
        <img src={thumbnailUrl} className="image-btm" alt="thumbnail" />
      </button>
    </li>
  )
}

export default TabItems











#####################################################################################################       Tabs_item.index.css





.image-btm {
  height: 100px;
  width: 100px;
  border-radius: 3px;
}
.list2 {
  margin: 10px;
}
.btm-btn {
  background-color: transparent;
  border: none;
}







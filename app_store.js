URL :     anithaappstore.ccbp.tech

############################################################         ****INDEX.JS*****
  
  
  import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)


#####################################################         ****APP.JS****
  

import AppStore from './components/AppStore'

import './App.css'

const App = () => <AppStore />

export default App


###################################################          ****APP.CSS****



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



########################################################################################       *****COMPONENTS_APPSTORE.JS****
  
  
  
  import {Component} from 'react'

import TabItem from '../TabItem'
import AppItem from '../AppItem'
import './index.css'

const tabsList = [
  {tabId: 'SOCIAL', displayText: 'Social'},
  {tabId: 'GAMES', displayText: 'Games'},
  {tabId: 'NEWS', displayText: 'News'},
  {tabId: 'FOOD', displayText: 'Food'},
]

const appsList = [
  {
    appId: 0,
    appName: 'Facebook',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-facebook.png',
    category: 'SOCIAL',
  },
  {
    appId: 1,
    appName: 'Messenger',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-messenger.png',
    category: 'SOCIAL',
  },
  {
    appId: 2,
    appName: 'WhatsApp',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-whatsapp.png',
    category: 'SOCIAL',
  },
  {
    appId: 3,
    appName: 'Instagram',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-instagram.png',
    category: 'SOCIAL',
  },
  {
    appId: 4,
    appName: 'Snapchat',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-snapchat.png',
    category: 'SOCIAL',
  },
  {
    appId: 5,
    appName: 'Twitter',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-twitter.png',
    category: 'SOCIAL',
  },
  {
    appId: 6,
    appName: 'Pinterest',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-pinterest.png',
    category: 'SOCIAL',
  },
  {
    appId: 7,
    appName: 'WeChat',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-wechat.png',
    category: 'SOCIAL',
  },
  {
    appId: 8,
    appName: 'LinkedIn',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-linkedin.png',
    category: 'SOCIAL',
  },
  {
    appId: 9,
    appName: 'Telegram',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-telegram.png',
    category: 'SOCIAL',
  },
  {
    appId: 10,
    appName: 'Subway Surfers',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-subway-surfers.png',
    category: 'GAMES',
  },
  {
    appId: 11,
    appName: 'Crossy Road',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-crossy-road.png',
    category: 'GAMES',
  },
  {
    appId: 12,
    appName: 'Super Chef',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-super-chef.png',
    category: 'GAMES',
  },
  {
    appId: 13,
    appName: 'Angry Birds',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-angry-birds.png',
    category: 'GAMES',
  },
  {
    appId: 14,
    appName: 'Hill Climb 2',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-hill-climb-2.png',
    category: 'GAMES',
  },
  {
    appId: 15,
    appName: 'Temple Run',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-temple-run.png',
    category: 'GAMES',
  },
  {
    appId: 16,
    appName: 'Dr. Driving',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-dr-driving.png',
    category: 'GAMES',
  },
  {
    appId: 17,
    appName: 'Smurfs Bubble',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-smurfs-bubble.png',
    category: 'GAMES',
  },
  {
    appId: 18,
    appName: 'Grade Learning',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-grade-learning.png',
    category: 'GAMES',
  },
  {
    appId: 19,
    appName: 'My Talking Tom',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-my-talking-tom.png',
    category: 'GAMES',
  },
  {
    appId: 20,
    appName: 'Inshorts',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-inshorts.png',
    category: 'NEWS',
  },
  {
    appId: 21,
    appName: 'Way2News',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-way2news.png',
    category: 'NEWS',
  },
  {
    appId: 22,
    appName: 'Google News',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-google-news.png',
    category: 'NEWS',
  },
  {
    appId: 23,
    appName: 'Flipboard',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-flipboard.png',
    category: 'NEWS',
  },
  {
    appId: 24,
    appName: 'SmartNews',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-smart-news.png',
    category: 'NEWS',
  },
  {
    appId: 25,
    appName: 'BBC News',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-bbc-news.png',
    category: 'NEWS',
  },
  {
    appId: 26,
    appName: 'CNN News',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-cnn-news.png',
    category: 'NEWS',
  },
  {
    appId: 27,
    appName: 'Daily Wire',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-daily-wire.png',
    category: 'NEWS',
  },
  {
    appId: 28,
    appName: 'AP News',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-ap-news.png',
    category: 'NEWS',
  },
  {
    appId: 29,
    appName: 'News Break',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-news-break.png',
    category: 'NEWS',
  },
  {
    appId: 30,
    appName: 'Zomato',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-zomato.png',
    category: 'FOOD',
  },
  {
    appId: 31,
    appName: 'Swiggy',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-swiggy.png',
    category: 'FOOD',
  },
  {
    appId: 32,
    appName: "Domino's Pizza",
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-dominos.png',
    category: 'FOOD',
  },
  {
    appId: 33,
    appName: 'All in One',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-all-in-one.png',
    category: 'FOOD',
  },
  {
    appId: 34,
    appName: 'Instacart',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-insta-cart.png',
    category: 'FOOD',
  },
  {
    appId: 35,
    appName: 'Saucey',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-saucey.png',
    category: 'FOOD',
  },
  {
    appId: 36,
    appName: 'Waitr',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-waitr.png',
    category: 'FOOD',
  },
  {
    appId: 37,
    appName: 'Grubhub',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-grubhub.png',
    category: 'FOOD',
  },
  {
    appId: 38,
    appName: 'Mercato',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-mercato.png',
    category: 'FOOD',
  },
  {
    appId: 39,
    appName: 'DOT',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/app-store/food-dot.png',
    category: 'FOOD',
  },
]

class AppStore extends Component {
  state = {id: tabsList[0].tabId, input: ''}

  btnClicked = tabsId => {
    this.setState({id: tabsId})
  }

  onChangeFiltering = event => {
    this.setState({input: event.target.value})
  }

  render() {
    const {id} = this.state
    const {input} = this.state

    const filteredList = appsList.filter(eachItem => eachItem.category === id)
    const onChangeUserFilter = filteredList.filter(eachItem =>
      eachItem.appName.toLowerCase().includes(input.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <h1 className="heading">App Store</h1>
        <div className="input-card">
          <input
            className="input"
            type="search"
            placeholder="Search"
            onChange={this.onChangeFiltering}
          />
          <img
            alt="search icon"
            src="https://assets.ccbp.in/frontend/react-js/app-store/app-store-search-img.png"
            className="search"
          />
        </div>
        <ul className="unordered">
          {tabsList.map(eachItem => (
            <TabItem
              details={eachItem}
              key={eachItem.tabId}
              btnClicked={this.btnClicked}
              active={eachItem.tabId === id}
              lineActive={eachItem.tabId === id}
            />
          ))}
        </ul>
        <ul className="unordered1">
          {onChangeUserFilter.map(eachItem => (
            <AppItem details={eachItem} key={eachItem.appId} />
          ))}
        </ul>
      </div>
    )
  }
}

export default AppStore




###########################################################################################          ****COMPONENTS_APPSTORE.CSS****
  
  
  
 * {
  box-sizing: border-box;
}
body {
  margin: 0px;
}
.bg-container {
  background-image: linear-gradient(to bottom, #fff1eb, #ace0f9);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.heading {
  font-family: 'Bree Serif';
  font-weight: 700;
  font-size: 40px;
  color: #1e293b;
}
.input-card {
  border-style: solid;
  display: flex;
  flex-direction: row;
  border-radius: 8px;
  border-color: #7b8794;
  height: 40px;
  width: 400px;
}
.search {
  height: 30px;
  width: 30px;
  padding-top: 2px;
}
.input {
  background-color: transparent;
  border: 0px;
  margin-top: 0px;
  height: 36px;
  width: 350px;
}
.unordered {
  display: flex;
  flex-direction: row;
}
.unordered1 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  width: 50%;
}
@media screen and (max-width: 576px) {
  .unordered1 {
    width: 90%;
    margin-right: 32px;
  }
  .unordered {
    margin-right: 32px;
  }
  .bg-container {
    height: 900px;
  }
  .input-card {
    height: 28px;
    width: 280px;
  }
  .search {
    height: 20px;
    width: 20px;
  }
  .input {
    height: 22px;
    width: 250px;
  }
}



##############################################################################         ****COMPONENTS_TABITEM.JS****
  
  
  
  import './index.css'

const TabItem = props => {
  const {details, btnClicked, active, lineActive} = props
  const {displayText, tabId} = details

  const tabClicked = () => {
    btnClicked(tabId)
  }

  const isActive = active ? 'button2' : 'button'
  const lineAct = lineActive ? 'line2' : 'line'
  return (
    <li className="tab-card">
      <button className={isActive} type="button" onClick={tabClicked}>
        {displayText}
      </button>
      <hr className={lineAct} />
    </li>
  )
}

export default TabItem


################################################################################           ****COMPONENTS_TABITEM.CSS****
  
  
  
  .tab-card {
  display: flex;
  flex-direction: column;
}

.line {
  background-color: #7b8794;
  width: 70px;
  height: 3px;
  margin: 0px;
}
.button {
  background-color: transparent;
  border: 0px;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 600;
  color: #7b8794;
}
.button2 {
  background-color: transparent;
  border: 0px;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 600;
  color: #2563eb;
}
.line2 {
  width: 70px;
  height: 3px;
  margin: 0px;
  background-color: #2563eb;
}


###########################################################################    ****COMPONENTS_APPITEM.JS****
  
  
  import './index.css'

const AppItem = props => {
  const {details} = props
  const {appName, imageUrl} = details

  return (
    <li className="app-card" onClick={userSelected}>
      <img src={imageUrl} className="image-icon" alt={appName} />
      <p className="heading-icon">{appName}</p>
    </li>
  )
}

export default AppItem


###########################################################################    ****COMPONENTS_APPITEM.CSS****
  
  
  
  * {
  box-sizing: border-box;
}
body {
  margin: 0px;
}
.bg-container {
  background-image: linear-gradient(to bottom, #fff1eb, #ace0f9);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.heading {
  font-family: 'Bree Serif';
  font-weight: 700;
  font-size: 40px;
  color: #1e293b;
}
.input-card {
  border-style: solid;
  display: flex;
  flex-direction: row;
  border-radius: 8px;
  border-color: #7b8794;
  height: 40px;
  width: 400px;
}
.search {
  height: 30px;
  width: 30px;
  padding-top: 2px;
}
.input {
  background-color: transparent;
  border: 0px;
  margin-top: 0px;
  height: 36px;
  width: 350px;
}
.unordered {
  display: flex;
  flex-direction: row;
}
.unordered1 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  width: 50%;
}
@media screen and (max-width: 576px) {
  .unordered1 {
    width: 90%;
    margin-right: 32px;
  }
  .unordered {
    margin-right: 32px;
  }
  .bg-container {
    height: 900px;
  }
  .input-card {
    height: 28px;
    width: 280px;
  }
  .search {
    height: 20px;
    width: 20px;
  }
  .input {
    height: 22px;
    width: 250px;
  }
}

 

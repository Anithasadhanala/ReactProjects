URL :  https://profiles.ccbp.tech


#######################################################3         ****INDEX.JS****
  
  
  
  import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)


#######################################################33      ****APP.JS*****
  
  
  
  import ReviewsCarousel from './components/ReviewsCarousel'

import './App.css'

const reviewsList = [
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/wade-warren-img.png',
    username: 'Wade Warren',
    companyName: 'Rang',
    description:
      'The most important thing I learnt is that nothing is a failure, but what we learn from that is a rich and rewarding experience.',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/adrian-williams-img.png',
    username: 'Adrian Williams',
    companyName: 'WheelO',
    description:
      'Coming to Startup School is the best thing that has happened to me. I wish every startup in the country should get this opportunity.',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/sherry-jhonson-img.png',
    username: 'Sherry Johnson',
    companyName: 'MedX',
    description:
      'I am glad to have such experienced mentors guiding us in every step through out the 4 weeks. I have improved personally and developed many interpersonal skills.',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/ronald-jones-img.png',
    username: 'Ronald Jones',
    companyName: 'Infinos Tech',
    description:
      'I am really loving the way how mentors are taking care of us, the way they are explaining big theories with lots of case studies and innovative methods.',
  },
]

const App = () => <ReviewsCarousel reviewsList={reviewsList} />

export default App





######################################################################################################################   *****APP.CSS****



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



#####################################################################################3      *****COMPONENTS_REVIEWSCOURSEL_INDEX.JS*****
  
  
  
  
  
  import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {id: 0}

  rightBtnClicked = () => {
    const {reviewsList} = this.props
    const {id} = this.state

    if (id + 1 < reviewsList.length) {
      this.setState(prevState => ({
        id: prevState.id + 1,
      }))
    }
  }

  leftBtnClicked = () => {
    const {id} = this.state

    if (id - 1 > -1) {
      this.setState(prevState => ({
        id: prevState.id - 1,
      }))
    }
  }

  render() {
    const {id} = this.state
    const {reviewsList} = this.props

    const review = reviewsList[id]
    const {imgUrl, username, companyName, description} = review
    return (
      <div className="bg-container">
        <h1 className="heading">Reviews</h1>
        <div className="cards">
          <div>
            <button
              className="button"
              type="button"
              onClick={this.leftBtnClicked}
              testid="leftArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                className="sliding"
                alt="left arrow"
              />
            </button>
          </div>
          <div className="profile">
            <img src={imgUrl} className="profile-image" alt={username} />
            <p className="heading head">{username}</p>
            <p className="para">{companyName}</p>
            <p className="big-para">{description}</p>
          </div>
          <div>
            <button
              className="button"
              type="button"
              onClick={this.rightBtnClicked}
              testid="rightArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                className="sliding"
                alt="right arrow"
              />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel




############################################################################################3         *****COMPONENTS_REVIEWCOURSEL_INDEX.CSS*****
  
  
  
  * {
  box-sizing: border-box;
}
body {
  margin: 0px;
}
.bg-container {
  background-image: url('https://assets.ccbp.in/frontend/react-js/reviews-bg.png');
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: 'center';
  align-items: center;
}
.cards {
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.profile {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.sliding {
  height: 20px;
  width: 20px;
}
.heading {
  margin-top: 60px;
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 30px;
  color: #ffffff;
}
.para {
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 20px;
  color: #171f46;
}
.big-para {
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 15px;
  color: #171f46;
  width: 60%;
  text-align: center;
}
.profile-image {
  height: 160px;
  width: 160px;
}
.button {
  border: 0px;
  background-color: transparent;
}
@media screen and (max-width: 600px) {
  .heading {
    margin-top: 40px;
  }
  .head {
    margin-top: 40px;
    font-family: 'Roboto';
    font-weight: 600;
    font-size: 25px;
    color: #ffffff;
  }
  .big-para {
    width: 90%;
  }
}

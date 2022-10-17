https://anithaproject2.ccbp.tech/




#####################################################################            DigitalTimer.index.js




import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {minutes: 25, seconds: 0, start: false}

  componentWillUnmount() {
    this.clearIntervalNow()
  }

  onIncrementSecondsByOne = () => {
    const {seconds, minutes, start} = this.state

    if (minutes * 60 - seconds > 0 && start === true)
      this.setState({seconds: seconds + 1})
  }

  clearIntervalNow = () => {
    clearInterval(this.intervalId)
  }

  startBtnClicked = () => {
    const {start} = this.state
    this.setState({start: !start})

    if (start === true) {
      this.clearIntervalNow()
    } else {
      const {seconds, minutes} = this.state
      const timeOver = seconds === minutes * 60
      if (timeOver === true) {
        this.clearIntervalNow()
      } else {
        this.intervalId = setInterval(this.onIncrementSecondsByOne, 1000)
      }
    }
  }

  resetBtnClicked = () => {
    this.setState({minutes: 25, seconds: 0, start: false})
  }

  plusClicked = () => {
    const {start} = this.state

    return start === false
      ? this.setState(prevState => {
          const {minutes} = prevState
          return {minutes: minutes + 1}
        })
      : ''
  }

  minusClicked = () => {
    const {start, minutes} = this.state

    return start === false && minutes > 0
      ? this.setState({minutes: minutes - 1})
      : ''
  }

  timeCalculator = () => {
    const {minutes, seconds} = this.state
    console.log(seconds)
    const totSec = minutes * 60 - seconds
    const min = parseInt(totSec / 60)
    const sec = totSec % 60

    const min2 = min < 10 ? `0${min}` : min
    const sec2 = sec < 10 ? `0${sec}` : sec

    return `${min2}:${sec2}`
  }

  render() {
    const {start, minutes} = this.state

    const startImg = start
      ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png '
    const startText = start ? 'Pause' : 'Start'
    const timeText = start ? 'Running' : 'Paused'

    const imgAlt = start ? 'pause icon' : 'play icon'
    return (
      <div className="bg-cont">
        <h1 className="head">Digital Timer</h1>
        <div className="cont">
          <div className="cont2">
            <div className="time-cont">
              <h1 className="time">{this.timeCalculator()}</h1>
              <p className="time-status">{timeText}</p>
            </div>
          </div>
          <div className="text-cont">
            <div className="text-cont2">
              <button
                className="text-cont3"
                type="button"
                onClick={this.startBtnClicked}
              >
                <div className="div1">
                  <img src={startImg} alt={imgAlt} className="time-img" />
                  <p className="time-text">{startText}</p>
                </div>
              </button>

              <button
                className="text-cont3"
                type="button"
                onClick={this.resetBtnClicked}
              >
                <div className="div1">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                    alt="reset icon"
                    className="time-img"
                  />
                  <p className="time-text">Reset</p>
                </div>
              </button>
            </div>

            <p className="time-long-text">Set Timer Limit</p>

            <div className="btn-cont">
              <button
                className="minus-plus-btn"
                type="button"
                onClick={this.minusClicked}
              >
                -
              </button>

              <p className="time-btn">{minutes}</p>
              <button
                className="minus-plus-btn"
                type="button"
                onClick={this.plusClicked}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer










##########################################################################                 digitalTimer.index.css










/* Write your CSS here */

body {
  margin: 0px;
}
* {
  box-sizing: border-box;
}

.bg-cont {
  background-color: #cffcf1;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.head {
  font-family: 'Roboto';
  font-weight: 800;
  font-size: 38px;
  color: black;
}
.cont {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.cont2 {
  height: 300px;
  width: 300px;
  background-image: url('https://assets.ccbp.in/frontend/react-js/digital-timer-elapsed-bg.png');
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.time-cont {
  border-radius: 90px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 120px;
  width: 120px;
}
.btn-cont {
  display: flex;
  flex-direction: row;
}
.time {
  font-family: 'Roboto';
  font-weight: 800;
  font-size: 28px;
  color: #00d9f5;
  margin: 0px;
}
.time-status {
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 20px;
  color: black;
  margin: 0px;
}
.text-cont {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
}
.text-cont2 {
  display: flex;
  flex-direction: row;
}
.text-cont3 {
  display: flex;
  flex-direction: row;
  background-color: transparent;
  border: none;
}
.div1 {
  display: flex;
  flex-direction: row;
}
.time-img {
  height: 30px;
  width: 30px;
}
.time-text {
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 18px;
  color: black;
  margin-top: 0px;
  margin-top: 4px;
  margin-left: 4px;
}
.time-long-text {
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 14px;
  color: black;
}

.minus-plus-btn {
  border: none;
  background-color: transparent;
  font-size: 20px;
  color: black;
  font-weight: 700;
}
.time-btn {
  height: 30px;
  width: 80px;
  border: none;
  border-radius: 4px;
  background-color: #00d9f5;
  font-size: 20px;
  color: black;
  font-weight: 700;
  margin-left: 6px;
  padding-left: 24px;
}

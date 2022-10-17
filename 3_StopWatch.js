https://anithaproject3.ccbp.tech



###################################################################################33         stopWatch.index.js



import {Component} from 'react'
import './index.css'

class StopWatch extends Component {
  state = {seconds: 0}

  componentWillUnmount() {
    this.clearInternalNow()
  }

  increaseSeconds = () => {
    const {seconds} = this.state
    console.log(seconds)
    this.setState({
      seconds: seconds + 1,
    })
  }

  clearInternalNow = () => {
    clearInterval(this.intervalId)
  }

  startClicked = () => {
    this.intervalId = setInterval(this.increaseSeconds, 1000)
  }

  stopClicked = () => {
    this.clearInternalNow()
  }

  resetClicked = () => {
    this.setState({seconds: 0})
    this.clearInternalNow()
  }

  timeCalculated = () => {
    const {seconds} = this.state

    const min = parseInt(seconds / 60)
    const sec = seconds % 60

    const parsedMin = min < 10 ? `0${min}` : min
    const parsedSec = sec < 10 ? `0${sec}` : sec

    return `${parsedMin}:${parsedSec}`
  }

  render() {
    return (
      <div className="bg-cont">
        <h1 className="head">Stopwatch</h1>
        <div className="cont">
          <div className="time-cont">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              className="img"
              alt="stopwatch"
            />
            <p className="time-para">Timer</p>
          </div>
          <h1 className="para">{this.timeCalculated()}</h1>
          <div className="btn-cont">
            <button
              className="but start"
              type="button"
              onClick={this.startClicked}
            >
              Start
            </button>
            <button
              className="but stop"
              type="button"
              onClick={this.stopClicked}
            >
              Stop
            </button>
            <button
              className="but reset"
              type="button"
              onClick={this.resetClicked}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default StopWatch







############################################################################################              stopWatch.index.css









body {
  margin: 0px;
}
* {
  box-sizing: border-box;
}
.bg-cont {
  background-image: url('https://assets.ccbp.in/frontend/react-js/stopwatch-lg-bg.png');
  background-size: cover;

  padding-top: 50px;
  padding-left: 100px;
  height: 100vh;
  width: 100vw;
}
.cont {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  box-shadow: 0px 4px 16px 0px #bfbfbf;
  height: 300px;
  width: 300px;
}
.head {
  font-family: 'roboto';
  font-weight: 800;
  font-size: 30px;
  color: black;
}
.time-cont {
  display: flex;
  flex-direction: row;
}
.img {
  height: 20px;
  width: 20px;
}
.time-para {
  font-family: 'roboto';
  font-weight: 600;
  font-size: 12px;
  color: black;
  margin-top: 4px;
  margin-left: 12px;
}
.para {
  font-family: 'roboto';
  font-weight: 800;
  font-size: 28px;
  color: black;
}
.but {
  height: 30px;
  width: 70px;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: 600;
  font-size: 16px;
  margin-right: 8px;
}
.start {
  background-color: #1db05f;
}
.stop {
  background-color: #ef0d36;
}
.reset {
  background-color: #eaa800;
}



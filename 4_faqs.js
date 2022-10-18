https://anithaproject4.ccbp.tech


####################################################################         Faqs.index.js




import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="bg-cont">
        <div className="cont">
          <h1 className="head">FAQs</h1>
          <ul className="unordered">
            {faqsList.map(each => (
              <FaqItem key={each.id} details={each} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs





####################################################################       Faqs.index.css





body {
  margin: 0px;
}
* {
  box-sizing: border-box;
}

.bg-cont {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #d7dae6;
  height: 100vh;
}
.head {
  font-family: 'roboto';
  font-weight: 800;
  font-size: 40px;
  color: #cb8805;
}
.cont {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 4px;
  width: 70%;
}
.unordered {
  list-style-type: none;
}







#################################################################################           Faqs_item.index.js




import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {flag: false}

  btnClicked = () => {
    const {flag} = this.state
    console.log(flag)
    this.setState({flag: !flag})
  }

  render() {
    const {flag} = this.state
    const {details} = this.props
    const {questionText, answerText} = details
    const smallImg = flag
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

    const altText = flag ? 'minus' : 'plus'

    return (
      <li className="list">
        <div className="list-div">
          <h1 className="para2">{questionText}</h1>
          <div>
            <button className="but" type="button" onClick={this.btnClicked}>
              <img src={smallImg} className="small-img" alt={altText} />
            </button>
          </div>
        </div>
        {flag ? (
          <>
            <hr className="lines" />
            <p className="para3">{answerText}</p>
          </>
        ) : (
          ''
        )}
      </li>
    )
  }
}

export default FaqItem










####################################################################################       Faqs_item.index.css





.list {
  border-style: solid;
  border-color: #e4e7eb;
  border-radius: 5px;
  border-width: 2px;
  display: flex;
  flex-direction: column;
  min-width: 700px;
  min-height: 50px;
  margin-bottom: 20px;
}
.list-div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.para2 {
  font-family: 'roboto';
  font-weight: 500;

  color: #52606d;

  padding-left: 20px;
  font-size: 16px;
}
.small-img {
  height: 25px;
  width: 25px;
  margin-top: 8px;
}
.but {
  background-color: transparent;
  border: none;
  margin-right: 20px;
}
.lines {
  background-color: #e4e7eb;
  height: 3px;
  border: none;
  width: 650px;
}
.para3 {
  font-family: 'roboto';
  font-weight: 400;
  color: #9aa5b1;
  padding-left: 16px;
  font-size: 14px;
  width: 600px;
  margin-top: 0px;
}

import {AiOutlineBold, AiOutlineUnderline} from 'react-icons/ai'
import {GoItalic} from 'react-icons/go'
import {Component} from 'react'

import './index.css'

class Home extends Component {
  state = {bold: false, italic: false, underline: false}

  onClickUnderLine = () => {
    this.setState(prevState => ({
      underline: !prevState.underline,
    }))
  }

  onClickBold = () => {
    this.setState(prevState => ({
      bold: !prevState.bold,
    }))
  }

  onClickItalic = () => {
    this.setState(prevState => ({
      italic: !prevState.italic,
    }))
  }

  render() {
    const {italic, bold, underline} = this.state
    console.log(italic, bold, underline)

    const italicClass = italic ? 'italic-class' : ''
    const boldClass = bold ? 'bold-class' : ''
    const underlineClass = underline ? 'underline-class' : ''

    return (
      <div className="text-bg">
        <div className="text-inner">
          <div className="inner-left">
            <h1 className="head">Text Editor</h1>
            <img
              className="text-image"
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </div>

          <div className="inner-right">
            <ul className="nav">
              <li className="li-ele">
                <button
                  className={`icon-button ${bold ? 'yellow' : 'white'}`}
                  type="button"
                  data-testid="bold"
                  onClick={this.onClickBold}
                >
                  <AiOutlineBold size={20} />
                </button>
              </li>
              <li className="li-ele">
                <button
                  className={`icon-button ${italic ? 'yellow' : 'white'}`}
                  type="button"
                  data-testid="italic"
                  onClick={this.onClickItalic}
                >
                  <GoItalic size={22} />
                </button>
              </li>
              <li className="li-ele">
                <button
                  className={`icon-button ${underline ? 'yellow' : 'white'}`}
                  type="button"
                  data-testid="underline"
                  onClick={this.onClickUnderLine}
                >
                  <AiOutlineUnderline size={22} />
                </button>
              </li>
            </ul>
            <hr className="hr" />
            <textarea
              className={`text-area ${italicClass} ${boldClass} ${underlineClass}`}
            />
          </div>
        </div>
      </div>
    )
  }
}
export default Home

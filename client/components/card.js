import React from 'react'

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    }
  }

  updateSelection = (selection) => {
    this.setState({ selected: selection });
  }

  clickedNext = () => {
    this.setState({
      selected: null
    })
    this.props.advanceQuestion(this.props.question.options[this.state.selected]);
  }

  render() {
    const currentQuestion = this.props.question;
    return (
      <div className="card">
        <img className='card-background-image' src='images/card2.png' />
        <div className="question">{currentQuestion.question}</div>
        <div className="answers">
          {Object.entries(currentQuestion.options).map(([choice]) => {
            return <div key={choice} className="answer" onClick={() => this.updateSelection(choice)}>
                { this.state.selected === choice
                  ? <img className="logo-selector" src="images/yellow-logo.png" />
                  : <img className="logo-selector" src="images/logo.png" />
                }
                <div className={`answer-choice answer-choice--${this.state.selected === choice ? 'selected' : 'unselected'}`}>
                  {choice}
                </div>
              </div>;
          })}
        </div>
        <div
          className={`next-button next-button--${this.state.selected ? 'enabled' : 'disabled'}`}
          onClick={() => this.clickedNext()}
        >
          {this.props.nextLabel}
        </div>
      </div>
    )
  }
}

export default Card

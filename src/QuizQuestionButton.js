import React, { Component } from 'react';

class QuizQuestionButton extends Component {
  handleClick(onclick, button) {
    //calls the handle click method in the QuizQuestion component whenever a button is pressed and passes that button text value to that method
    this.props.clickHandler(this.props.button_text)
  }
  render () {
    return (
      <li><button onClick={this.handleClick.bind(this)}>{ this.props.button_text }</button></li>
    )
  }
}

export default QuizQuestionButton;

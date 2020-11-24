import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColoContext from '../contexts/ColorContext';

class Button extends Component {
  renderSubmit(value) {
    return value === 'english' ? 'Submit' : 'Voorleggen';
  }

  renderButtonColor(color) {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {value => this.renderSubmit(value)}
        </LanguageContext.Consumer>
      </button>
    );
  }

  render() {
    return (
      <ColoContext.Consumer>
        {color => this.renderButtonColor(color)}
      </ColoContext.Consumer>
    );
  }
}

export default Button;

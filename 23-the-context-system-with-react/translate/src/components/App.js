import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

import UserCreate from './UserCreate';
class App extends Component {
  state = { language: 'english' };

  onLanguageChange = language => {
    this.setState({ language });
  };

  render() {
    return (
      <div className="ui container">
        <div>
          Select Language:
          <i
            onClick={() => this.onLanguageChange('english')}
            className="flag us"
          />
          <i
            onClick={() => this.onLanguageChange('dutch')}
            className="flag nl"
          />
        </div>
        <LanguageContext.Provider value={this.state.language}>
          <ColorContext.Provider value="primary">
            <UserCreate />
          </ColorContext.Provider>
        </LanguageContext.Provider>
      </div>
    );
  }
}

export default App;

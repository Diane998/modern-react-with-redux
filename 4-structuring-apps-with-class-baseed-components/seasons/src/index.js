import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';

class App extends Component {
  state = { lat: null, errorMsg: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      pos => {
        this.setState({ lat: pos.coords.latitude });
      },
      err => {
        this.setState({ errorMsg: err.message });
      }
    );
  }

  render() {
    return (
      <div>
        {this.state.lat ? (
          <SeasonDisplay lat={this.state.lat} />
        ) : this.state.errorMsg ? (
          `Error: ${this.state.errorMsg}`
        ) : (
          <Loader msg="Please accept location request" />
        )}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));

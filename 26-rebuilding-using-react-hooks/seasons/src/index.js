import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';

const App = () => {
  const [lat, setLat] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  const fetchtLocation = () => {
    window.navigator.geolocation.getCurrentPosition(
      pos => setLat(pos.coords.latitude),
      err => setErrorMsg(err.message)
    );
  };

  useEffect(() => {
    fetchtLocation();
  }, []);

  return (
    <div>
      {lat ? (
        <SeasonDisplay lat={lat} />
      ) : errorMsg ? (
        `Error: ${errorMsg}`
      ) : (
        <Loader msg="Please accept location request" />
      )}
    </div>
  );
};

// class App extends Component {
//   state = { lat: null, errorMsg: '' };

//   componentDidMount() {
//     window.navigator.geolocation.getCurrentPosition(
//       pos => this.setState({ lat: pos.coords.latitude }),
//       err => this.setState({ errorMsg: err.message })
//     );
//   }

//   render() {
//     return (
//       <div>
//         {this.state.lat ? (
//           <SeasonDisplay lat={this.state.lat} />
//         ) : this.state.errorMsg ? (
//           `Error: ${this.state.errorMsg}`
//         ) : (
//           <Loader msg="Please accept location request" />
//         )}
//       </div>
//     );
//   }
// }

ReactDOM.render(<App />, document.querySelector('#root'));

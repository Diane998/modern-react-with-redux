import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';
import useLocation from './useLocation';

const App = () => {
  const [lat, errorMsg] = useLocation();

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

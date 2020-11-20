import React, { Component } from 'react';
import google from '../api/google';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';

class App extends Component {
  state = { videos: [], selectedVideo: null };

  onSearchSubmit = async term => {
    const res = await google.get('/search', {
      params: {
        q: term
      }
    });

    this.setState({ videos: res.data.items });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={this.onVideoSelect}
        />
      </div>
    );
  }
}

export default App;

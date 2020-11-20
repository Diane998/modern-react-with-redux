import React, { Component } from 'react';

class SearchBar extends Component {
  state = { term: '' };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div>
        <div className="ui segment search-bar">
          <form onSubmit={this.onFormSubmit} className="ui form">
            <div className="field">
              <label>Video Search</label>
              <input
                value={this.state.term}
                onChange={e => this.setState({ term: e.target.value })}
                type="text"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;

import React, { Component } from 'react';
import Modal from '../Modal';
import history from '../../history';
import { connect } from 'react-redux';
import { fetchStream, deleteStream } from '../../actions';

class StreamDelete extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  renderActions() {
    return (
      <>
        <div
          onClick={() => this.props.deleteStream(this.props.match.params.id)}
          className="ui negative button"
        >
          Delete
        </div>
        <div onClick={() => history.push('/')} className="ui button">
          Cancel
        </div>
      </>
    );
  }

  renderContent() {
    return !this.props.stream ? (
      'Are you sure you want to delete the stream?'
    ) : (
      <>
        Are you sure you want to delete the stream
        <b> {this.props.stream.title}</b>?
      </>
    );
  }

  render() {
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/')}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);

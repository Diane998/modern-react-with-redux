import React from 'react';

const Loader = ({ msg }) => {
  return (
    <div className="ui active dimmer">
      <div className="ui massive text loader">{msg}</div>
    </div>
  );
};

Loader.defaultProps = {
  msg: 'Loading...',
};

export default Loader;

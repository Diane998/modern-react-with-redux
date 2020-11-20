import React from 'react';
import './SeasonDisplay.css';

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) return lat > 0 ? 'summer' : 'winder';
  else return lat < 0 ? 'winter' : 'summer';
};

const seasonConfig = {
  summer: {
    text: "It's Summer!!!",
    icon: 'snowflake',
  },
  winter: {
    text: "It's Winter!!!",
    icon: 'sun',
  },
};

const SeasonDisplay = ({ lat }) => {
  const season = getSeason(lat, new Date().getMonth());
  const { text, icon } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${icon} icon`}></i>
      <h1>{text}</h1>
      <i className={`icon-right massive ${icon} icon`}></i>
    </div>
  );
};

export default SeasonDisplay;

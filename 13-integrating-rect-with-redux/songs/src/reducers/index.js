import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'No Scrubs', duration: '4:05' },
    { title: 'beggin for Thread', duration: '3:22' },
    { title: 'The Last Time', duration: '5:01' }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  return action.type === 'SONG_SELECTED' ? action.payload : selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});

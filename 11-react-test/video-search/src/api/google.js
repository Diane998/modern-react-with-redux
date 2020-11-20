import axios from 'axios';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 25,
    key: 'AIzaSyB2Di1d7mbZLqjPwrSpdK17OBnzC655hS0'
  }
});

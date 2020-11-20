import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID fX0pM6-0K4IQMXklU4chkem5SginWnfqJXF290MUgeE`
  }
});

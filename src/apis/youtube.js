import axios from 'axios';
const KEY = 'AIzaSyBeBJ_jD9vQ42n5pv3s_L-17jRI5f3B3_A';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResult: 5,
    key: KEY,
    type: 'video',
  },
});

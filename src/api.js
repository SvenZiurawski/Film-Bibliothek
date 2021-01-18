import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';

export default axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: '4f8242e429999cbed7a21e0676725ca8',
  },
});

// import axios from 'axios';

// export default axios.create({
//     baseURL: 'http://localhost:8080',
//     // headers: {"ngrok-skip-browser-warning": "true"}
// })


import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080', // Base URL pointing to your backend
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
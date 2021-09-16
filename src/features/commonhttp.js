import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3003/",
  mode: 'no-cors',
  headers: {
    'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
  }
});
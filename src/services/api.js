import axios from 'axios';

export var api = axios.create({
  baseURL: 'https://opentdb.com/',
});

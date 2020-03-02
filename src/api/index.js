import axios from 'axios';

axios.interceptors.request.use( function (config) {

  config.headers.authorization = '6';

  return config;
} );

export function postTask () {
  return axios.post( 'http://192.168.0.106:3000/api/task', {
    value: 'Test value from axios.',
    deadline: '2020-03-20',
  } );
}

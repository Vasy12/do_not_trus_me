import axios from 'axios';

axios.interceptors.request.use( function (config) {

  config.headers.authorization = '6';

  return config;
} );

/**
 *
 * @param {object} data
 * @return {Promise<AxiosResponse<T>>}
 */
export async function postTask (data) {
  return axios.post( 'http://192.168.0.106:3000/api/task', data );
}

export async function getUserTasks () {
  return axios.get( 'http://192.168.0.106:3000/api/tasks' );
}

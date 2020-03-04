import axios       from 'axios';
import { baseUrl } from './index.js';

/**
 *
 * @param {object} data
 * @return {Promise<AxiosResponse<T>>}
 */
export async function postTask (data) {
  return axios.post( `${baseUrl}/task`, data );
}

/**
 *
 * @return {Promise<AxiosResponse<T>>}
 */
export async function getUserTasks () {
  return axios.get( `${baseUrl}/tasks` );
}

export async function updateTaskById (id, data) {
  return axios.put( `${baseUrl}/task/${id}`, data );
}
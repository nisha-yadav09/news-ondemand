import sendRequest from './send-request';

const BASE_URL = '/api/news';

export function getAll() {
  return sendRequest(BASE_URL);
}

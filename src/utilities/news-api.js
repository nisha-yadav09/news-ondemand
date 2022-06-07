import sendRequest from './send-request';

const BASE_URL = '/api/news';

export function getAll() {
  console.log("old"+BASE_URL)
  return sendRequest(BASE_URL);
}

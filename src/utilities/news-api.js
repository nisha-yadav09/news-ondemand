import sendRequest from './send-request';

const BASE_URL = '/api/news/';

export function getAll() {
  return sendRequest(BASE_URL);
}

export function getScience() {
  return sendRequest(`${BASE_URL}/science`);
}

export function getTech() {
  return sendRequest(`${BASE_URL}/technology`);
}

export function getBusiness() {
  return sendRequest(`${BASE_URL}/business`);
}

export function getSports() {
  return sendRequest(`${BASE_URL}/sports`);
}

export function getHealth() {
  return sendRequest(`${BASE_URL}/health`);
}

export function getEntertainment() {
  return sendRequest(`${BASE_URL}/entertainment`);
}

export function getGeneral() {
  return sendRequest(`${BASE_URL}/general`);
}
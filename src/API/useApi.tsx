import apiClient from "./apiClient";

export const BASE_URL_DEFAULT = 'http://localhost:8000';
// Define common API methods
const _get = (url: any, config = {}) => {
  return apiClient.get(url, config);
};

const _delete = (url: any, config = {}) => {
  return apiClient.delete(url, config);
};

const _put = (url: any, data = {}, config = {}) => {
  return apiClient.put(url, data, config);
};

const _patch = (url: any, data = {}, config = {}) => {
  return apiClient.patch(url, data, config);
};

const _post = (url: any, data = {}, config = {}) => {
  return apiClient.post(url, data, config);
};

export { _get, _delete, _put, _post, _patch };
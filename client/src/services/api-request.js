import { BaseAxiosInstance } from './axios';

/**
 * Request Wrapper with default success/error actions
 */
export const apiRequest = async function (options) {
  const onSuccess = function (response) {
    if (response && response.status === 'ok') {
      return Promise.resolve(response.data);
    } else {
      return Promise.resolve(response.data);
    }
  };

  const onError = function (error) {
    return Promise.reject(error);
  };

  try {
    const response = await BaseAxiosInstance(options);
    return onSuccess(response);
  } catch (error) {
    return onError(error);
  }
};
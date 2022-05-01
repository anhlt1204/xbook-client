import apiClient from 'services/api/apiService';

export const authService = {
  register(data) {
    return apiClient.request({
      method: 'POST',
      url: 'auth/register',
      data,
    });
  },

  login(data) {
    return apiClient.request({
      method: 'POST',
      url: 'auth/login',
      data,
    });
  },

  getCurrentProfile() {
    return apiClient.request({
      method: 'GET',
      url: `user/info`,
    });
  },
};

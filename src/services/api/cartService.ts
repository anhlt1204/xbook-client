import apiClient from 'services/api/apiService';

export const cartService = {
  getListCart(params) {
    return apiClient.request({
      method: 'GET',
      url: 'saleOrder',
      params,
    });
  },

  getCurrentCart() {
    return apiClient.request({
      method: 'GET',
      url: 'saleOrder/current',
    });
  },

  addToCart(data) {
    return apiClient.request({
      method: 'POST',
      url: 'saleOrder/add',
      data,
    });
  },

  removeFromCart(data) {
    return apiClient.request({
      method: 'POST',
      url: 'saleOrder/remove',
      data,
    });
  },

  paymentCart(data) {
    return apiClient.request({
      method: 'POST',
      url: 'saleOrder/payment',
      data,
    });
  },
};

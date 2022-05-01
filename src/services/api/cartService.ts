import apiClient from 'services/api/apiService';

export const cartService = {
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

  getCurrentCart() {
    return apiClient.request({
      method: 'GET',
      url: 'saleOrder/current',
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

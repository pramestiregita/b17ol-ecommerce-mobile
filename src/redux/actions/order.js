import http from '../../helpers/http';

export default {
  getTransaction: (token) => ({
    type: 'GET_ORDERS',
    payload: http(token).get('customer/my-order'),
  }),
  checkout: (token) => ({
    type: 'CHECKOUT',
    payload: http(token).post('customer/checkout'),
  }),
};

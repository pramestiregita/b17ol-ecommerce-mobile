import http from '../../helpers/http';

export default {
  getTransaction: (token) => ({
    type: 'GET_ORDERS',
    payload: http(token).get('customer/my-order'),
  }),
};

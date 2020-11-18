import http from '../../helpers/http';
import qs from 'qs';

export default {
  addCart: (token, data) => ({
    type: 'ADD_CART',
    payload: http(token).post('customer/cart', qs.stringify(data)),
  }),
};

import http from '../../helpers/http';
import qs from 'qs';

export default {
  getDetail: (token) => ({
    type: 'GET_DETAIL',
    payload: http(token).get('customer/detail'),
  }),
  updateDetail: (token, data) => ({
    type: 'UPDATE_DETAIL',
    payload: http(token).patch('customer/edit', qs.stringify(data)),
  }),
};

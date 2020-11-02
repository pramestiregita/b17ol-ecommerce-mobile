import http from '../../helpers/http';

export default {
  getDetail: (token) => ({
    type: 'GET_DETAIL',
    payload: http(token).get('customer/detail'),
  }),
};

import http from '../../helpers/http';

export default {
  getAddress: (token) => ({
    type: 'GET_ADDRESS',
    payload: http(token).get('customer/my-address/'),
  }),
};

import http from '../../helpers/http';
import qs from 'qs';

export default {
  getAddress: (token) => ({
    type: 'GET_ADDRESS',
    payload: http(token).get('customer/my-address/'),
  }),
  addAddress: (token, data) => ({
    type: 'ADD_ADDRESS',
    payload: http(token).post('customer/my-address', qs.stringify(data)),
  }),
  getDetail: (token, id) => ({
    type: 'GET_DETAIL_ADDRESS',
    payload: http(token).get(`customer/my-address/${id}`),
  }),
  updateAddress: (token, id, data) => ({
    type: 'UPDATE_ADDRESS',
    payload: http(token).patch(`customer/my-address/${id}`, qs.stringify(data)),
  }),
  getPrimary: (token) => ({
    type: 'PRIMARY_ADDRESS',
    payload: http(token).get('customer/primary-address'),
  }),
};

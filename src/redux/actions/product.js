import http from '../../helpers/http';

export default {
  getNew: () => ({
    type: 'GET_NEW',
    payload: http().get('new?limit=5'),
  }),
  getPopular: () => ({
    type: 'GET_POPULAR',
    payload: http().get('popular?limit=5'),
  }),
  getProduct: (id) => ({
    type: 'GET_DETAIL',
    payload: http().get(`product/${id}`),
  }),
};

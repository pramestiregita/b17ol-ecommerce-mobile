import http from '../../helpers/http';

export default {
  getCategories: () => ({
    type: 'GET_CATEGORIES',
    payload: http().get('category'),
  }),
  getDetail: (id) => ({
    type: 'GET_CATEGORY',
    payload: http().get(`category/${id}`),
  }),
};

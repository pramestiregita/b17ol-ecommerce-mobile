import http from '../../helpers/http';

export default {
  getCategories: () => ({
    type: 'GET_CATEGORIES',
    payload: http().get('category'),
  }),
};

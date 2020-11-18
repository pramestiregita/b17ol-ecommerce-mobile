import http from '../../helpers/http';

export default {
  getNew: () => ({
    type: 'GET_NEW',
    payload: http().get('new?limit=5'),
  }),
};

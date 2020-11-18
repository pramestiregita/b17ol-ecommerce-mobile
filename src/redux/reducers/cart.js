const initialState = {
  data: [],
  pageInfo: {},
  summary: 0,
  alertMsg: '',
  isLoading: false,
  isError: false,
  isSuccess: false,
  isDeleted: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CART_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'ADD_CART_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: action.payload.response.data.message,
      };
    }
    case 'ADD_CART_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        alertMsg: action.payload.data.message,
      };
    }
    case 'GET_CART_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'GET_CART_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: action.payload.response.data.message,
        data: [],
        pageInfo: {},
        summary: 0,
      };
    }
    case 'GET_CART_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.results,
        pageInfo: action.payload.data.pageInfo,
        summary: action.payload.data.summary,
      };
    }
    case 'DELETE_CART_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'DELETE_CART_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: action.payload.response.data.message,
      };
    }
    case 'DELETE_CART_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isDeleted: true,
        alertMsg: action.payload.data.message,
      };
    }
    default: {
      return state;
    }
  }
};

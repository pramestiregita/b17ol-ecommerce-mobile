const initialState = {
  data: {},
  pageInfo: {},
  isLoading: false,
  isError: false,
  isSuccess: false,
  alertMsg: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ORDERS_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'GET_ORDERS_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case 'GET_ORDERS_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.data,
        pageInfo: action.payload.data.pageInfo,
      };
    }
    case 'CHECKOUT_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'CHECKOUT_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case 'CHECKOUT_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        alertMsg: action.payload.data.message,
      };
    }
    default: {
      return state;
    }
  }
};

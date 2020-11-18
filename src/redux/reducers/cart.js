const initialState = {
  data: {},
  alertMsg: '',
  isLoading: false,
  isError: false,
  isSuccess: false,
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
    default: {
      return state;
    }
  }
};

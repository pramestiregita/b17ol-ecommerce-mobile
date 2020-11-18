const initialState = {
  new: {},
  popular: {},
  isLoading: false,
  isError: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_NEW_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'GET_NEW_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case 'GET_NEW_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        new: action.payload.data.data,
      };
    }
    case 'GET_POPULAR_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'GET_POPULAR_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case 'GET_POPULAR_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        popular: action.payload.data.data,
      };
    }
  }
};

const initialState = {
  data: [],
  detail: [],
  isLoading: false,
  isError: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CATEGORIES_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'GET_CATEGORIES_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case 'GET_CATEGORIES_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.data,
      };
    }
    case 'GET_CATEGORY_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'GET_CATEGORY_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case 'GET_CATEGORY_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        detail: action.payload.data.results,
      };
    }
    default: {
      return state;
    }
  }
};

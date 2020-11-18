const initialState = {
  data: {},
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
        data: action.payload.data.data,
      };
    }
  }
};

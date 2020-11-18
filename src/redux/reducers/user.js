const initialState = {
  data: {},
  isLoading: false,
  isError: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DETAIL_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'GET_DETAIL_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case 'GET_DETAIL_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.data,
      };
    }
    case 'UPDATE_DETAIL_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'UPDATE_DETAIL_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case 'UPDATE_DETAIL_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data,
      };
    }
    case 'UPDATE_PASSWORD_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'UPDATE_PASSWORD_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: action.payload.response.data.message,
      };
    }
    case 'UPDATE_PASSWORD_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        alertMsg: action.payload.data.message,
      };
    }
    case 'UPDATE_AVATAR_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'UPDATE_AVATAR_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: action.payload.response.data.message,
      };
    }
    case 'UPDATE_AVATAR_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        alertMsg: action.payload.data.message,
      };
    }
    default: {
      return state;
    }
  }
};

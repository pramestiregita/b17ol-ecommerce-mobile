const initialState = {
  token: '',
  alertMsg: '',
  isLogin: false,
  isLoading: false,
  isError: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_PENDING': {
      return {
        ...state,
        isLoading: true,
        alertMsg: 'Loginin...',
      };
    }
    case 'LOGIN_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: action.payload.response.data.message,
      };
    }
    case 'LOGIN_FULFILLED': {
      return {
        ...state,
        isError: false,
        isLoading: false,
        isLogin: true,
        token: action.payload.data.token,
      };
    }
    default: {
      return state;
    }
  }
};

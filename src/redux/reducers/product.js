const initialState = {
  new: {},
  newInfo: {},
  popular: {},
  popularInfo: {},
  detail: {},
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
        newInfo: action.payload.data.pageInfo,
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
        popularInfo: action.payload.data.pageInfo,
      };
    }
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
        detail: action.payload.data.data,
      };
    }
    case 'NEXT_NEW_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'NEXT_NEW_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case 'NEXT_NEW_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        new: action.payload.data.data,
        newInfo: action.payload.data.pageInfo,
      };
    }
    case 'NEXT_POPULAR_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'NEXT_POPULAR_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case 'NEXT_POPULAR_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        popular: action.payload.data.data,
        popularInfo: action.payload.data.pageInfo,
      };
    }
    default: {
      return state;
    }
  }
};

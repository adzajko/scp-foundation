let user = sessionStorage.getItem('loggedIn');
export const initialState = {
  userDetails: '' || user,
  loading: false,
  errorMessage: null
};

export const AuthReducer = (initialState, action) => {
  switch (action.type) {
    case 'REQUEST_LOGIN': {
      return { ...initialState, loading: true };
    }
    case 'LOGIN': {
      return { ...initialState, user: action.payload.user, loading: false };
    }
    case 'LOGOUT': {
      return { ...initialState, user: '' };
    }
    default: {
      return initialState;
    }
  }
};

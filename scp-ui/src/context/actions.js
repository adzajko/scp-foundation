export const login = async dispatch => {
  dispatch({ type: 'REQUEST_LOGIN' });
  const data = {
    user: 'ayrenn'
  };
  dispatch({ type: 'LOGIN', payload: data });
  sessionStorage.setItem('loggedIn', 'ayrenn');
  return data;
};

export const logout = async dispatch => {
  dispatch({ type: 'LOGOUT' });
  sessionStorage.removeItem('loggedIn');
};

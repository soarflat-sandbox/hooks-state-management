import React, { createContext, useReducer, useEffect } from 'react';
import Login from './components/Login';
import Home from './components/Home';
import Header from './components/Header';
import loginReducer, { initialState } from './reducers/loginReducer';

export const AuthContext = createContext();

function App() {
  const [state, dispatch] = useReducer(loginReducer, initialState);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    const token = JSON.parse(localStorage.getItem('token'));

    if (user && token) {
      dispatch({
        type: 'LOGIN',
        payload: {
          user,
          token
        }
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      <Header />
      <div>{state.isAuthenticated ? <Home /> : <Login />}</div>
    </AuthContext.Provider>
  );
}

export default App;

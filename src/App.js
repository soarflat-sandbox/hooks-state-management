import React, { useReducer, createContext } from 'react';
import Login from './components/Login';
import Home from './components/Home';
import Header from './components/Header';
import loginReducer, { initialState } from './reducers/loginReducer';

export const AuthContext = createContext();

function App() {
  const [state, dispatch] = useReducer(loginReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      <Header />
      <div>{state.isAuthenticated ? <Home /> : <Login />}</div>
    </AuthContext.Provider>
  );
}

export default App;

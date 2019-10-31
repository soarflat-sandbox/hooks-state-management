import React, { useContext, useState } from 'react';
import { AuthContext } from '../App';
import auth from '../services/auth';

export const Login = () => {
  // App.js の `value={{ state, dispatch }}`にアクセスできる
  const { dispatch } = useContext(AuthContext);
  const initialState = {
    email: '',
    password: '',
    isSubmitting: false,
    errorMessage: null
  };
  const [data, setData] = useState(initialState);

  const handleInputChange = event => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    });
  };
  const handleFormSubmit = event => {
    event.preventDefault();

    setData({
      ...data,
      isSubmitting: true,
      errorMessage: null
    });

    auth
      .login(data)
      .then(result => {
        dispatch({
          type: 'LOGIN',
          payload: result
        });
      })
      .catch(error => {
        setData({
          ...data,
          isSubmitting: false,
          errorMessage: error.message || error.statusText
        });
      });
  };

  return (
    <div>
      <div>
        <div>
          <form onSubmit={handleFormSubmit}>
            <h1>Login</h1>

            <label htmlFor="email">
              Email Address
              <input
                type="text"
                name="email"
                id="email"
                value={data.email}
                onChange={handleInputChange}
              />
            </label>

            <label htmlFor="password">
              Password
              <input
                type="password"
                name="password"
                id="password"
                value={data.password}
                onChange={handleInputChange}
              />
            </label>

            {data.errorMessage && <span>{data.errorMessage}</span>}

            <button disabled={data.isSubmitting}>
              {data.isSubmitting ? 'Loading...' : 'Login'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;

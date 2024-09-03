import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch } from 'react-redux';
import { setUser } from '../features/auth/authSlice';

const Login = () => {
  const { loginWithRedirect, user } = useAuth0();
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (user) {
      dispatch(setUser(user));
    }
  }, [user, dispatch]);

  return (
    <div>
      <button onClick={() => loginWithRedirect()}>Login</button>
    </div>
  );
};

export default Login;

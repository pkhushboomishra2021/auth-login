import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch, useSelector } from 'react-redux';
import { clearUser } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const { user, logout } = useAuth0();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authState = useSelector(state => state.auth);

  const handleLogout = () => {
    dispatch(clearUser());
    logout({ returnTo: window.location.origin });
  };

  React.useEffect(() => {
    if (!authState.isAuthenticated) {
      navigate('/login');
    }
  }, [authState.isAuthenticated, navigate]);

  return (
    <div>
      <h1>Welcome, {user.name}!</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Welcome;

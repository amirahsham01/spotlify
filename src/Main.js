import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const CLIENT_ID = process.env.REACT_APP_SPOTLIFY_CLIENT_ID;
  const REDIRECT_URI = 'http://localhost:3000';
  const AUTH_URL = process.env.REACT_APP_SPOTLIFY_AUTH_URL;
  const RESPONSE_TYPE = 'token';

  const [token, setToken] = useState('');
  const navigate = useNavigate();

  // checking and storing of token
  useEffect(() => {
    const hash = window.location.hash;
    let token = window.sessionStorage.getItem('token');

    if (!token && hash) {
      token = hash
        .substring(1)
        .split('&')
        .find(elem => elem.startsWith('access_token'))
        .split('=')[1];

      window.location.hash = '';
      window.sessionStorage.setItem('token', token);
    }
    setToken(token);
  }, []);

  if (token) {
    navigate('/discover', { replace: true });
  }

  return (
    <div>
      <a
        href={`${AUTH_URL}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
      >
        Login to Spotify
      </a>
    </div>
  );
};

export default Main;

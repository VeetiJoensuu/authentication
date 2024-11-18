import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useUser } from '../context/useUser.js';

const url = 'http://localhost:3001';

function Home() {
  const { user } = useUser();

  useEffect(() => {
    axios.get(url, { headers: { Authorization: `Bearer ${user.token}` } })
      .catch(error => {
        alert(error.response?.data?.error ? error.response.data.error : error.message);
      });
  }, [user.token]);

  return (
    <div id="home-container">
      <h3 className="home-title">User Information</h3>
      <p>Email: {user.email}</p>
      <p>Token: {user.token}</p>
    </div>
  );
}

export default Home;

import React from 'react';
import { useAuth } from '../../context/AuthContext';
import Navbar from '../Navbar/Navbar';

const Home = () => {
  const { logout } = useAuth();

  return (<></>
    // <div>
        
    //   <h2>Home Page</h2>
    //   <button onClick={logout}>Logout</button>
    // </div>
  );
};

export default Home;

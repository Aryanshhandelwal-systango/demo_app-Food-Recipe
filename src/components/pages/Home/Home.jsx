
import React from 'react';
import { useAuth } from '../../../context/AuthContext';
import Navbar from '../../Navbar/Navbar';
import Food from '../../Food/Food ';

const Home = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    console.log('Logout clicked');
    // Add logout logic here, e.g., clear user session
    logout();
  };

  // Mock food data
  const foods = Array.from({ length: 12 }, (v, i) => ({
    id: i + 1,
    name: `Food Item ${i + 1}`,
    vendor: `Vendor ${i + 1}`,
    image_src: '/path/to/food_img.png', 
    description: [
      'Point 1 about the food',
      'Point 2 about the food',
      'Point 3 about the food'
    ],
    steps: [
      'Step 1 to prepare the food',
      'Step 2 to prepare the food',
      'Step 3 to prepare the food'
    ]
  }));

  const detailPage = (item) => {
    console.log(`Detail page for ${item.name}`);
  };

  return (
    <>
      <Navbar onLogout={handleLogout} />
      <Food foods={foods} detailPage={detailPage} />
    </>
  );
};

export default Home;

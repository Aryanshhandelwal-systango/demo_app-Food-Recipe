// import React, { useState } from 'react';        
// import '../Styles/Food.css';

// function Food({ foods, detailPage }) {
//   const [hoveredfoodId, setHoveredfoodId] = useState(null);

//   return (
//     <>
//       {foods.length > 0 ? (
//         <div className="food_container">
//           {foods.map((item) => (
//             <div
//               key={item.id}
//               className="food_box"
//               onMouseEnter={() => setHoveredfoodId(item.id)}
//               onMouseLeave={() => setHoveredfoodId(null)}
//             >
//               <div className="food_name">
//                 <div className="image_src-box" onClick={() => detailPage(item)}>
//                   <img src={item.image_src} alt={item.vendor} />
//                 </div>
//                 <div className={`food_detail ${hoveredfoodId === item.id ? 'hide-details' : ''}`}>
//                   <div className="info">
//                     <p>{item.name}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <div>No foods available</div>
//       )}
//     </>
//   );
// }

// export default Food;
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../Styles/Food.css';
// import food_img from '/home/ubox55/Desktop/Food-Recipe-App/src/assets/Product_1.png';

// const Food = () => {
//   const [hoveredFoodId, setHoveredFoodId] = useState(null);
//   const navigate = useNavigate();
 

//   const handleImageClick = (item) => {
//     navigate('/description', { state: { item } });
//   };

//   return (
//     <>
//       {foods.length > 0 ? (
//         <div className="food_container">
//           {foods.map((item) => (
//             <div
//               key={item.id}
//               className="food_box"
//               onMouseEnter={() => setHoveredFoodId(item.id)}
//               onMouseLeave={() => setHoveredFoodId(null)}
//             >
//               <div className="food_name">
//                 <div className="image_src-box" onClick={() => handleImageClick(item)}>
//                   <img src={item.image_src} alt={item.vendor} />
//                 </div>
//                 <div className={`food_detail ${hoveredFoodId === item.id ? 'hide-details' : ''}`}>
//                   <div className="info">
//                     <p>{item.name}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <div>No foods available</div>
//       )}
//     </>
//   );
// };

// export default Food;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/Food.css';
import foods from './FoodData';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'; // Import heart icons from react-icons

const Food = () => {
  const [hoveredFoodId, setHoveredFoodId] = useState(null);
  const [favoriteFoods, setFavoriteFoods] = useState({});
  const navigate = useNavigate();

  
  const handleImageClick = (item) => {
    navigate('/description', { state: { item } });
  };

  const toggleFavorite = (id) => {
    setFavoriteFoods((prevFavorites) => ({
      ...prevFavorites,
      [id]: !prevFavorites[id],
    }));
  };

  return (
    <>
      {foods.length > 0 ? (
        <div className="food_container">
          {foods.map((item) => (
            <div
              key={item.id}
              className="food_box"
              onMouseEnter={() => setHoveredFoodId(item.id)}
              onMouseLeave={() => setHoveredFoodId(null)}
            >
              <div className="food_name">
                <div className="image_src-box" onClick={() => handleImageClick(item)}>
                  <img src={item.image_src} alt={item.vendor} />
                  <div className="heart_icon" onClick={(e) => { e.stopPropagation(); toggleFavorite(item.id); }}>
                    {favoriteFoods[item.id] ? <AiFillHeart color="red" /> : <AiOutlineHeart />}
                  </div>
                </div>
                <div className={`food_detail ${hoveredFoodId === item.id ? 'hide-details' : ''}`}>
                  <div className="info">
                    <p>{item.name}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>No foods available</div>
      )}
    </>
  );
};

export default Food;

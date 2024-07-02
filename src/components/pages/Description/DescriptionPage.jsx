import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../../Styles/Description.css';


const DescriptionPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { item } = location.state || {};

  if (!item) {
    return <div>No item details available</div>;
  }

  const handleSave = () => {
    console.log('Item saved');
    // Add save logic here
  };

  const defaultIngredients = item.ingredients || ["Ingredient 1", "Ingredient 2", "Ingredient 3", "Ingredient 4"];
  const defaultSteps = item.steps || ["Step 1", "Step 2", "Step 3", "Step 4"];

  return (
    <>
   
    <div className="description_container">
      <div className="description_image">
        <img src={item.image_src} alt={item.name} />
      </div>
      <div className="description_content">
        <h2>{item.name}</h2>
        <p><strong>Description:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.</p>
        <div className="description_ingredients">
          <h3>Ingredients:</h3>
          <ul>
            {defaultIngredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div className="description_steps">
          <h3>Steps:</h3>
          <ul>
            {defaultSteps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
        </div>
        <p><strong>Type of food:</strong> {item.type}</p>
        <button className="save_button" onClick={handleSave}>Save</button>
      </div>
    </div>
    </>
  );
};

export default DescriptionPage;

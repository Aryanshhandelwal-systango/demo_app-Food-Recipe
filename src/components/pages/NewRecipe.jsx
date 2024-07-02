// src/components/Pages/CreateRecipePage/CreateRecipePage.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addRecipe } from '../../Store/recipesSlice';
import '../Styles/NewRecipe.css'

const NewRecipe = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState(['']);
  const [steps, setSteps] = useState(['']);

  const handleAddIngredient = () => {
    setIngredients([...ingredients, '']);
  };

  const handleIngredientChange = (index, value) => {
    const newIngredients = [...ingredients];
    newIngredients[index] = value;
    setIngredients(newIngredients);
  };

  const handleAddStep = () => {
    setSteps([...steps, '']);
  };

  const handleStepChange = (index, value) => {
    const newSteps = [...steps];
    newSteps[index] = value;
    setSteps(newSteps);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = {
      id: Date.now(),
      name,
      image_src: image,
      type,
      description,
      ingredients,
      steps,
    };
    dispatch(addRecipe(newRecipe));
    // Clear form
    setName('');
    setImage('');
    setType('');
    setDescription('');
    setIngredients(['']);
    setSteps(['']);
  };

  return (
    <div className="new_recipe_container">
      <h2>Create New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div className="form_group">
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="form_group">
          <label>Image URL:</label>
          <input type="text" value={image} onChange={(e) => setImage(e.target.value)} required />
        </div>
        <div className="form_group">
          <label>Type:</label>
          <input type="text" value={type} onChange={(e) => setType(e.target.value)} required />
        </div>
        <div className="form_group">
          <label>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <div className="form_group">
          <label>Ingredients:</label>
          {ingredients.map((ingredient, index) => (
            <div key={index} className="ingredient_item">
              <input
                type="text"
                value={ingredient}
                onChange={(e) => handleIngredientChange(index, e.target.value)}
                required
              />
              {index === ingredients.length - 1 && (
                <button type="button" onClick={handleAddIngredient}>Add Ingredient</button>
              )}
            </div>
          ))}
        </div>
        <div className="form_group">
          <label>Steps:</label>
          {steps.map((step, index) => (
            <div key={index} className="step_item">
              <input
                type="text"
                value={step}
                onChange={(e) => handleStepChange(index, e.target.value)}
                required
              />
              {index === steps.length - 1 && (
                <button type="button" onClick={handleAddStep}>Add Step</button>
              )}
            </div>
          ))}
        </div>
        <button type="submit">Upload Recipe</button>
      </form>
    </div>
  );
};

export default NewRecipe;

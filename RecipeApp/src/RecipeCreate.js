import React, { useState } from "react";

function RecipeCreate({addRecipes}) {
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  const [formData, setFormData] = useState({...initialFormState});

  const handleChange = ({target}) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    addRecipes(formData);
    setFormData({...initialFormState});
  };

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td htmlFor="name">
              <input 
              type="textbox"
              id="name"
            name="name"
            onChange={handleChange}
            value={formData.name}
            placeholder="Name"
            />
            </td>
            <td htmlFor="cuisine">
              <input 
              type="textbox"
              id="cuisine"
            name="cuisine"
            onChange={handleChange}
            value={formData.cuisine}
            placeholder="Cuisine"
            />
            </td>
            <td htmlFor="photo">
              <input objectFit="contain"
              type="url"
              id="photo"
            name="photo"
            onChange={handleChange}
            value={formData.photo}
            placeholder="URL"
            />
            </td>
            <td htmlFor="ingredients">
              <textarea 
              type="textarea"
              id="ingredients"
            name="ingredients"
            onChange={handleChange}
            value={formData.ingredients}
            placeholder="Ingredients"
            />
            </td>
            <td htmlFor="preparation">
              <textarea 
              type="textarea"
              id="preparation"
            name="preparation"
            onChange={handleChange}
            value={formData.preparation}
            placeholder="Preparation"
            />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;

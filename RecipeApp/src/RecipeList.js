import React from "react";

function RecipeList({recipes, deleteRecipe}) {
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked
  let recipes1 = recipes.map((recipe)=> 
      <tr>
          <td>{recipe.name}</td>
          <td>{recipe.cuisine}</td>
          <td><img src={recipe.photo} objectfit="contain"/></td>
          <td>{recipe.ingredients}</td>
          <td>{recipe.preparation}</td>
        <td><button type="delete" name="delete" onClick={deleteRecipe}>Delete</button></td>
      </tr>
)

  return (
    <div className="recipe-list">
      <table>
        <thead>
          
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes1}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;

import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  const addRecipes = (data) => {
    setRecipes([...recipes, data]);
  }

  const deleteRecipe = (event) => {
    const id = Number(event.target.id);
    const newArr = recipes.filter((_,index) => index !== id);
    setRecipes(newArr);
  }
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe}/>
      <RecipeCreate  addRecipes={addRecipes}/>
    </div>
  );
}

export default App;

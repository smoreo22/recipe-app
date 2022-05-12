import React from "react";
import RecipeVeiw from "./RecipeView";
import "./RecipeList.css";

function RecipeList({ recipes, deleteRecipe }) {
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked
  // console.log(recipes);
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr style={{ backgroundColor: "white" }}>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe, index) => (
            <RecipeVeiw
              key={index}
              index={index}
              recipe={recipe}
              deleteRecipe={() => deleteRecipe(index)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;

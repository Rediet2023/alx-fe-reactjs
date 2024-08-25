import { useRecipeStore } from './recipeStore';

// Component to display the user's favorite recipes
const FavoritesList = () => {
  // Fetch recipes and favorites from the Zustand store
  const { recipes, favorites } = useRecipeStore((state) => ({
    recipes: state.recipes,
    favorites: state.favorites,
  }));

  // Map through favorite recipe IDs and find the corresponding recipe objects
  const favoriteRecipes = favorites.map((id) =>
    recipes.find((recipe) => recipe.id === id)
  );

  return (
    <div>
      <h2>My Favorites</h2>
      {/* Display the favorite recipes or show a message if no favorites are added */}
      {favoriteRecipes.length ? (
        favoriteRecipes.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            {/* Button to remove a recipe from the favorites list */}
            <button onClick={() => useRecipeStore.getState().removeFavorite(recipe.id)}>
              Remove from Favorites
            </button>
          </div>
        ))
      ) : (
        <p>No favorite recipes added yet!</p>
      )}
    </div>
  );
};

export default FavoritesList;
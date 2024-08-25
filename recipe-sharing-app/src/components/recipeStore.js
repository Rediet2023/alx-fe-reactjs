import create from 'zustand';

// Zustand store to manage recipe data, user favorites, and recommendations
const useRecipeStore = create((set) => ({
  // List of all available recipes in the app
  recipes: [],

  // Array to store IDs of the user's favorite recipes
  favorites: [],

  /**
   * Adds a recipe to the favorites list.
   * @param {number} recipeId - The unique ID of the recipe to be added to favorites.
   */
  addFavorite: (recipeId) =>
    set((state) => ({ favorites: [...state.favorites, recipeId] })),

  /**
   * Removes a recipe from the favorites list.
   * @param {number} recipeId - The unique ID of the recipe to be removed from favorites.
   */
  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // Array to store the list of recommended recipes
  recommendations: [],

  /**
   * Generates personalized recommendations based on the user's favorites.
   * This is a mock implementation that randomly filters recipes.
   * In the future, this could be enhanced with more sophisticated logic.
   */
  generateRecommendations: () =>
    set((state) => {
      const recommended = state.recipes.filter(
        (recipe) =>
          // Exclude recipes already in favorites
          !state.favorites.includes(recipe.id) &&
          // Mock logic to randomly select some recipes as recommendations
          Math.random() > 0.3
      );
      return { recommendations: recommended };
    }),
}));

export { useRecipeStore };
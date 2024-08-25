import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  addRecipe: (newRecipe) => set((state) => ({
    recipes: [...state.recipes, newRecipe],
    filteredRecipes: [...state.recipes, newRecipe].filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  })),
  setSearchTerm: (term) => set((state) => ({
    searchTerm: term,
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(term.toLowerCase())
    )
  })),
  updateRecipe: (updatedRecipe) => set((state) => ({
    recipes: state.recipes.map(recipe =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    ),
    filteredRecipes: state.recipes
      .map(recipe => (recipe.id === updatedRecipe.id ? updatedRecipe : recipe))
      .filter(recipe =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      )
  })),
  deleteRecipe: (id) => set((state) => ({
    recipes: state.recipes.filter(recipe => recipe.id !== id),
    filteredRecipes: state.recipes
      .filter(recipe => recipe.id !== id)
      .filter(recipe =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      )
  })),
}));
filteredRecipes: state.recipes.filter(recipe =>
  recipe.title.toLowerCase().includes(term.toLowerCase()) ||
  recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(term.toLowerCase()))
)

export { useRecipeStore };
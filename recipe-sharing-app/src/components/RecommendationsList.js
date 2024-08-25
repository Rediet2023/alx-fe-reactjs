import { useRecipeStore } from './recipeStore';
import { useEffect } from 'react';

// Component to display personalized recipe recommendations
const RecommendationsList = () => {
  // Fetch the recommendations and the function to generate them from the Zustand store
  const { recommendations, generateRecommendations } = useRecipeStore(
    (state) => ({
      recommendations: state.recommendations,
      generateRecommendations: state.generateRecommendations,
    })
  );

  // Call the generateRecommendations function when the component is rendered
  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  return (
    <div>
      <h2>Recommended for You</h2>
      {/* Display the recommended recipes or show a message if none are available */}
      {recommendations.length ? (
        recommendations.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No recommendations available at the moment!</p>
      )}
    </div>
  );
};

export default RecommendationsList;
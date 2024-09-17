import axios from "axios";

// Function to fetch users based on advanced search parameters
const fetchAdvancedUserData = async (username, location, minRepos) => {
  let query = "";

  if (username) {
    query += `${username} in:login`;
  }
  if (location) {
    query += ` location:${location}`;
  }
  if (minRepos) {
    query += ` repos:>=${minRepos}`;
  }

  try {
    const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
    return response.data; // Search API returns an object containing `items`
  } catch (error) {
    throw new Error("Error fetching user data");
  }
};

export default fetchAdvancedUserData;
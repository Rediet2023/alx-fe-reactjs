import React, { useState } from "react";
import fetchUserData from "../services/githubService"; // Import the fetchUserData function

const Search = () => {
  const [username, setUsername] = useState(""); 
  const [userData, setUserData] = useState(null); 
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null); 

  // Handle form submission for basic search by username
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setLoading(true);
    setError(null); 

    try {
      const data = await fetchUserData(username); // Fetch user data using the API call
      setUserData(data); 
    } catch (err) {
      setError("Looks like we can't find the user"); 
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        {/* Rest of the form code */}
      </form>

      <div>
        {/* Conditional rendering logic */}
      </div>
    </div>
  );
};

export default Search;
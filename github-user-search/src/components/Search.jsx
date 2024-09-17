import React, { useState } from "react";
import fetchUserData from "../services/githubService"; // Import the fetchUserData function

const Search = () => {
  const [username, setUsername] = useState(""); // To capture the username input
  const [userData, setUserData] = useState(null); // Store the fetched user data
  const [loading, setLoading] = useState(false); // Handle the loading state
  const [error, setError] = useState(null); // Handle any errors

  // Handle form submission for basic search by username
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload on form submission
    setLoading(true);
    setError(null); // Reset any existing errors

    try {
      const data = await fetchUserData(username); // Fetch user data using the API call
      setUserData(data); // Update the state with the fetched user data
    } catch (err) {
      setError("Looks like we can't find the user"); // Display error message if user not found
    } finally {
      setLoading(false); // Stop the loading state after the request is finished
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-bold mb-4">GitHub User Search</h2>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            id="username"
            type="text"
            placeholder="Enter GitHub username"
            value={username}
            onChange={(e) => setUsername(e.target.value)} // Update the username state on input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Search
        </button>

        {loading && <p className="mt-4 text-blue-600">Loading...</p>}
        {error && <p className="mt-4 text-red-600">{error}</p>}
      </form>

      <div>
        {userData && (
          <div>
            <img src={userData.avatar_url} alt={userData.login} className="w-16 h-16 rounded-full mb-2" />
            <h3 className="text-lg font-bold">{userData.name || userData.login}</h3>
            <p>Location: {userData.location || 'N/A'}</p>
            <a
              href={userData.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              View Profile
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
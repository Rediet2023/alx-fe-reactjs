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
            onChange={(e) => setUsername(e.target.value)} 
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
        {/* Using the && operator to conditionally render the userData if it exists */}
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

            {/* Assuming userData contains an array of repositories (for demonstration purposes) */}
            <div className="mt-4">
              <h4 className="text-lg font-bold mb-2">Repositories</h4>
              <ul>
                {userData.repositories && userData.repositories.length > 0 ? (
                  // Using map to iterate over the repositories array
                  userData.repositories.map((repo) => (
                    <li key={repo.id} className="mb-2">
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500"
                      >
                        {repo.name}
                      </a>
                    </li>
                  ))
                ) : (
                  <p>No repositories available</p>
                )}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
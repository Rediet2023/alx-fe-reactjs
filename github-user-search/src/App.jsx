import React from 'react';
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <h1>GitHub User Search</h1>
      <p>Start searching for GitHub users...</p>
    </div>
  );
}
try {
  const data = await fetchUserData(username);
  setUserData(data);
} catch (error) {
  setError("Error: Unable to fetch user");
}

export default App

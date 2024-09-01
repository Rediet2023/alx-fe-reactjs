import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import Login from './components/Login';
import ProfileDetails from './components/ProfileDetails';
import ProfileSettings from './components/ProfileSettings';
import Post from './components/Post';
import ProtectedRoute from './ProtectedRoute';
import { AuthProvider } from './AuthContext';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/*" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        {/* Add more routes here */}
      </Routes>
    </Router>
  );
}


<Route path="/profile/*" element={<Profile />}>
  <Route path="details" element={<ProfileDetails />} />
  <Route path="settings" element={<ProfileSettings />} />
  <Route path="/post/:postId" element={<Post />} />
</Route>
function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          
          {/* Protect Profile route */}
          <Route
            path="/profile/*"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          >
            <Route path="details" element={<ProfileDetails />} />
            <Route path="settings" element={<ProfileSettings />} />
          </Route>

          {/* Dynamic route */}
          <Route path="/post/:postId" element={<Post />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}


export default App

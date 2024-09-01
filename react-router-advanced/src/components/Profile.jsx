import { Outlet, Link } from 'react-router-dom'; // Import necessary components

// Import child components if they are in separate files
import ProfileDetails from './ProfileDetails';
import ProfileSettings from './ProfileSettings';

function Profile() {
  return (
    <div>
      <h2>Profile Page</h2>
      <nav>
        <ul>
          <li><Link to="details">Profile Details</Link></li>
          <li><Link to="settings">Profile Settings</Link></li>
        </ul>
      </nav>

      {/* Outlet renders the nested routes */}
      <Outlet />
    </div>
  );
}

export default Profile;
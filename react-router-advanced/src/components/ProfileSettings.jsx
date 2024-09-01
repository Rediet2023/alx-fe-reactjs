import { useState } from 'react';

function ProfileSettings() {
  // Example state to manage settings
  const [settings, setSettings] = useState({
    email: 'user@example.com',
    notifications: true
  });

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setSettings(prevSettings => ({
      ...prevSettings,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission (e.g., save settings)
    alert('Settings saved!');
  };

  return (
    <div>
      <h3>Profile Settings</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={settings.email}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            Notifications:
            <input
              type="checkbox"
              name="notifications"
              checked={settings.notifications}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <button type="submit">Save Settings</button>
      </form>
    </div>
  );
}

export default ProfileSettings;
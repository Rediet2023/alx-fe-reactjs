import { useAuth } from '../AuthContext';
import { useNavigate } from 'react-router-dom';

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate('/profile');
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Log in</button>
    </div>
  );
}

export default Login;
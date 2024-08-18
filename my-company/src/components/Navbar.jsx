import { Link } from 'react-router-dom';

function Navbar() {
  // Inline styles as an object
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '10px',
    backgroundColor: '#f0f0f0',
    marginBottom: '20px',
  };

  const linkStyle = {
    marginRight: '10px',
    textDecoration: 'none',
    color: 'black',
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/about" style={linkStyle}>About</Link>
      <Link to="/services" style={linkStyle}>Services</Link>
      <Link to="/contact" style={linkStyle}>Contact</Link>
    </nav>
  );
}

export default Navbar;
import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#007BFF',
    color: '#fff',
    padding: '2rem 10rem',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  };

  const sectionStyle = {
    flex: '1',
    minWidth: '200px',
    marginBottom: '1rem',
  };

  const headingStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '1rem',
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    marginBottom: '0.5rem',
    display: 'block',
  };

  const socialIconsStyle = {
    display: 'flex',
    gap: '10px',
    marginTop: '1rem',
  };

  return (
    <footer style={footerStyle}>
      {/* About Us Section */}
      <div style={sectionStyle}>
        <h3 style={headingStyle}>About Us</h3>
        <p>
          We provide innovative solutions for HR management, enabling seamless employee engagement, payroll management, and leave tracking.
        </p>
      </div>

      {/* Quick Links Section */}
      <div style={sectionStyle}>
        <h3 style={headingStyle}>Quick Links</h3>
        <a href="#home" style={linkStyle}>
          Home
        </a>
        <a href="#about" style={linkStyle}>
          About
        </a>
        <a href="#services" style={linkStyle}>
          Services
        </a>
        <a href="#contact" style={linkStyle}>
          Contact
        </a>
      </div>

      {/* Contact Section */}
      <div style={sectionStyle}>
        <h3 style={headingStyle}>Contact</h3>
        <p>Email: support@yourplatform.com</p>
        <div style={socialIconsStyle}>
          <a href="https://facebook.com" style={linkStyle}>
            Facebook
          </a>
          <a href="https://twitter.com" style={linkStyle}>
            Twitter
          </a>
          <a href="https://instagram.com" style={linkStyle}>
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

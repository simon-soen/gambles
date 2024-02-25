import React from 'react';

const Resource = ({ title, description, link, thumbnail}) => {
  const resourceStyle = {
    display: 'flex',
    marginBottom: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
  };

  const thumbnailStyle = {
    flex: '0 0 200px'
  };

  const detailsStyle = {
    flexGrow: '1',
    padding: '10px'
  };

  const titleStyle = {
    marginTop: '0',
    fontSize: '18px'
  };

  const linkStyle = {
    display: 'inline-block',
    color: '#007bff',
    textDecoration: 'none',
    fontWeight: 'bold'
  };

  const descriptionStyle = {
    marginBottom: '10px'
  };


  

  return (
    <div style={resourceStyle}>
      <div style={thumbnailStyle}>
        <img src={thumbnail} alt={title} style={{ width: '100%', height: 'auto' }} />
      </div>
      <div style={detailsStyle}>
        <h3 style={titleStyle}>{title}</h3>
        <p style={descriptionStyle}>{description}</p>
        
        <a href={link} target="_blank" rel="noopener noreferrer" style={linkStyle}>
          Go to Resource
        </a>
      </div>
    </div>
  );
};

export default Resource;

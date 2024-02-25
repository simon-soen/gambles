

import React, { useState, useEffect } from 'react';
import axios from 'axios';
const API_KEY = 'a81b1c3bad1d468c8d1a016e00945e53';
const PAGE_SIZE = 1;

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=gambling&apiKey=${API_KEY}&pageSize=${PAGE_SIZE}`
        );
        setArticles(response.data.articles);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchArticles();
  }, []); // Empty dependency array to fetch data only once on component mount

  const articleImageStyle = {
    maxWidth: '100%',
    maxHeight: '300px', // Limiting the height to prevent large images
    objectFit: 'cover', // Cover the image container without stretching
    marginBottom: '10px'
  };

  const articleContainerStyle = {
    marginBottom: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
  };

  const articleContentStyle = {
    padding: '20px'
  };

  return (
    <div className="article-slider" style={{ maxWidth: '800px', margin: '0 auto' }}>
      {articles.map((article, index) => (
        <div key={index} className="article-slide" style={articleContainerStyle}>
          <img
            src={article.urlToImage}
            alt={article.title}
            className="article-image"
            style={articleImageStyle}
          />
          <div className="article-content" style={articleContentStyle}>
            <h3 className="article-title">{article.title}</h3>
            <p className="article-description">{article.description}</p>
            <a href={article.url} className="article-link" target="_blank" rel="noopener noreferrer">
              Read More
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Articles;

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_KEY = 'a81b1c3bad1d468c8d1a016e00945e53';
const PAGE_SIZE = 10;

const ArticlePage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(`https://newsapi.org/v2/everything?q=gambling&apiKey=${API_KEY}&pageSize=${PAGE_SIZE}`);
        setArticles(response.data.articles);
      } catch (error) {
        console.error('Error fetching articles: ', error);
      } finally {
        setLoading(false);
      }
    };
    fetchArticles();
  }, []);

  const handleReadMore = (articleUrl) => {
    // Open the article URL in a new tab
    window.open(articleUrl, '_blank');
  };

    // Function to shuffle array elements randomly
    const shuffleArray = (array) => {
        let currentIndex = array.length;
        let temporaryValue;
        let randomIndex;
    
        // While there remain elements to shuffle...
        while (currentIndex !== 0) {
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
    
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
    
        return array;
      };
    

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        {loading ? (
          <div style={styles.loadingContainer}>
            <div>Loading...</div>
          </div>
        ) : (
          shuffleArray(articles).map((article, index) => (
            <div key={index} style={styles.articleContainer}>
              <h3 style={styles.articleTitle}>{article.title}</h3>
              <img src={article.urlToImage} alt={article.title} style={styles.articleImage} />
              <p style={styles.articleSummary}>{article.description}</p>
              {/* Add Read More button */}
              <button style={styles.readMore} onClick={() => handleReadMore(article.url)}>
                Read More
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: 16,
  },
  content: {
    marginTop: 20,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  articleContainer: {
    marginBottom: 20,
  },
  articleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  articleSummary: {
    marginTop: 5,
    fontSize: 16,
  },
  readMore: {
    color: 'blue',
    marginTop: 5,
    cursor: 'pointer',
  },
  articleImage: {
    width: '100%',
    height: 200,
    objectFit: 'cover',
    marginBottom: 10,
  },
  loadingContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default ArticlePage;

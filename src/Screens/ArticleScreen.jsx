import React from 'react';
// import ArticlePage from '../Components/ArticlePage';
import Articles from '../Components/Articles';
import Resource from '../Components/Resource';

const ArticleScreen = () => {
  return (
      <div className="view" style={{ marginTop: '20px' }}>
        <div className="article-slider-container">
          <h2>Top Articles</h2>
          <Articles />
        </div>
        <div className="resource-container" >
          <h2>Top Resources</h2>
          <Resource
            title="How to stop bad gambling habit"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi."
            link="https://example.com"
            thumbnail="https://via.placeholder.com/150"
          />
          <Resource
            title="Ways of creating gambling awareness"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi."
            link="https://example.com"
            thumbnail="https://via.placeholder.com/150"
          />
          {/* Add more Resource components as needed */}
        </div>
      </div>
    
  );
};

export default ArticleScreen;

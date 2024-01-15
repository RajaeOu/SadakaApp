// DetailAbout.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const DetailAbout = () => {
  const location = useLocation();
  const article = location.state?.article;

  if (!article) {
    // Handle the case where there is no article data
    return <div>No article details available.</div>;
  }

  return (
    <div>
      <h2>{article.title}</h2>
      <img src={article.imageSrc} alt={article.title} />
      <p>{article.description}</p>
      <p>Category: {article.category}</p>
      {/* Add other details as needed */}
    </div>
  );
};

export default DetailAbout;

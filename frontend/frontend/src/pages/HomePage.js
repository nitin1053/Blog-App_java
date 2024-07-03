// src/pages/HomePage.js
import React from 'react';
import PostList from '../components/PostList';

const HomePage = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold my-4">Blog</h1>
      <PostList />
    </div>
  );
};

export default HomePage;

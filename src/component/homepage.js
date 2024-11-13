// src/Home.js
import React from 'react';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <div style={styles.homeContainer}>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="Explore various articles on React, JavaScript, and more!" />
      </Helmet>

      <h1>Welcome to the Article Page</h1>
      <p>Select an article from the navigation to read more.</p>
    </div>
  );
};

const styles = {
  homeContainer: {
    textAlign: 'center',
    marginTop: '50px',
  },
};

export default Home;

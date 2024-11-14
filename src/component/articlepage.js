// src/Article.js
import React from "react";
import { Helmet } from "react-helmet-async";

const Article = ({ title, imageUrl, description }) => {
  return (
    <div style={styles.articleContainer}>
      <Helmet>
        <title>Article 1</title>
        <meta name="description" content="This is the first article." />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Article 1" />
        <meta property="og:description" content="This is the first article." />
        <meta property="og:image" content="%PUBLIC_URL%/img/sunflower.jpg" />
        {/* <meta property="og:url" content={window.location.href} /> */}
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Article 1" />
        <meta name="twitter:description" content="This is the first article." />
        <meta name="twitter:image" content="%PUBLIC_URL%/img/sunflower.jpg" />
      </Helmet>

      <h1 style={styles.title}>"Article 1"</h1>
      <img style={styles.image} src="%PUBLIC_URL%/img/sunflower.jpg" alt={"title"} />
      <p style={styles.description}>"This is the first article."</p>
    </div>
  );
};

const styles = {
  articleContainer: {
    border: "1px solid #ddd",
    padding: "20px",
    margin: "20px auto",
    maxWidth: "600px",
    textAlign: "center",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    height: "auto",
    marginTop: "10px",
  },
  description: {
    marginTop: "15px",
    fontSize: "16px",
  },
};

export default Article;

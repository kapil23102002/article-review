// src/Article.js
import React from "react";
import { Helmet } from "react-helmet-async";

const Article = ({ title, imageUrl, description }) => {
  return (
    <div style={styles.articleContainer}>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={window.location.href} />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageUrl} />
      </Helmet>

      <h1 style={styles.title}>{title}</h1>
      <img style={styles.image} src={imageUrl} alt={title} />
      <p style={styles.description}>{description}</p>
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

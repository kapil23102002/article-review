// src/App.js
import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Home from "./component/homepage";
import Article from "./component/articlepage";
import NotFound from "./component/notfoundpage";

function App() {
  return (
    <HelmetProvider>
      <div>
        <nav style={styles.nav}>
          <Link style={styles.link} to="/">
            Home
          </Link>
          <Link style={styles.link} to="/article1">
            Article 1
          </Link>
          <Link style={styles.link} to="/article2">
            Article 2
          </Link>
          <Link style={styles.link} to="/article3">
            Article 3
          </Link>
          <Link style={styles.link} to="/article4">
            Article 4
          </Link>
          <Link style={styles.link} to="/article5">
            Article 5
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/article1"
            element={
              <Article
                // title="Article 1"
                // imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6z9o-X7Ay_6TKelMmo_R1Ps6pbytlhs4n9Q&s/600x400"
                // description="This is the first article."
              />
            }
          />
          {/* <Route
            path="/article2"
            element={
              <Article
                title="Article 2"
                imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToIZgsflyd1YiDYZDYAti86gBy31voZnPEwA&s/600x400"
                description="This is the second article."
              />
            }
          />
          <Route
            path="/article3"
            element={
              <Article
                title="Article 3"
                imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgolBdeaXdt7hZ4G28YiA8shOCg4jkBg08uA&s/600x400"
                description="This is the third article."
              />
            }
          />
          <Route
            path="/article4"
            element={
              <Article
                title="Article 4"
                imageUrl="https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1726012800&semt=ais_hybrid/600x400"
                description="This is the fourth article."
              />
            }
          />
          <Route
            path="/article5"
            element={
              <Article
                title="Article 5"
                imageUrl="https://static9.depositphotos.com/1074452/1184/i/450/depositphotos_11843630-stock-photo-jpg-key-shows-image-format.jpg/600x400"
                description="This is the fifth article."
              />
            }
          /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </HelmetProvider>
  );
}

const styles = {
  nav: {
    padding: "10px",
    textAlign: "center",
    background: "#333",
  },
  link: {
    color: "#fff",
    margin: "0 15px",
    textDecoration: "none",
    fontSize: "18px",
  },
};

export default App;

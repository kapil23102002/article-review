import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";

// Use hydrateRoot for hydration instead of createRoot for React Snap
const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  // If the root element already has content (e.g., from prerendering), use hydrateRoot
  ReactDOM.hydrateRoot(
    rootElement,
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  );
} else {
  // Otherwise, use createRoot for regular rendering
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  );
}

// Measure performance in your app
reportWebVitals();

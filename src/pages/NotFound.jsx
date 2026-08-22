import { Link } from "react-router-dom";
import React from "react";

function NotFound() {
  return (
    <div className="state-box not-found">
      <h1>404</h1>
      <h2>Page not found</h2>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" className="primary-btn">
        Go Home
      </Link>
    </div>
  );
}

export default NotFound;
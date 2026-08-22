import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import React from "react";

function Login() {
  const { loginAsGuest } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from || "/";

  function handleGuestLogin() {
    loginAsGuest();
    navigate(from, { replace: true });
  }

  return (
    <section className="auth-page">
      <div className="auth-card">
        <span className="eyebrow">MOCK AUTHENTICATION</span>
        <h1>Welcome back</h1>
        <p>
          This sprint uses mock authentication instead of a real backend.
        </p>

        <button className="primary-btn full-btn" onClick={handleGuestLogin}>
          Login as Guest
        </button>
      </div>
    </section>
  );
}

export default Login;
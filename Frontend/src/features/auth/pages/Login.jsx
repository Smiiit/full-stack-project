import React, { useState } from "react";
import "../auth.style.scss";
import { Link } from "react-router";
import { useAuth } from "../hooks/useAuth";

export default function Login() {
  const { loading, handleLogin } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin({ email, password });
  };

  if (loading) {
    return (
      <main>
        <h1>Loading....</h1>
      </main>
    );
  }

  return (
    <main>
      <div className="form-container">
        <h1>Login</h1>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter email address"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <button className="button primary-button">Login</button>
        </form>

        <p>
          Don't have an account ? <Link to={"/register"}> Register </Link>
        </p>
      </div>
    </main>
  );
}

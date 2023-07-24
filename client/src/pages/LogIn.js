import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthContext";
import './LogIn.css'

const LogIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { user, signIn } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signIn(username, password);
      navigate("/");
      console.log("This is username", username, "This is password", password);
    } catch (err) {
      setError(err.message);
    }
  };

  if (user) {
    // Redirect to the profile page
    navigate("/profile");
  }

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="input-field"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="input-field"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="confirm-btn" type="submit">Login</button>
        <h2>Register</h2>
        <Link to="/signUp">
          <button className="confirm-btn">Register</button>
        </Link>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default LogIn;
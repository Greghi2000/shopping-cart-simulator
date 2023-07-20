import { useDispatch } from "react-redux";
import { signIn } from "../auth"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { setUser, setIsLoading } from "../store/authentication";

const LogIn = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
      e.preventDefault();
      setError("");
  
      try {
        await signIn(username, password);
        dispatch(setUser(username));
        navigate("/");
      } catch (err) {
        setError(err.message);
      } finally {
        dispatch(setIsLoading(false));
      }
    }

    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
        {error && <p>{error}</p>}
      </div>
    )
}
 
export default LogIn;
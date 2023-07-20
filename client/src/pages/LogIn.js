import { Link, unstable_HistoryRouter, useNavigate } from "react-router-dom"
import { signIn } from "../auth"
import { useState } from "react"

const LogIn = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate()
  
    const handleSubmit = async (e) => {
      e.preventDefault()
      setError("")
  
      try {
        await signIn(username, password)
        navigate('/')
      } catch (err) {
        setError(err.message)
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
import { useEffect, useState } from "react"
import { signUp } from "../auth"
import { useNavigate } from "react-router-dom"
import './SignUpPage.css'

const SignUpPage = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [success, setSuccess] = useState(false)
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    try {
      await signUp(username, email, password)
      setSuccess(true)
    } catch (err) {
      setError(err.message)
    }
  }

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        navigate("/confirm-sign-up");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [success, navigate])

  if (success) {
    return (
      <div>
        <h2>SignUp successful!</h2>
        <p>Please check your email for the confirmation code.</p>
      </div>
    )
  }
    return (
      <div className="signup-container">
      <h2>SignUp</h2>
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
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
          />
          <input
              className="input-field"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
          />
          <button className="confirm-btn" type="submit">SignUp</button>
      </form>
      {error && <p>{error}</p>}
  </div>
    )
}
 
export default SignUpPage;
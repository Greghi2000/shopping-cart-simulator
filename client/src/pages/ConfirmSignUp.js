import { useEffect, useState } from "react"
import { confirmSignUp } from "../auth"
import { useNavigate } from "react-router-dom"
import './ConfirmSignUp.css'

const ConfirmSignUp = () => {
    const [username, setUsername] = useState("")
    const [code, setCode] = useState("")
    const [error, setError] = useState("")
    const [success, setSuccess] = useState(false)
    const navigate = useNavigate()
  
    const handleSubmit = async (e) => {
      e.preventDefault()
      setError("")
      try {
        await confirmSignUp(username, code)
        setSuccess(true)
      } catch (err) {
        setError(err.message)
      }
    }
    useEffect(() => {
      if (success) {
        const timer = setTimeout(() => {
          navigate("/login")
        }, 5000);
  
        return () => clearTimeout(timer)
      }
    }, [success, navigate])

    if (success) {
      return (
        <div className="confirm-signup-container">
          <h2>Confirmation successful!</h2>
          <p>You can now log in with your credentials. Go browse the app!</p>
        </div>
      )
    }

    return (
      <div className="confirm-signup-container">
        <h2>Confirm Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input
            className="input-field"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="input-field" // Added className
            type="text"
            placeholder="Confirmation code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <button className="confirm-btn" type="submit">Confirm</button> {/* Added className */}
        </form>
        {error && <p>{error}</p>}
      </div>
    )
}
 
export default ConfirmSignUp;
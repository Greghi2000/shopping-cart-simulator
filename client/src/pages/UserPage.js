import { useContext } from "react"
import { AuthContext } from "../AuthContext"
import './UserPage.css'

const UserPage = () => {
  const { user, signOut } = useContext(AuthContext)

  return (
    <div className="user-page">
      {user && (
        <div className="user-profile">
          <h2>User Profile</h2>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
        </div>
      )}
      <button onClick={signOut} className="sign-out-btn">Sign Out</button>
    </div>
  )
}
 
export default UserPage;
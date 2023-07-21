import { CognitoUserPool, CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js"
import { cognitoConfig } from "./cognitoConfig"

const userPool = new CognitoUserPool({
UserPoolId: cognitoConfig.UserPoolId,
ClientId: cognitoConfig.ClientId,
})

export function signUp(username, email, password) {
  return new Promise((resolve, reject) => { //Cognito doesnt support promises so we have to wrap all funcs in promises
    userPool.signUp(
      username,
      password,
      [{ Name: "email", Value: email }],
      null,
      (err, result) => {
        if (err) {
          reject(err)
          return
        }
        resolve(result.user)
      }
    )
  })
}

export function confirmSignUp(username, code) {
  return new Promise((resolve, reject) => {
      const cognitoUser = new CognitoUser({
        Username: username,
        Pool: userPool,
      })
  
      cognitoUser.confirmRegistration(code, true, (err, result) => { //true is to mark email as verified
        if (err) {
          reject(err)
          return
        }
        resolve(result)
      })
  })
}

export function signIn(username, password) {
  return new Promise((resolve, reject) => {
    const authenticationDetails = new AuthenticationDetails({
      Username: username,
      Password: password,
    })
    console.log('username from signIn what i would set to state', username)
    //set this to redux user state

    const cognitoUser = new CognitoUser({
      Username: username,
      Pool: userPool,
    })

    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: (result) => {
        resolve(result)
      },
      onFailure: (err) => {
        reject(err)
      },
    })
  })
}

export function forgotPassword(username) {
// Forgot password implementation
}

export function confirmPassword(username, code, newPassword) {
// Confirm password implementation
}

export function signOut() {
    const cognitoUser = userPool.getCurrentUser()
    if (cognitoUser) {
      cognitoUser.signOut()
    }
    //set the auth user redux state to null

}

//Gets the current users username, email & sub. Use to get user data
export async function getCurrentUser() {
  return new Promise((resolve, reject) => {
    const cognitoUser = userPool.getCurrentUser()

    if (!cognitoUser) {
      reject(new Error("No user found"))
      return
    }

    cognitoUser.getSession((err, session) => {
      if (err) {
        reject(err)
        return
      }
      cognitoUser.getUserAttributes((err, attributes) => {
        if (err) {
          reject(err)
          return
        }
        const userData = attributes.reduce((acc, attribute) => {
          acc[attribute.Name] = attribute.Value
          return acc
        }, {})

        resolve({ ...userData, username: cognitoUser.username })
      })
    })
  })
}
//Gets the current users access and id tokens, JWT
export function getSession() {
  const cognitoUser = userPool.getCurrentUser()
  return new Promise((resolve, reject) => {
    if (!cognitoUser) {
      reject(new Error("No user found"))
      return
    }
    cognitoUser.getSession((err, session) => {
      if (err) {
        reject(err)
        return
      }
      resolve(session)
    })
  })
}
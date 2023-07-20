const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    username : "",
    email : "",
    password : "",
    error : "",
    success : false,
}

const productSlice = createSlice({
    name: "signup",
    initialState,
    reducers: {
      setUsername: (state, action) => {
        state.username = action.payload;
      },
      setEmail: (state, action) => {
        state.email = action.payload
      },
      setPassword: (state, action) => {
        state.password = action.payload
      },
      setError: (state, action) => {
        state.error = action.payload
      },
      setSuccess: (state, action) => {
        state.success = action.payload
      },
    },
})

console.log(productSlice)

export const { setUsername, setEmail, setPassword, setError, setSuccess } = productSlice.actions;
export default productSlice.reducer
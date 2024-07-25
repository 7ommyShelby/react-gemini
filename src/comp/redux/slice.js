import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  input: "",
  loading: true,
  output: "",
  recent: [],
}


export const counterSlice = createSlice({
  name: 'gemini',
  initialState,
  reducers: {
    setinput: (state, action) => {
      state.input = action.payload
    },
    setloading: (state, action) => {
      state.loading = action.payload
    },
    setoutput: (state, action) => {
      state.output = action.payload
    },
    setrecent: (state, action) => {
      state.recent.push(action.payload)
    }
  },
})

export const { setinput, setoutput, setloading, setrecent } = counterSlice.actions
export default counterSlice.reducer
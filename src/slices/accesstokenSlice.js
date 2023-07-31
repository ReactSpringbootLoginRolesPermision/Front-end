import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  accesstoken: "",
}

export const accesstokenSlice = createSlice({
  name: 'accesstoken',
  initialState,
  reducers: {
    setAccesstoken: (state, action) => {
     
      state.accesstoken = action.payload;
    },
    unsetAccesstoken: (state) => {
      state.accesstoken = "";
    },
   
  },
})

// Action creators are generated for each case reducer function
export const { setAccesstoken, unsetAccesstoken } = accesstokenSlice.actions

export default accesstokenSlice.reducer
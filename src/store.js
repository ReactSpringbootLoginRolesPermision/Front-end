import { configureStore } from '@reduxjs/toolkit'
import accestokenReducer from './slices/accesstokenSlice'


export const store = configureStore({
  reducer: {
    accesstoken: accestokenReducer,

  },
})
import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/counter/userSlice.js'

export const store = configureStore({
  reducer: {
    users: userReducer
  },
})
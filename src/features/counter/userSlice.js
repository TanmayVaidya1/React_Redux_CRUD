import { createSlice } from '@reduxjs/toolkit'
import { userList } from '../../Data'

const initialState = userList

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state,action) => {
      state.push(action.payload)
    },
    deleteUser: (state, action) => {
      return state.filter((user) => user.id !== action.payload);
    },
    updateUser: (state, action) => {
      const index = state.findIndex((user) => user.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload; 

      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { addUser, deleteUser, updateUser } = userSlice.actions

export default userSlice.reducer
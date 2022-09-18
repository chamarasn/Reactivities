import { createSlice } from '@reduxjs/toolkit'

export const proposalSlice = createSlice({
  name: 'proposal',
  initialState: {
    value: 0,
  },
  reducers: {
    updatingFieldValue: (state) => {
      state.value += 1;
    },
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = proposalSlice.actions

export default proposalSlice.reducer
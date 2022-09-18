import { createSlice } from '@reduxjs/toolkit'

export const proposalSlice = createSlice({
  name: 'proposal',
  initialState: {
      id:'',
      name:'',
      facility: []
  },
  reducers: {
    updatingFieldValue: (state, action) => {
     // ...state,
      
    },
    increment: (state) => {
      state.id += 1
    },
    decrement: (state) => {
      state.name = ""
    },
    // incrementByAmount: (state, action) => {
    //   state.facility = action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, updatingFieldValue } = proposalSlice.actions

export default proposalSlice.reducer
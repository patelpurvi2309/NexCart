// import { createSlice } from '@reduxjs/toolkit'

// export const counterSlice = createSlice({
//   name: 'counter',
//   initialState: {
//     value: 1,
//     title: 'rutu',
//     temp: true
//   },
//   reducers: {
//     increment: (state) => {
//       if (state.value === 10) {
//         alert("can't add more")
//         return
//       }
//       else {
//         state.value += 1
//       }
//     },
//     decrement: (state) => {
//       if (state.value === 1) {
//         alert("can't less than 1")
//         return
//     //   }
//       else {
//         state.value -= 1
//       }
//     },
//     changeTitle: (state, action) => {

//       state.title = state.temp ? 'purvi ' : 'jay';
//       state.temp = !state.temp
//       state.value += 10
//       //  state.title = action.payload
//     },
//     incrementByAmount: (state, action) => {
//       state.value += action.payload
//     },
//   },
// })

// export const { increment, decrement, incrementByAmount, changeTitle } = counterSlice.actions

// export default counterSlice.reducer
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  timeLeft: 25,
  sessionLength: 25,
  breakLength: 5,
  isSession: true,
  isBreak: false,
}

export const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    incrementSession: (state) => {
      state.sessionLength += 1
      state.timeLeft += 1
    },
    decrementSession: (state) => {
      state.sessionLength -= 1
      state.timeLeft -= 1
    },
    reset: (state) => {
      state.sessionLength = initialState.sessionLength
    },
    startTimer: (state, action) => {
      state.isSession = true
      state.isBreak = false
    },
  },
})

export const { incrementSession, decrementSession, reset, startTimer } =
  timerSlice.actions

export const selectSessionLength = (state) => state.timer.sessionLength
export const selectTimeLeft = (state) => state.timer.timeLeft

export default timerSlice.reducer

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  timeLeft: 25,
  sessionLength: 25,
  breakLength: 5,
  isSession: true,
  isBreak: false,
}

export const pomodoroTimerSlice = createSlice({
  name: 'pomodoroTimer',
  initialState,
  reducers: {
    incrementSession: (state) => {
      state.sessionLength += 1
    },
    decrementSession: (state) => {
      state.sessionLength -= 1
    },

    reset: (state) => {
      state.sessionLength = initialState.sessionLength
    },
    startTimer: (state) => {
      state.isSession = true
      state.isBreak = false
    },
  },
})

export const { incrementSession, decrementSession, reset, startTimer } =
  pomodoroTimerSlice.actions

export const selectSessionLength = (state) => state.timer.sessionLength

export default pomodoroTimerSlice.reducer

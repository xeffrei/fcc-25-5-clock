import React from 'react'
import { Provider } from 'react-redux'
import store from '../../app/store'
import { useSelector, useDispatch } from 'react-redux'
import {
  decrementSession,
  incrementSession,
  selectSessionLength,
  selectTimeLeft,
  reset,
} from './timerSlice'

export const Timer = () => {
  const sessionLength = useSelector(selectSessionLength)
  const timeleft = useSelector(selectTimeLeft)
  const dispatch = useDispatch()

  const sessionSettings = () => {
    // may become its own feature/component later
    return (
      <>
        <div
          data-testid='session-label'
          id='session-label'
        >
          Session Length
        </div>
        <div
          data-testid='session-decrement'
          id='session-decrement'
          onClick={() => dispatch(decrementSession())}
        >
          ➖
        </div>
        <div
          data-testid='session-length'
          id='session-length'
        >
          {sessionLength}
        </div>
        <div
          data-testid='session-increment'
          id='session-increment'
          onClick={() => dispatch(incrementSession())}
        >
          ➕
        </div>
      </>
    )
  }

  const breakSettings = () => {
    // may become its own feature/component later
    return (
      <>
        <div
          data-testid='break-label'
          id='break-label'
        >
          Break Length
        </div>
        <div
          data-testid='break-decrement'
          id='break-decrement'
        >
          ➖
        </div>
        <div
          data-testid='break-length'
          id='break-length'
        >
          5
        </div>
        <div
          data-testid='break-increment'
          id='break-increment'
        >
          ➕
        </div>
      </>
    )
  }

  const timerFunctions = () => {
    // may become its own feature/component later
    return (
      <>
        <div
          data-testid='start_stop'
          id='start_stop'
        >
          Start/Stop
        </div>
        <div
          data-testid='reset'
          id='reset'
          onClick={() => dispatch(reset())}
        >
          Reset
        </div>
      </>
    )
  }

  const timerDisplay = () => {
    // may become its own feature/component later
    return (
      <>
        <div
          data-testid='timer-label'
          id='timer-label'
        >
          Session
        </div>
        <div
          data-testid='time-left'
          id='time-left'
        >
          {timeleft < 10 ? `0${timeleft}:00` : `${timeleft}:00`}
        </div>
      </>
    )
  }

  return (
    <div data-testid='pomodoro-timer'>
      <h1>🍅 Pomodoro Timer 🍅</h1>
      {breakSettings()}
      {sessionSettings()}
      {timerDisplay()}
      {timerFunctions()}
    </div>
  )
}

export const TimerProvider = () => {
  return (
    <Provider store={store}>
      <Timer />
    </Provider>
  )
}

export default TimerProvider

import React, { Fragment } from 'react'
export const PomodoroTimer = () => {
  const sessionTracker = () => {
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
        >
          ➖
        </div>
      </>
    )
  }

  const breakTracker = () => {
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
      </>
    )
  }

  return (
    <div data-testid='pomodoro-timer'>
      <h1>🍅 Pomodoro Timer 🍅</h1>
      {breakTracker()}
      {sessionTracker()}
    </div>
  )
}

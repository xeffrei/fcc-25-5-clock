import React, { Fragment } from 'react'
export const PomodoroTimer = () => {
  const sessionTracker = () => { // may become its own feature/component later
    return (
      <>
        <div
          data-testid='session-label'
          id='session-label'
        >
          Session Length
        </div>
      </>
    )
  }

  const breakTracker = () => { // may become its own feature/component later
    return (
      <>
        <div
          data-testid='break-label'
          id='break-label'
        >
          Break Length
        </div>
      </>
    )
  }

  return (
    <div data-testid='pomodoro-timer'>
      <h1>Pomodoro Timer</h1>
      {breakTracker()}
      {sessionTracker()}
    </div>
  )
}

import React, { Fragment } from 'react'
export const PomodoroTimer = () => {
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
        >
          ➖
        </div>
        <div
          data-testid='session-length'
          id='session-length'
        >
          25
        </div>
        <div
          data-testid='session-increment'
          id='session-increment'
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

  return (
    <div data-testid='pomodoro-timer'>
      <h1>🍅 Pomodoro Timer 🍅</h1>
      {breakSettings()}
      {sessionSettings()}
    </div>
  )
}

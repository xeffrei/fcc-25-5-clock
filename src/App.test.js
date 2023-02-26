import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithProviders } from './utils/testProviderUtil'
import App from './App'

test('renders counter', () => {
  renderWithProviders(<App />)
  const pomodoroTimer = screen.getByTestId('pomodoro-timer')
  expect(pomodoroTimer).toBeInTheDocument()
})

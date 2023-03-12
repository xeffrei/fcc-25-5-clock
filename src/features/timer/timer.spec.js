import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithProviders } from '../../utils/testProviderUtil'
import PomodoroTimer from './timer'

describe('PomodoroTimer', () => {
  it('contains an element with id break-label, that contains string Break Length', () => {
    renderWithProviders(<PomodoroTimer />)
    const breakLabel = screen.getByTestId('break-label')
    expect(breakLabel).toHaveAttribute('id', 'break-label')
    expect(breakLabel).toHaveTextContent('Break Length')
  })

  it('contains an element with id session-label, that contains string Session Length', () => {
    renderWithProviders(<PomodoroTimer />)
    const sessionLabel = screen.getByTestId('session-label')
    expect(sessionLabel).toHaveAttribute('id', 'session-label')
    expect(sessionLabel).toHaveTextContent('Session Length')
  })

  it('contains an element with id break-decrement', () => {
    renderWithProviders(<PomodoroTimer />)
    const breakDecrement = screen.getByTestId('break-decrement')
    expect(breakDecrement).toHaveAttribute('id', 'break-decrement')
    expect(breakDecrement).toHaveTextContent('➖')
  })

  it('contains an element with id session-decrement', () => {
    renderWithProviders(<PomodoroTimer />)
    const sessionDecrement = screen.getByTestId('session-decrement')
    expect(sessionDecrement).toHaveAttribute('id', 'session-decrement')
    expect(sessionDecrement).toHaveTextContent('➖')
  })

  it('contains an element with id break-increment', () => {
    renderWithProviders(<PomodoroTimer />)
    const breakIncrement = screen.getByTestId('break-increment')
    expect(breakIncrement).toHaveAttribute('id', 'break-increment')
    expect(breakIncrement).toHaveTextContent('➕')
  })

  it('contains an element with id session-increment', () => {
    renderWithProviders(<PomodoroTimer />)
    const sessionIncrement = screen.getByTestId('session-increment')
    expect(sessionIncrement).toHaveAttribute('id', 'session-increment')
    expect(sessionIncrement).toHaveTextContent('➕')
  })

  it('contains an element with id break-length, that by default (on load) displays a value of 5', () => {
    renderWithProviders(<PomodoroTimer />)
    const breakLength = screen.getByTestId('break-length')
    expect(breakLength).toHaveAttribute('id', 'break-length')
    expect(breakLength).toHaveTextContent('5')
  })

  it('contains an element with id session-length, that by default (on load) displays a value of 25', () => {
    renderWithProviders(<PomodoroTimer />)
    const sessionLength = screen.getByTestId('session-length')
    expect(sessionLength).toHaveAttribute('id', 'session-length')
    expect(sessionLength).toHaveTextContent('25')
  })

  it('contains an element with id timer-label, that contains text "Session"', () => {
    renderWithProviders(<PomodoroTimer />)
    const timerLabel = screen.getByTestId('timer-label')
    expect(timerLabel).toHaveAttribute('id', 'timer-label')
    expect(timerLabel).toHaveTextContent('Session')
  })

  it('contains an element with id time-left, that by default (on load) displays a value of 25:00', () => {
    renderWithProviders(<PomodoroTimer />)
    const timeLeft = screen.getByTestId('time-left')
    expect(timeLeft).toHaveAttribute('id', 'time-left')
    expect(timeLeft).toHaveTextContent('25:00')
  })
})

describe('Session settings', () => {
  it('increments session length when session-increment is clicked', () => {
    renderWithProviders(<PomodoroTimer />)
    const sessionLength = screen.getByTestId('session-length')
    const sessionIncrementButton = screen.getByTestId('session-increment')
    userEvent.click(sessionIncrementButton).then(() => {
      expect(sessionLength).toHaveTextContent('26')
    })
  })

  it('decrements session length when session-decrement is clicked', () => {
    renderWithProviders(<PomodoroTimer />)
    const sessionLength = screen.getByTestId('session-length')
    const sessionDecrementButton = screen.getByTestId('session-decrement')
    userEvent.click(sessionDecrementButton).then(() => {
      expect(sessionLength).toHaveTextContent('24')
    })
  })
})

describe('timer functions', () => {
  describe('start-stop button', () => {
    it('contains an element with id start-stop', () => {
      renderWithProviders(<PomodoroTimer />)
      const startStopButton = screen.getByTestId('start_stop')
      expect(startStopButton).toHaveAttribute('id', 'start_stop')
      expect(startStopButton).toHaveTextContent('Start')
    })
  })

  describe('reset button', () => {
    it('contains an element with id reset', () => {
      renderWithProviders(<PomodoroTimer />)
      const resetButton = screen.getByTestId('reset')
      expect(resetButton).toHaveAttribute('id', 'reset')
      expect(resetButton).toHaveTextContent('Reset')
    })
  })
})
